import mongoose from "mongoose";

export interface Trafc  {
  ip: string,
  device:string,
  source: string,
  country:string,
  state:string,
  createdAt:Date,
}
const TrafficSchema = new mongoose.Schema<Trafc>(
  {
    ip: String,
    device: String,
    source: String,
    country:String,
    state:String,
  },
  {
    timestamps: true,
  }
);


// Create and export the model
const Traffic = mongoose.model<Trafc>('Traffic', TrafficSchema);
export default Traffic;