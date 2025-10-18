import mongoose, { Schema, Types } from "mongoose";

// Define TypeScript interface (no Document extension)
export interface Transaction {
  transactionId: string;
  orderId: Types.ObjectId;
  name: string;
  amount: number;
  paymentMethod: "paystack" | "flutterwave" | "bank_transfer" | "cash_on_delivery";
  status: "Pending" | "Completed" | "Failed";
  createdAt: Date; // notice createdAt (not created)
  updatedAt: Date;
}

// Define Schema with types
const transactionSchema = new Schema<Transaction>(
  {
    transactionId: { type: String, required: true },
    orderId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ["paystack", "flutterwave", "bank_transfer", "cash_on_delivery"],
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Failed"],
      required: true,
    },
  },
  { timestamps: true } // ✅ automatically adds createdAt & updatedAt
);

// Model (use the interface for typing)
const Transaction = mongoose.model<Transaction>("Transaction", transactionSchema);

export default Transaction;
