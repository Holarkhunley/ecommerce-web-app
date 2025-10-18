import express from "express";
import Product from "../models/Product.ts";
import User from "../models/Users.ts";
import { register, login} from "../AuthController/authController.ts";
import { Protected, isAdmin } from "../middlewares/middleware.ts";
import Order from "../models/Order.ts";
import Transactionss from "../models/Transactions.ts";
import { verifyPayment } from "../AuthController/authController.ts";
import { Traffc } from "../AuthController/authController.ts";
import { Conversion } from "../AuthController/authController.ts";
import { trafficLocation } from "../AuthController/authController.ts";
import { getVisitorsOverTime } from "../AuthController/authController.ts";
import { logTraffic } from "../middlewares/middleware.ts";
import vendorSchema from "../models/Supplier.ts";
import type { Request, Response } from "express";
import { updateProfile } from "../AuthController/authController.ts";
import { getProfile } from "../AuthController/authController.ts";
import Profle from "../models/Profile.ts";
import {getNotify} from "../AuthController/authController.ts"
import { getDashboardStats } from "../AuthController/authController.ts";
import { topProducts } from "../AuthController/authController.ts";
import { getLastFiveOrders } from "../AuthController/authController.ts";
import { getFiveRecentCustomers } from "../AuthController/authController.ts";
import { getLastSevenDaysSales } from "../AuthController/authController.ts";
import { sendEmail } from "../AuthController/authController.ts";
import { addCustomer } from "../AuthController/authController.ts";
import { createPasswordForCustomer } from "../AuthController/authController.ts";

const router = express.Router(); // ✅ now it works

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
}

// POST /api/products - Create a new product
router.post("/addProducts", async (req, res) => {
  console.log("Received:", req.body);
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

// GET /api/products?category=Phones - Get products by category
router.get("/getProducts", async (req, res) => {
  const { category, default: isDefault } = req.query;
  const filter: any = {};

  try {
    if (category) {
      filter.category = category;
    }
    if (isDefault !== undefined) {
      filter.isDefault = isDefault === "true";
    }
    const products = await Product.find(filter);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

router.post("/register", register);
router.post("/login",login);

router.get("/admin", Protected, isAdmin, (req: any, res: any) => {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  res.json({
    message: "Welcome On Board Admin!",
    firstName: req.user.firstname,
    lastName: req.user.lastname,
  });
});

router.get("/users", async (req, res) => {
  const Users = await User.find();
  res.json(Users);
});

router.delete("/users/:id", async (req, res) => {
  try {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User Deleted" });
  } catch(err:any) {
    res.status(400).json({message:err.message});
  }
});

router.put("/users/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedCustomer = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedCustomer) {
      res.status(404).json({ message: "Customer not found" })
      return;
    }

    res.json(updatedCustomer);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});


router.get("/order", Protected, async (req, res) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return; // stop here
    }

    let ord;

    if (req.user.role === "admin") {
      // Admin: fetch ALL orders
      ord = await Order.find().sort({ createdAt: -1 });
    } else {
      // Normal user: fetch ONLY their orders
      ord = await Order.find({ userId: req.user._id }).sort({ createdAt: -1 });
    }

    res.json(ord);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});


//Get single order
router.get("/order/:id", async (req, res) => {
  try {
    const ordr = await Order.findById(req.params.id);
    res.json(ordr);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

router.post("/verify", Protected, verifyPayment);

router.put("/order/:id", async (req, res) => {
  try {
    const { orderStatus, paymentStatus } = req.body;
    const newStatus = orderStatus
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus: newStatus, paymentStatus }, // also update paymentStatus if provided
      { new: true }
    );

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Failed to update order" });
  }
});


router.delete("/order/:id", async (req, res) => {
  try {
    const { orderStatus, paymentStatus } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus: "Cancelled" },
      { new: true }
    );
    res.json({ message: "Order cancelled", order });
  } catch (err) {
    res.status(500).json({ error: "Failed to update order" });
  }
});



//Get All Transaction
router.get("/transaction", async (req, res) => {
  try {
    const transac = await Transactionss.find().sort({ createdAt: -1 });
    res.json(transac);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

//Get the traffic
router.get("/traffic", Traffc);
router.get("/conversion", Conversion);
router.get("/countries", trafficLocation);
router.get("/get-visitors-overtime", getVisitorsOverTime);
router.post("/log-visit", logTraffic, (req, res) => {
  res.status(200).json({ message: "Traffic logged successfully" });
});

//Add a Vendor
router.post("/supplier-data", async (req: Request, res: Response) => {
  try {
    const vendor = new vendorSchema(req.body);
    await vendor.save();
    res.status(201).json(vendor);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Get all vendors
router.get("/get-supplier-data", async (req: Request, res: Response) => {
  const vendors = await vendorSchema.find();
  res.json(vendors);
});

router.put("/profile", Protected, updateProfile);
router.get("/profile", Protected, getProfile);


/// GET /api/users/:id → fetch user + profile
router.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Find the user
    const user = await User.findById(id).lean();
    if (!user)  res.status(404).json({ message: "User not found" });

    // Find the profile for that user
    const profile = await Profle.findOne({ userId: id }).lean();

    // Combine them
    res.json({ ...user, profile });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});





router.get("/order-items-details/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // Find the user
    const order = await Order.findById(id).lean();
    if (!order)  res.status(404).json({ message: "No Order Found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});




router.get("/notificationss",getNotify);
router.get("/getStats", getDashboardStats);
router.get("/last-seven-days-sales", getLastSevenDaysSales)
router.get("/top-products", topProducts);
router.get("/get-recent-orders",getLastFiveOrders);
router.get("/get-recent-customers",getFiveRecentCustomers);
router.post("/send-email",sendEmail);
router.post("/admin/add-customer",addCustomer);
router.post("/create-password",createPasswordForCustomer);
export default router;
