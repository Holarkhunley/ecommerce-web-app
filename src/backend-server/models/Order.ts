import mongoose, { Types, Document } from "mongoose";

export interface OrderItem {
  name: string;
  image:string;
  price: number;
  quantity: number;
}

export interface ShippingInfo {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface OrderDocument extends Document {
  userId: Types.ObjectId; // <-- use ObjectId type
  orderId: string;
  customerName: string;
  customerEmail: string;
  phoneNumber:string;
  items: OrderItem[];
  shippingAddress: ShippingInfo[];
  totalAmount: number;
  paymentStatus: "Pending" | "Paid" | "Failed";
  orderStatus: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  paystackReference: string;
  paymentMethod:string;
  shippingMethod:string;
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new mongoose.Schema<OrderDocument>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // <--- add this
    orderId: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    phoneNumber :{type: String, required:true},
    items: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    shippingAddress: [
      {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
      },
    ],

    totalAmount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },
    orderStatus: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
    paystackReference: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    shippingMethod: { type: String, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model<OrderDocument>("Order", orderSchema);
export default Order;
