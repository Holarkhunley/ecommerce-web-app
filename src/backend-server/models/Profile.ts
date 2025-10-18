import mongoose, { Schema, Types } from "mongoose";

export interface Iprofile  {
userId: Types.ObjectId;
  bio: string;
  address:string;
  phone:number;
  avatar?:string;
  status?:string;
  password:string;
  preferences: {
    theme: "light" | "dark";
    notifications: boolean;
  }
  createdAt?: Date;
  updatedAt?: Date;
}
const userProfile = new mongoose.Schema<Iprofile>(
  {
    userId:{ type:Schema.Types.ObjectId, ref: "User", required:true },
    bio: String,
    address: String,
    phone: String,
    avatar: String,
    password:String,
    status:{
        type:String,
        enum:["active","inactive","suspended"],
        default:"active"
    },
   preferences:{
    theme:{ type: String, enum:["light","dark"], default:"light"},
    notifications:{ type:Boolean, default:true }
   },
  },
  {
    timestamps: true,
  }
);


// Create and export the model
const Profle = mongoose.model<Iprofile>('Profile', userProfile);
export default Profle;