import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/components/ui/avatar";

interface OrderItem {
  productName: string;
  price: number;
  quantity: number;
}

interface Order {
  _id: string;
  orderId: string;
  items: OrderItem[];
  totalAmount: number;
  orderStatus: string;
  createdAt: string;
}

function ProfilePage() {
  const [formData, setFormData] = useState({
    bio: "" ,
    avatar: "",
    phone: "",
    address: "",
  });

  const [message, setMessage] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("Token");
        const res = await axios.get("/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setFormData({
          bio: res.data.profile.bio || "",
          avatar: res.data.profile.avatar || "",
          address: res.data.profile.address || "",
          phone: String(res.data.profile.phone || ""),
        });
      } catch (err: any) {
        if (err.response?.status === 403) {
          // Account was deactivated
          localStorage.removeItem("Token");
          window.location.href = "/login";
          return;
        }
        console.error("Other error:", err);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("Token");
        const res = await axios.get("/api/order", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(res.data); // <- directly assign data
      } catch (err: any) {
        if (err.response?.status === 403) {
          // Account was deactivated -> force logout
          localStorage.removeItem("token");
          window.location.href = "/login?error=deactivated";
          return;
        }
        console.log("other error", err);
      }
    };

    fetchOrders();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("Token");
      const res = await axios.put("/api/profile", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(res.data.message);
    } catch (err: any) {
      if (err.response?.status === 403) {
        // Account was deactivated -> force logout
        localStorage.removeItem("token");
        window.location.href = "/login?error=deactivated";
        return;
      }
      console.log("other error", err);
    }

    return (
      <div className="p-8 max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-6">
            <Avatar className="w-24 h-24">
              {formData.avatar ? (
                <AvatarImage src={formData.avatar} alt="Profile Picture" />
              ) : (
                <AvatarFallback>{formData.bio?.[0] || "U"}</AvatarFallback>
              )}
            </Avatar>
            <div className="flex-1 space-y-4">
              <Input
                placeholder="Bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />
              <Input
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <Button onClick={handleSubmit} className="mt-2">
                Update Profile
              </Button>
              {message && <p className="text-sm text-green-600">{message}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Example: Orders Section */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Recent Orders */}
            <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
            {orders.length === 0 ? (
              <p>No orders found</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {orders.map((order) => (
                  <div
                    key={order._id}
                    className="p-4 border rounded-lg shadow-sm bg-white"
                  >
                    <p className="font-semibold">Order ID: {order.orderId}</p>
                    <p>Status: {order.orderStatus}</p>
                    <p>Total: ₦{order.totalAmount}</p>
                    <p>Date: {new Date(order.createdAt).toLocaleString()}</p>

                    <div className="mt-2">
                      <p className="font-medium">Items:</p>
                      <ul className="list-disc ml-5">
                        {order.items.map((item, idx) => (
                          <li key={idx}>
                            {item.productName} x {item.quantity} = ₦
                            {item.price * item.quantity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };
}
export default ProfilePage;
