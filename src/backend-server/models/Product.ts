
import mongoose, {Schema} from "mongoose";

export interface Iproduct  {
  id:number,
  name: string,
  image: string,
  category: string,
  price:number,
  OriginalPrice:number,
  default:boolean,
  brand?: string,
  supplier?: mongoose.Types.ObjectId;
  discount?: number;
  variants?: {
    color?: string;
    size?: string;
    stock?: number;
    price?: number;
  }[];
  createdAt?: Date; // ✅ add this
}



const VariantSchema = new mongoose.Schema({
  color: { type: String },
  size: { type: String },
  stock: { type: Number },
  price: { type: Number },
});


const productSchema = new mongoose.Schema<Iproduct>({
  id:Number,
  name: String,
  image: String,
  category: String,
  price:Number,
  OriginalPrice:Number,
  default:Boolean,
  brand: String,
  supplier:  { type: Schema.Types.ObjectId, ref: "Vendor" }, //  Reference
  discount: { type: Number, default: 0 },
  variants: [VariantSchema], // 👈 variants array
  createdAt: { type: Date, default: Date.now },
});

// Create and export the model
const Product = mongoose.model<Iproduct>('Product', productSchema);
export default Product;