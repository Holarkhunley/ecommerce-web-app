import axios from "axios";
import { getToken } from "../authService"; // make sure this returns JWT

const API_URL = "http://localhost:4000/api";

const createOrder = async (payload: {
  reference: string;
  paymentReference: string;
  customerName: string;
  customerEmail: string;
  phoneNumber: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }[];
  items: {
    _id?: string;
    name: string;
    image:string;
    price: number;
    quantity: number;
    orderId: string;
  }[];
  totalAmount: number;
  paymentStatus: string;
  paymentMethod:string;
  shippingMethod:string;
}) => {
  try {
    
    const token = getToken(); // get JWT from localStorage
    if (!token) {
  alert("You are not logged in or token is missing!");
  return;
}
    console.log("Token being sent to backend:", token);
    const res = await axios.post(`${API_URL}/verify`, payload, {
      headers: {
        Authorization: `Bearer ${token}`, // <--- add this
      },
    });
    return res.data;
  } catch (error: any) {
    console.error(
      "Order creation failed:",
      error.response?.data || error.message
    );
    throw error;
  }
};
export default createOrder;
