import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/components/ui/alert-dialog";
import { Badge } from "@/components/components/ui/badge";
import { Button } from "@/components/components/ui/button"

import { useState, useEffect } from "react";
import axios from "axios";
import { Checkbox } from "@/components/components/ui/checkbox";
import SendEmailModal from "./sendEmailModal";
import AddCustomerModal from "./AddCustomerModal";

interface Icustomers {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  createdAt: string;
  status?: string;
}

function ClientInfo() {
  const [Customer, setCustomer] = useState<Icustomers[]>([]);
  const [Loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailIds, setEmailIds] = useState<string[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteIds, setDeleteIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 10;

  async function fetchCustomers() {
    try {
      const res = await axios.get("/api/users");
      setCustomer(res.data);
    } catch (err) {
      console.log("Error fetching customers:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  async function handleDelete(id: string) {
    if (!window.confirm("Are you sure you want to delete this customer?"))
      return;
    try {
      await axios.delete(`/api/users/${id}`);
      setCustomer((prev) => prev.filter((c: any) => c._id !== id));
    } catch (err) {
      console.log("Error deleting customer:", err);
    }
  }

  // Search Bar For User
  const filteredCustomers = Customer.filter(
    (c) =>
      (c.firstname + " " + c.lastname)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //Handle Checkbox Selection
  const toggleSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  {
    /*//Bulk Delete
  const bulkDelete = async() => {
    try {
      await Promise.all(
        selected.map((id) => axios.delete(`/api/users/${id}`))
      )
      setSelected([])
    } catch(err) {
      console.log(err)
    }
  }*/
  }

  // Pagination
  const indexOfLastOrder = currentPage * customersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - customersPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  if (Loading) return <p>Loading Customers</p>;
  return (
    <div className="p-10 ">
      <div className="flex items-center  justify-between  mb-3 ">
        <input
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border mr-20 w-[470px] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
        />

        {/* Bulk Actions Dropdown */}
        <select
          value=""
          className="w-48 px-4 gap-1 py-2 border rounded-sm bg-gray-200 text-black font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
          onChange={async (e) => {
            const action = e.target.value;

            if (selected.length === 0) return;

            try {
              if (action === "activate" || action === "deactivate") {
                const newStatus = action === "activate" ? "Active" : "Inactive";

                await Promise.all(
                  selected.map((id) =>
                    axios.put(`/api/users/${id}`, {
                      status: newStatus, // send it to backend
                    })
                  )
                );

                // Update frontend state immediately
                setCustomer((prev) =>
                  prev.map((c) =>
                    selected.includes(c._id) ? { ...c, status: newStatus } : c
                  )
                );
              }
              if (action === "sendEmail") {
                setEmailIds([...selected]); // copy current selected IDs
                setIsEmailModalOpen(true); // then open the modal
              }

              {
                /*if (action === "sendSMS") {
                await axios.post("http://localhost:5000/api/send-sms", {
                  customerIds: selected,
                  message: "Hello from admin dashboard!",
                });
                alert("SMS sent to selected customers!");
              }*/
              }

              if (action === "delete") {
                setDeleteIds([...selected]); // all selected checkboxes
                setIsDeleteModalOpen(true); // open modal
              }

              setSelected([]);
              //fetchCustomers();
            } catch (err) {
              console.log(err);
            }
          }}
        >
          <option value="">Bulk Actions</option>
          <option value="activate">Activate</option>
          <option value="deactivate">Deactivate</option>
          <option value="sendEmail">Send Email</option>
          <option value="sendSMS">Send SMS</option>
          <option value="delete">Delete</option>
        </select>

        <AddCustomerModal onCustomerAdded={fetchCustomers} />
      </div>
      <div></div>

      {/* Add Customer Form stays the same */}
      <Table className=" bg-white">
        <TableHeader>
          <TableRow className="bg-purple-800 text-white hover:bg-purple-900">
            <TableHead>
              {" "}
              <Checkbox className="border-white text-indigo-600 data-[state=checked]:bg-indigo-600 data-[state=checked]:text-white" />{" "}
            </TableHead>
            <TableHead className="text-white ">S/N</TableHead>
            <TableHead className="w-[100px] text-white">Customer ID</TableHead>
            <TableHead className="w-[150px] text-white">Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Phone</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Created At</TableHead>
            <TableHead className=" text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Customer.length === 0 ? (
            <TableRow>
              <TableCell>No Customers Found</TableCell>
            </TableRow>
          ) : (
            currentCustomers.map((u: any, index) => (
              <TableRow className="text-gray-500 text-sm" key={u._id}>
                <TableCell className="p-2">
                  <Checkbox
                    className="border-l-indigo-950 text-indigo-600 data-[state=checked]:bg-indigo-600 data-[state=checked]:text-white"
                    checked={selected.includes(u._id)}
                    onCheckedChange={() => toggleSelect(u._id)}
                  />
                </TableCell>
                <TableCell>{indexOfFirstOrder + index + 1}</TableCell>
                <TableCell className="font-medium">{u._id}</TableCell>
                <TableCell className="text-gray-900 font-medium">{u.firstname + " " + u.lastname}</TableCell>
                <TableCell className="text-gray-700">{u.email}</TableCell>
                <TableCell className="text-gray-700">{u.phonenumber}</TableCell>
                <TableCell>
                  {u.status === "Active" ? (
                    <Badge className="bg-green-500 text-white hover:bg-green-600">
                      Active
                    </Badge>
                  ) : (
                    <Badge className="bg-gray-400 text-white hover:bg-gray-500">
                      Inactive
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-gray-500 text-sm">{new Date(u.createdAt).toLocaleString()}</TableCell>
                <TableCell>
                   <Button
    variant="destructive"
    size="sm"
    onClick={() => handleDelete(u._id)}
  >
    Delete
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
          length: Math.ceil(filteredCustomers.length / customersPerPage),
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

      <SendEmailModal
        open={isEmailModalOpen}
        setOpen={setIsEmailModalOpen}
        selectedIds={emailIds}
      />

      <AlertDialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete{" "}
              {deleteIds.length > 1
                ? `${deleteIds.length} customers`
                : "this customer"}{" "}
              and it cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                try {
                  await Promise.all(
                    deleteIds.map((id) => axios.delete(`/api/users/${id}`))
                  );

                  // Update frontend
                  setCustomer((prev) =>
                    prev.filter((c) => !deleteIds.includes(c._id))
                  );

                  setSelected([]); // clear selection
                  setDeleteIds([]);
                  setIsDeleteModalOpen(false);
                } catch (err) {
                  console.log("Error deleting:", err);
                }
              }}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              Yes, Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
export default ClientInfo;
