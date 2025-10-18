import mongoose, { Schema, Types } from "mongoose";

interface INotification {
  type:
    | "NEW_ORDER"
    | "LOW_STOCK"
    | "OUT_OF_STOCK"
    | "PAYMENT_FAILED"
    | "REFUND_REQUEST"
    | "DELIVERY_UPDATE"
    | "CUSTOMER_MESSAGE";

  message: string;

  orderId?: Types.ObjectId; // references Order
  productId?: Types.ObjectId; // references Product
  userId?: Types.ObjectId; // references User

  isRead: boolean;

  priority: "HIGH" | "MEDIUM" | "LOW";

  createdAt: Date;
}




const notificationSchema = new mongoose.Schema<INotification>({
  type: {
    type: String,
    enum: [
      "NEW_ORDER",
      "LOW_STOCK",
      "OUT_OF_STOCK",
      "PAYMENT_FAILED",
      "REFUND_REQUEST",
      "DELIVERY_UPDATE",
      "CUSTOMER_MESSAGE",
    ],
    required: true,
  },
  message: { type: String, required: true },
  orderId: { type: Schema.Types.ObjectId, ref: "Order" },
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  isRead: { type: Boolean, default: false },
  priority: { type: String, enum: ["HIGH", "MEDIUM", "LOW"], default: "LOW" },
  createdAt: { type: Date, default: Date.now },
});

const notifications = mongoose.model<INotification>(
  "Notification",
  notificationSchema
);
export default notifications;
