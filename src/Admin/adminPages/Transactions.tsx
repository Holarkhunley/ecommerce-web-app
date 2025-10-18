import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/components/ui/table";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/components/ui/dropdown-menu";
import { Button } from "@/components/components/ui/button";

function Transactions() {
  const [Transactions, setTransactions] = useState<any[]>([]);
  const [Loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRangeFilter, setDateRangeFilter] = useState("");
  const [customRange, setCustomRange] = useState<{
    from: Date | null;
    to: Date | null;
  }>({
    from: null,
    to: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  // 🔹 Filtering logic
  const filteredTransactions = Transactions.filter((transc) => {
    const createdAt = new Date(transc.createdAt);
    const today = new Date();

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
    return matchesDate;
  }).filter(
    (transc) =>
      transc.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transc.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transc._id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function fetchCustomerOrders() {
      try {
        const res = await axios.get("/api/transaction");
        setTransactions(res.data);
      } catch (err) {
        console.log("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCustomerOrders();
  }, []);

  {
    /*const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      const res = await axios.put(`/api/order/${orderId}`, { orderStatus: newStatus });
      // Update locally
      setTransactions((prev) =>
        prev.map((ord) => (ord._id === orderId ? { ...ord, orderStatus: newStatus } : ord))
      );
      console.log("Order status updated:", res.data);
    } catch (err) {
      console.log("Failed to update order status:", err);
    }
  };*/
  }

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  if (Loading) return <p>Loading Customer Transactions...</p>;

  return (
    <div className="p-10">
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
            <Button
              variant="outline"
              className="w-32 justify-self-end  py-[20px]"
            >
              Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 -top-2 -right-0 absolute">
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

      <Table className="w-full">
        <TableHeader>
          <TableRow className="bg-purple-800  hover:bg-purple-900">
            <TableHead className="text-white ">S/N</TableHead>
            <TableHead className="text-white ">Order ID</TableHead>
            <TableHead className="text-white ">Transaction Id</TableHead>
            <TableHead className="text-white ">Created At</TableHead>
            <TableHead className="text-white ">Name</TableHead>
            <TableHead className="text-white ">Payment Method</TableHead>
            <TableHead className="text-white ">Amount</TableHead>
            <TableHead className="text-white ">Currency</TableHead>
            <TableHead className="text-white ">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentTransactions.length === 0 ? (
            <TableRow>
              <TableCell colSpan={10}>No Transactions Found</TableCell>
            </TableRow>
          ) : (
            currentTransactions.map((transc, index) => (
              <TableRow key={transc._id} className="bg-white">
                <TableCell>
                  {index + 1 + (currentPage - 1) * ordersPerPage}
                </TableCell>
                <TableCell className="font-medium">{transc.orderId}</TableCell>
                <TableCell>{transc.transactionId}</TableCell>
                <TableCell>
                  {new Date(transc.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>{transc.name}</TableCell>
                <TableCell>{transc.amount}</TableCell>
                <TableCell>{transc.paymentMethod}</TableCell>
                <TableCell>{transc.status}</TableCell>
                <TableCell>
                  ₦
                  {transc.items
                    ?.reduce(
                      (total: number, item: any) =>
                        total + item.price * item.quantity,
                      0
                    )
                    ?.toLocaleString() || 0}
                </TableCell>
                <TableCell>{transc.paymentStatus}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default Transactions;
