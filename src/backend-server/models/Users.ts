import mongoose from "mongoose";

export interface IUser  {
  firstname: string,
  lastname:string,
  email: string,
  phonenumber:number,
  password: string,
  role?:{type:string, default:String},
  status?:string,
  createdAt?: Date,
  updatedAt?: Date,
}
const userSchema = new mongoose.Schema<IUser>(
  {
    firstname: String,
    lastname: String,
    email: String,
    phonenumber: Number,
    password: String,
    role: { type: String, default: "user" },
    status:{type:String,default:"Active"},
  },
  {
    timestamps: true,
  }
);


// Create and export the model
const User = mongoose.model<IUser>('Users', userSchema);
export default User;