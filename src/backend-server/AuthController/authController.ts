import User from "../models/Users.ts";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import type { Request, Response } from "express";
import Traffic from "../models/Traffic.ts";
import Transactionss from "../models/Transactions.ts";
import Order from "../models/Order.ts";
import Product from "../models/Product.ts";
import Profle from "../models/Profile.ts";
import notifications from "../models/Notifications.ts";
import { mailer } from "../routes/Mailer.ts";

export interface IShippingAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface IOrderItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  color?: string; // optional
  size?: string; // optional
}

export interface IOrderPayload {
  reference: string;
  paymentReference: string;
  customerName: string;
  customerEmail: string;
  phoneNumber: string;
  shippingAddress: IShippingAddress;
  items: IOrderItem[];
  totalAmount: number;
  paymentMethod: string;
}

const createToken = (user: any) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );
};

export const register = async (req: any, res: any) => {
  console.log("Recieved register data:", req.body);
  try {
    const { firstname, lastname, email, phonenumber, password, confirmpswd } =
      req.body;
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "User already exist" });

    if (password !== confirmpswd)
      return res.status(400).json({ messsage: "password do not match" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const savedUser = await User.create({
      firstname,
      lastname,
      email,
      phonenumber,
      password: hashedPassword,
      status: "Active",
    });

    const profile = await Profle.create({
      userId: savedUser._id,
      bio: "",
      avatar: "",
      address: "",
      phone: phonenumber,
      preferences: {
        theme: "light",
        notifications: true,
      },
      status: "active",
    });

    const token = createToken(savedUser);

    //Log Traffic

    res.status(201).json({
      message: "User Successfully Registered",
      token,
      user: {
        id: savedUser._id,
        FirstName: savedUser.firstname,
        LastName: savedUser.lastname,
      },
    });
  } catch (err: any) {
    res.status(500).json({ message: "Registered failed", error: err.message });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const users = await User.findOne({ email });
    if (!users)
      return res.status(400).json({ message: "invalid email or password" });

    if (users.status === "Inactive")
      return res
        .status(403)
        .json({ message: "Your account is inactive. Contact support" });

    //Compare Login Password And Database Password
    const match = await bcrypt.compare(password, users.password);
    if (!match)
      return res.status(400).json({ message: "invalid email or password" });

    const token = createToken(users);
    res.json({
      token,
      user: {
        id: users._id,
        FirstName: users.firstname,
        lastname: users.lastname,
      },
    });
  } catch (err: any) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

export const verifyPayment = async (req: Request, res: Response) => {
  try {
    // Destructure payload directly
    const {
      reference,
      customerName,
      customerEmail,
      phoneNumber,
      shippingAddress,
      items,
      totalAmount,
      paymentReference,
      paymentMethod,
    } = req.body as IOrderPayload;
    // Generate a unique orderId
    const newOrderId = uuidv4();

    // --------- VALIDATION ---------
    if (!reference || !paymentReference) {
      res.status(400).json({ error: "Missing payment reference" });
      return;
    } else if (!customerName || !customerEmail) {
      res.status(400).json({ error: "Missing customer name or email" });
      return;
    } else if (!Array.isArray(items) || items.length === 0) {
      res.status(400).json({ error: "Cart items are required" });
      return;
    } else if (typeof totalAmount !== "number") {
      res.status(400).json({ error: "totalAmount must be a number" });
      return;
    } else {
      const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;
      if (!PAYSTACK_SECRET) {
        res.status(500).json({ error: "Server payment config error" });
        return;
      } else {
        // --------- VERIFY WITH PAYSTACK ---------
        const verifyUrl = `https://api.paystack.co/transaction/verify/${encodeURIComponent(
          reference
        )}`;
        const verifyRes = await axios.get(verifyUrl, {
          headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` },
        });

        if (!verifyRes.data || verifyRes.data.status !== true) {
          res.status(400).json({
            error: "Paystack verification failed",
            detail: verifyRes.data,
          });
        } else {
          const tx = verifyRes.data.data;

          if (tx.status !== "success") {
            res.status(400).json({ error: "Payment not successful", data: tx });
          } else {
            // --------- AMOUNT CHECK ---------
            const paidAmount = tx.amount / 100;
            if (Math.round(paidAmount) !== Math.round(totalAmount)) {
              res.status(400).json({
                error: "Paid amount does not match order total",
                paid: paidAmount,
                expected: totalAmount,
              });
            } else {
              // --------- CREATE ORDER ---------
              if (!req.user) {
                res.status(401).json({ error: "Unauthorized" }); // <-- always check first
                return;
              }
              const newOrder = new Order({
                userId: req.user._id, //link order to logged-in user
                orderId: newOrderId, // root level
                customerName,
                customerEmail,
                phoneNumber,
                items,
                shippingAddress,
                totalAmount,
                paymentStatus: "Paid",
                orderStatus: "Pending",
                paystackReference: tx.reference,
                paymentMethod,
              });

              const saved = await newOrder.save();

              console.log("req.user:", req.user);
              console.log("items:", items);
              console.log("totalAmount:", totalAmount);
              console.log("customerName:", customerName);
              console.log("customerEmail:", customerEmail);
              console.log("paystackReference:", tx.reference);

              const notif = new notifications({
                type: "NEW_ORDER",
                message: `New order #${saved._id} placed by user ${customerName}(${customerEmail})`,
                orderId: saved._id,
                userId: saved.userId,
                priority: "HIGH",
              });

              await notif.save();

              // --------- CREATE TRANSACTION ---------
              const transaction = new Transactionss({
                transactionId: tx.reference,
                orderId: saved._id,
                name: customerName,
                amount: tx.amount / 100,
                paymentMethod: "paystack",
                status: "Completed",
              });
              await transaction.save();

              // --------- UPDATE INVENTORY (VERY IMPORTANT) ---------
              for (const item of items) {
                const product = await Product.findById(item.id);
                if (!product) continue;

                // ✅ declare variant here so it exists everywhere in this loop
                var variant:
                  | { color?: string; size?: string; stock?: number }
                  | undefined;

                if (product.variants && product.variants.length > 0) {
                  const variant = product.variants.find(
                    (v) =>
                      (v.color === item.color || !v.color) &&
                      (v.size === item.size || !v.size)
                  );
                  if (variant) {
                    variant.stock = (variant.stock || 0) - item.quantity;
                    if (variant.stock < 0) variant.stock = 0;
                  }
                }

                await product.save();

                //Stock Notifications

                if (
                  variant &&
                  variant.stock !== undefined &&
                  variant.stock === 0
                ) {
                  await notifications.create({
                    type: "OUT_OF_STOCK",
                    message: `Product ${product.name} (${variant.color || ""} ${
                      variant.size || ""
                    }) is running low (only ${variant.stock} left).`,
                    productId: product._id,
                    priority: "HIGH",
                  });
                }
              }

              res.status(201).json(saved);
            }
          }
        }
      }
    }
  } catch (err: any) {
    console.error("❌ Error in /verify:", err.response?.data || err.message);
    res
      .status(500)
      .json({ error: "Server error verifying payment", message: err.message });
  }
};

//Traffic Function
export const Traffc = async (req: Request, res: Response) => {
  try {
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
    const visitors = await Traffic.countDocuments({
      createdAt: { $gte: tenMinutesAgo },
    });

    const device = await Traffic.aggregate([
      { $match: { createdAt: { $gte: tenMinutesAgo } } },
      { $group: { _id: "$device", count: { $sum: 1 } } },
      { $project: { _id: 0, device: "$_id", count: 1 } },
    ]);

    const source = await Traffic.aggregate([
      { $match: { createdAt: { $gte: tenMinutesAgo } } },
      { $group: { _id: "$source", count: { $sum: 1 } } }, // ✅ use "source"
      { $project: { _id: 0, source: "$_id", count: 1 } }, // ✅ rename _id → source
    ]);
    res.json({ visitors, device, source });
  } catch (err) {
    console.log("Error fetching traffic data:", err);
    res.status(500).json({ error: "Failed to fetch traffic data" });
  }
};

//Conversion Fuction

export const Conversion = async (req: Request, res: Response) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    //count total document created today
    const totalOrders = await Order.countDocuments({
      createdAt: { $gte: today },
    });

    //calculate total revenue from todays order
    const revenueAgg = await Order.aggregate([
      { $match: { createdAt: { $gte: today } } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const revenue = revenueAgg.length > 0 ? revenueAgg[0].total : 0;

    const visitors = await Traffic.countDocuments({
      createdAt: { $gte: today },
    });

    var conversionRate;
    if (visitors > 0) {
      conversionRate = ((totalOrders / visitors) * 100).toFixed(2);
    } else {
      conversionRate = 0;
    }

    res.json({ orders: totalOrders, revenue, visitors, conversionRate });
  } catch (err) {
    console.error("Error Calculating Conversion:", err);
    res.status(500).json({ error: " Server error" });
  }
};

//Query By  Country/State
export const trafficLocation = async (req: Request, res: Response) => {
  try {
    const locations = await Traffic.aggregate([
      { $group: { _id: "$country", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $project: { _id: 0, country: "$_id", visitors: "$count" } },
    ]);

    const countries: Record<string, number> = {};
    locations.forEach((item: any) => {
      const key = item.country || "Unknown";
      countries[key] = item.visitors || 0;
    });

    res.json(countries);
  } catch (err) {
    if (err instanceof Error) {
      // if err really be an Error object
      res
        .status(500)
        .json({ error: "Failed to fetch countries", details: err.message });
    } else {
      // if err be anything else
      res
        .status(500)
        .json({ error: "Failed to fetch countries", details: String(err) });
    }
  }
};

export const getVisitorsOverTime = async (req: Request, res: Response) => {
  try {
    const { period = "daily" } = req.query; // default to daily

    let groupFormat: any;
    let sortFormat: any;

    if (period === "weekly") {
      groupFormat = {
        year: { $year: "$createdAt" },
        week: { $week: "$createdAt" },
      };
      sortFormat = { "_id.year": 1, "_id.week": 1 };
    } else if (period === "monthly") {
      groupFormat = {
        year: { $year: "$createdAt" },
        month: { $month: "$createdAt" },
      };
      sortFormat = { "_id.year": 1, "_id.month": 1 };
    } else {
      // daily
      groupFormat = {
        year: { $year: "$createdAt" },
        month: { $month: "$createdAt" },
        day: { $dayOfMonth: "$createdAt" }, // <-- fixed "$"
      };
      sortFormat = { "_id.year": 1, "_id.month": 1, "_id.day": 1 };
    }

    const visitors = await Traffic.aggregate([
      { $group: { _id: groupFormat, count: { $sum: 1 } } },
      { $sort: sortFormat },
    ]);

    res.json({ period, visitors });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // 1. Check if user exists
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return; // ⬅️ stop here
    }

    // 2. Extract data
    const userId = req.user._id;
    const updates = req.body;

    // 3. Update profile
    const updatedProfile = await Profle.findOneAndUpdate(
      { userId },
      { $set: updates },
      { new: true }
    );

    if (!updatedProfile) {
      res.status(404).json({ message: "Profile not found" });
      return; // stop here
    }

    // 4. Success
    res.json({
      message: "Profile updated successfully",
      profile: updatedProfile,
    });
  } catch (err: any) {
    res.status(500).json({
      message: "Failed to update profile",
      error: err.message,
    });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    //  Check if user exists
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return; // ⬅️ stop here
    }

    const profile = await Profle.findOne({ userId: req.user._id });
    const user = await User.findById(req.user._id).select("phonenumber");

    if (!profile) {
      res.status(404).json({ message: "Profile not found" });
      return; // stop here
    }

    // Send combined profile + phone
    res.json({
      profile: {
        ...profile.toObject(),
        phone: user?.phonenumber || "",
      },
    });
  } catch (err: any) {
    res.status(500).json({
      message: "Failed to update profile",
      error: err.message,
    });
  }
};

//Get Notifications
export const getNotify = async (req: Request, res: Response) => {
  try {
    const getNotifications = await notifications
      .find()
      .sort({ createdAt: -1 }) //Newest First
      .limit(20); //optional: only show last 20
    res.json(getNotifications);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Notifications" });
  }
};

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    // Get today start and end
    const todayStart = new Date(new Date().setHours(0, 0, 0, 0));
    const todayEnd = new Date(new Date().setHours(23, 59, 59, 999));

    //  Total Sales Today (sum of totalAmount for Paid orders)
    const totalSalesToday = await Order.aggregate([
      {
        $match: {
          paymentStatus: "Paid", // only count Paid orders
          createdAt: { $gte: todayStart, $lt: todayEnd },
        },
      },
      {
        $group: { _id: null, total: { $sum: "$totalAmount" } },
      },
    ]);

    // Count Pending Orders
    const pendingOrders = await Order.countDocuments({
      orderStatus: "Pending",
    });
    const totalCustomers = await User.countDocuments();
    const totalOrdersToday = await Order.countDocuments({
      createdAt: { $gte: todayStart, $lt: todayEnd },
    });

    // Send Back Response
    res.json({
      totalSalesToday: totalSalesToday[0]?.total || 0,
      pendingOrders,
      totalCustomers,
      totalOrdersToday,
    });
  } catch (error: any) {
    console.error(
      "Error fetching totalSalesToday and pendingOrders",
      error.message
    );
  }
};

export const getLastSevenDaysSales = async (req: Request, res: Response) => {
  try {
    // today
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 6); // include today + last 6 days

    const sales = await Order.aggregate([
      {
        $match: {
          orderStatus: "Delivered", // only completed sales
          createdAt: { $gte: sevenDaysAgo, $lte: today },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          total: { $sum: "$totalAmount" },
        },
      },
      { $sort: { _id: 1 } }, // sort by date
    ]);

    res.json(sales);
  } catch (error: any) {
    console.error("Error fetching sales:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const topProducts = async (req: Request, res: Response) => {
  try {
    const topProducts = await Order.aggregate([
      // Only delivered orders
      { $match: { orderStatus: "Delivered" } },

      // Break items array
      { $unwind: "$items" },

      { $match: { "items.name": { $ne: null } } }, // <-- filter out null names

      // Group by product name
      {
        $group: {
          _id: "$items.name", // <-- use name instead of productId
          totalSold: { $sum: "$items.quantity" },
        },
      },

      // Sort by most sold
      { $sort: { totalSold: -1 } },

      // Limit top 5
      { $limit: 5 },

      // Return formatted data
      {
        $project: {
          _id: 0,
          name: "$_id", // product name
          totalSold: 1,
        },
      },
    ]);

    res.json(topProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getLastFiveOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: -1 }) // latest orders first
      .limit(5)
      .select("orderId totalAmount customerName orderStatus createdAt");

    res.json(orders);
  } catch (error: any) {
    console.error("Error fetching recent orders:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const getFiveRecentCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await User.find()
      .sort({ createdAt: -1 }) // newest customers first
      .limit(5)
      .select("firstname lastname email createdAt");

    res.json(customers);
  } catch (error: any) {
    console.error("Error fetching recent customers:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const sendEmail = async (req: Request, res: Response) => {
  const { customerIds, message } = req.body;
  try {
    const customers = await User.find({ _id: { $in: customerIds } });

    const batchSize = 3; // smaller batch for safety
    for (let i = 0; i < customers.length; i += batchSize) {
      const batch = customers.slice(i, i + batchSize);

      await Promise.all(
        batch.map(async (c) => {
          try {
            await mailer(c.email, "Message from Admin Dashboard", message);
            console.log(`Email sent to ${c.email}`);
          } catch (err) {
            console.error(`Failed to send to ${c.email}:`, err);
          }
        })
      );

      console.log(`Batch ${i / batchSize + 1} done`);
      await new Promise((r) => setTimeout(r, 1000)); // pause between batches
    }

    res.json({ message: "All emails sent in batches successfully!" });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

//Admin Add Customer Function
export const addCustomer = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, phonenumber } = req.body;

    // 1. check if customer already exists
    const exist = await User.findOne({ email });
    if (exist) {
      res.status(400).json({ message: "Customer already exists" });
      return;
    }

    // 2. create new customer without password
    const savedUser = await User.create({
      firstname,
      lastname,
      email,
      phonenumber,
      password: null, // no password yet
      status: "Pending", // status is pending until password created
    });

    // 3. create token (valid for 1 hour)
    const token = jwt.sign(
      { id: savedUser._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    // 4. create the link for email
    const link = `http://localhost:5173/create-password?token=${token}`;

    // 5. send email using nodemailer
    await mailer(
      email, // to
      "Create Your Password", // subject
      `Hello ${firstname},
      Please create your password by clicking the link below: ${link}`
    );

    res.status(201).json({ message: "Customer added and email sent" });
  } catch (err: any) {
    res
      .status(500)
      .json({ message: "Error adding customer", error: err.message });
  }
};

//Create Password For Customer
export const createPasswordForCustomer = async (
  req: Request,
  res: Response
) => {
  try {
    const { token, password } = req.body;
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };
    console.log("✅ Decoded payload:", decoded); // <--- debug

    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(400).json({ message: "Invalid user" });
      return;
    } 

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password created successfully. You can now log in." });
  } catch (err: any) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
};
