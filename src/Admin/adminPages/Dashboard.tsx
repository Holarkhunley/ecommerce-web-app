import axios from "axios";
import { useState, useEffect } from "react";
import { getToken } from "../../authService";
import { SidebarInset } from "@/components/components/ui/sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Button } from "@/components/components/ui/button";
import { useNavigate } from "react-router-dom";

interface IrecentOrders {
  orderId: string;
  customerName: string;
  totalAmount: number;
  orderStatus: string;
}

interface IrecentCustomers {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  createdAt: string;
}

function Dashboard() {
  const [adminMessage, setAdminMessage] = useState("");
  const [data, setData] = useState([]);
  const [stats, setStats] = useState({
    totalSalesToday: 0,
    pendingOrders: 0,
    totalCustomers: 0,
    totalOrdersToday: 0,
  });
  const [topProductData, setTopProductData] = useState([]);
  const [orders, setOrders] = useState<IrecentOrders[]>([]);
  const [customers, setCustomers] = useState<IrecentCustomers[]>([]);
  const token = getToken();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get("/api/admin", {
          headers: {
            Authorization: `Bearer ${token}`, // send token in header
          },
        });
        setAdminMessage(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("Error fetching admin page:", err);
      }
    };
    fetchAdmin();
  }, []);

  //Fetch Stats
  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await axios.get("/api/getStats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    }
    fetchStats();
  }, []);

  useEffect(() => {
    fetch("/api/last-seven-days-sales", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((json) => {
        // format data for recharts
        const formatted = json.map((item: any) => ({
          date: item._id,
          total: item.total,
        }));
        setData(formatted);
      });
  }, []);

  //Fetch Top Products
  useEffect(() => {
    async function fetchTopProducts() {
      try {
        const response = await axios.get("/api/top-products", {
          headers: { Authorization: `Bearer ${token}` },
        }); // call backend
        setTopProductData(response.data); // save response in state
      } catch (error) {
        console.error("Error fetching top products:", error);
      }
    }

    fetchTopProducts(); // call function once when component mounts
  }, []);

  // fetch recent orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/api/get-recent-orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, []);

  // fetch recent customers
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.get("/api/get-recent-customers", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCustomers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCustomers();
  }, []);

  return (
    <SidebarInset>
      {/*<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>*/}
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-3 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Sales Today</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              ${stats.totalSalesToday}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Total Orders Today</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {stats.totalOrdersToday}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Total Customers</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {stats.totalCustomers}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Orders</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {stats.pendingOrders}
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 grid grid-cols-3 gap-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Sales (Last 7 Days)</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/*Top Products UI*/}
          <Card>
            <CardHeader>
              <CardTitle>Top 5 Best-Selling Products</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProductData}>
                  <XAxis dataKey="name" /> {/*  x-axis = product names */}
                  <YAxis /> {/* y-axis = total sold */}
                  <Tooltip /> {/* shows info on hover */}
                  <Bar dataKey="totalSold" fill="#2563eb" /> {/*bars */}
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-5 gap-2">
          {/* Recent Orders Table */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b p-2">Order ID</th>
                    <th className="border-b p-2">Customer</th>
                    <th className="border-b p-2">Amount</th>
                    <th className="border-b p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.orderId}>
                      <td className="border-b p-2">{order.orderId}</td>
                      <td className="border-b p-2">{order.customerName}</td>
                      <td className="border-b p-2">${order.totalAmount}</td>
                      <td className="border-b p-2">{order.orderStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Recent Customers Table */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Recent Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b p-2">Name</th>
                    <th className="border-b p-2">Email</th>
                    <th className="border-b p-2">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer._id}>
                      <td className="border-b p-2">
                        {customer.firstname + " " + customer.lastname}
                      </td>
                      <td className="border-b p-2">{customer.email}</td>
                      <td className="border-b p-2">
                        {new Date(customer.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/*Quick Action Content*/}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button onClick={() => navigate("/admin/product")}>
                Add Product
              </Button>
              <Button onClick={() => navigate("/admin/orders")}>Orders</Button>
              <Button onClick={() => navigate("/admin/manageuser")}>
                Manage Users
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarInset>
  );
}
export default Dashboard;
