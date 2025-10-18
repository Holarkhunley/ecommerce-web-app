import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/components/ui/table";
import { useState, useEffect } from "react";
import { getToken } from "../../authService";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/components/ui/dialog";
import { Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/components/ui/dropdown-menu";

function CustomerOrders() {
  const [Orders, setOrders] = useState<any[]>([]);
  const [Loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;
  const token = getToken();

  // 🔹 Filter states
  const [orderStatusFilter, setOrderStatusFilter] = useState("");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("");
  const [paymentMethodFilter, setPaymentMethodFilter] = useState("");
  const [dateRangeFilter, setDateRangeFilter] = useState("");
  const [customRange, setCustomRange] = useState<{ from: Date | null; to: Date | null }>({
    from: null,
    to: null,
  });

  // 🔹 Filtering logic
  const filteredOrders = Orders.filter((ord) => {
    const createdAt = new Date(ord.createdAt);
    const today = new Date();

    // Order Status
    const matchesOrderStatus = orderStatusFilter
      ? ord.orderStatus === orderStatusFilter
      : true;

    // Payment Status
    const matchesPaymentStatus = paymentStatusFilter
      ? ord.paymentStatus === paymentStatusFilter
      : true;

    // Payment Method
    const matchesPaymentMethod = paymentMethodFilter
      ? ord.paymentMethod === paymentMethodFilter
      : true;

    // Date Range Quick
    let matchesDate = true;
    if (dateRangeFilter === "today") {
      matchesDate = createdAt.toDateString() === today.toDateString();
    } else if (dateRangeFilter === "week") {
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());
      matchesDate = createdAt >= startOfWeek && createdAt <= today;
    } else if (dateRangeFilter === "month") {
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      matchesDate = createdAt >= startOfMonth && createdAt <= today;
    }

    // Date Range Custom
    if (customRange?.from && customRange?.to) {
      matchesDate =
        createdAt >= customRange.from && createdAt <= customRange.to;
    }

    // ✅ Final check
    return (
      matchesOrderStatus &&
      matchesPaymentStatus &&
      matchesPaymentMethod &&
      matchesDate
    );
  }).filter(
    (ord) =>
      ord.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ord.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ord._id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  async function handleView(id: string) {
    try {
      const res = await axios.get(`/api/order-items-details/${id}`);
      setSelectedUser(res.data);
      setIsModalOpen(true);
    } catch (err) {
      console.error("Error fetching user details:", err);
    }
  }

  useEffect(() => {
    async function fetchCustomerOrders() {
      try {
        const res = await axios.get("/api/order", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(res.data);
      } catch (err) {
        console.log("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCustomerOrders();
  }, []);

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      const orderToUpdate = Orders.find((o) => o._id === orderId);
      const res = await axios.put(`/api/order/${orderId}`, {
        orderStatus: newStatus,
        paymentStatus: orderToUpdate.paymentStatus,
      });
      setOrders((prev) =>
        prev.map((ord) =>
          ord._id === orderId ? { ...ord, orderStatus: newStatus } : ord
        )
      );
      console.log("Order status updated:", res.data);
    } catch (err) {
      console.log("Failed to update order status:", err);
    }
  };

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  // ✅ Early return for loading
  if (Loading) {
    return <p>Loading Customer Orders...</p>;
  }

  // ✅ Main return for actual data
  return (
    <div className="p-10">
      {/* 🔹 Search Bar */}
      <div className="grid grid-cols-4 mb-3">
        <input
          type="text"
          placeholder="Search orders by name, email or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border col-span-3 rounded-md px-4 py-2 w-[550px] justify-self-start  focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

         {/* 🔹 Filters Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-32 justify-self-end  py-[20px]">Filters</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 -top-2 -right-0 absolute">
          <p className="px-2 text-sm font-semibold">Order Status</p>
          <DropdownMenuItem onClick={() => setOrderStatusFilter("Pending")}>
            Pending
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOrderStatusFilter("Processing")}>
            Processing
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOrderStatusFilter("Shipped")}>
            Shipped
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOrderStatusFilter("Delivered")}>
            Delivered
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOrderStatusFilter("Cancelled")}>
            Cancelled / Refunded
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <p className="px-2 text-sm font-semibold">Payment Status</p>
          <DropdownMenuItem onClick={() => setPaymentStatusFilter("Paid")}>
            Paid
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPaymentStatusFilter("Unpaid")}>
            Unpaid
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPaymentStatusFilter("Refunded")}>
            Refunded
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <p className="px-2 text-sm font-semibold">Payment Method</p>
          <DropdownMenuItem onClick={() => setPaymentMethodFilter("Card")}>
            Card
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPaymentMethodFilter("Bank Transfer")}>
            Bank Transfer
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPaymentMethodFilter("Cash on Delivery")}>
            Cash on Delivery
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setPaymentMethodFilter("Wallet")}>
            Wallet
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <p className="px-2 text-sm font-semibold">Date Range</p>
          <DropdownMenuItem onClick={() => setDateRangeFilter("today")}>
            Today
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDateRangeFilter("week")}>
            This Week
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDateRangeFilter("month")}>
            This Month
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>

     

      {/* 🔹 Orders Table */}
      <Table className="w-full">
        <TableHeader>
          <TableRow className="bg-purple-800 hover:bg-purple-900">
            <TableHead className="text-white ">S/N</TableHead>
            <TableHead className="text-white ">Order ID</TableHead>
            <TableHead className="text-white ">Created At</TableHead>
            <TableHead className="text-white ">Name</TableHead>
            <TableHead className="text-white ">Email</TableHead>
            <TableHead className="text-white ">Items</TableHead>
            <TableHead className="text-white ">Shipping Method</TableHead>
            <TableHead className="text-white ">Totals</TableHead>
            <TableHead className="text-white ">Payment Status</TableHead>
            <TableHead className="text-white ">Order Status</TableHead>
            <TableHead className="text-white ">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className=" bg-white">
          {filteredOrders.length === 0 ? (
            <TableRow>
              <TableCell colSpan={10}>No Orders Found</TableCell>
            </TableRow>
          ) : (
            currentOrders.map((ord, index) => (
              <TableRow key={ord._id}>
                <TableCell>
                  {index + 1 + (currentPage - 1) * ordersPerPage}
                </TableCell>
                <TableCell className="font-medium">{ord._id}</TableCell>
                <TableCell>
                  {new Date(ord.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>{ord.customerName}</TableCell>
                <TableCell>{ord.customerEmail}</TableCell>
                <TableCell>{ord.items.length}</TableCell>
                <TableCell>{ord.items.shippingMethod}</TableCell>
                <TableCell>
                  ₦
                  {ord.items
                    .reduce(
                      (total: number, item: any) =>
                        total + item.price * item.quantity,
                      0
                    )
                    .toLocaleString()}
                </TableCell>
                <TableCell>{ord.paymentStatus}</TableCell>
                <TableCell>
                  <Select
                    value={ord.orderStatus}
                    onValueChange={(value) =>
                      handleStatusChange(ord._id, value)
                    }
                  >
                    <SelectTrigger className="w-[140px] bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Processing">Processing</SelectItem>
                      <SelectItem value="Shipped">Shipped</SelectItem>
                      <SelectItem value="Delivered">Delivered</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleView(ord._id)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* 🔹 Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({
          length: Math.ceil(filteredOrders.length / ordersPerPage),
        }).map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* 🔹 Dialog for Order Details */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg max-h-[95vh] overflow-y-auto">
          <DialogHeader className="sticky top-0 w-full z-10 border-b">
            <DialogTitle>
              Order: {selectedUser && <p>{selectedUser.orderId}</p>}
            </DialogTitle>
          </DialogHeader>

          {selectedUser && (
            <div className="border-b flex flex-col gap-2 pb-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5" />
                <span>{selectedUser.customerName}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="w-5 h-5" />
                <span>{selectedUser.customerEmail}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <User className="w-5 h-5" />
                <span>{selectedUser.phoneNumber}</span>
              </div>
            </div>
          )}

          {/* 🔹 Order Summary */}
          <div>
            <p className="font-bold">Order Summary</p>
            {selectedUser?.items?.length ? (
              selectedUser.items.map((item: any) => (
                <div
                  key={item._id}
                  className="flex justify-between items-start border-b pb-2"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-20 object-cover rounded"
                    />
                    <div>
                      <p>{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold">
                    ₦{item.price.toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <p>No items in this order.</p>
            )}

            {/* 🔹 Shipping Info */}
            <div className="border-b pb-2">
              <p className="font-bold">Shipping Info</p>
              {selectedUser?.shippingAddress?.length ? (
                selectedUser.shippingAddress.map((item: any) => (
                  <div className="text-sm space-y-1">
                    <p>{item.street}</p>
                    <p>
                      {item.city}, {item.state}
                    </p>
                    <p>{item.postalCode}</p>
                    <p>{item.country}</p>
                  </div>
                ))
              ) : (
                <p>No Shipping Address</p>
              )}
            </div>

            {/* 🔹 Payment Info */}
            <div>
              <p className="font-bold">Payment Details</p>
              {selectedUser ? (
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <p>Payment Method</p>
                    {selectedUser.paymentMethod === "paystack" && (
                      <img
                        src="/paymethod-logos/paystack-2.svg"
                        alt="Paystack"
                        className="h-4"
                      />
                    )}
                  </div>
                  {selectedUser.items?.length ? (
                    selectedUser.items.map((item: any, index: number) => (
                      <div key={index} className="flex justify-between">
                        <p>Subtotal</p>
                        <p>₦{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    ))
                  ) : (
                    <p>No Items</p>
                  )}
                </div>
              ) : (
                <p>No Payment Information</p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomerOrders;
