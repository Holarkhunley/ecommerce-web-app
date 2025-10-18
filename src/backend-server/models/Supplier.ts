import mongoose from "mongoose";

export interface ISupplier{
  supplierName: string;
  brand: string;
  email: string;
  phone: string;
  address?: string;
  status: "active" | "suspended";
  createdAt: Date;
}

const VendorSchema = new mongoose.Schema<ISupplier>(
  {
    supplierName: { type: String, required: true },
    brand: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    status: { type: String, enum: ["active", "suspended"], default: "active" },
  },
  { timestamps: true }
);

export default mongoose.model<ISupplier>("Vendor", VendorSchema);
