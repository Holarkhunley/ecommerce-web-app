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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/components/ui/dialog";

function ManageUser() {
  const [selectedRole, setSelectedRole] = useState("customer");
  const [Loading, setLoading] = useState(true);
  const [userData, setUserData] =  useState<Icustomers[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;




interface Icustomers {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: number;
  createdAt: string;
  status?: string;
}

  // Search Bar For User
  const filteredUser = userData.filter(
    (c) =>
      (c.firstname + " " + c.lastname)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );


  async function handleView(id: string) {
    try {
      const res = await axios.get(`/api/users/${id}`);
      setSelectedUser(res.data);
      setIsModalOpen(true);
    } catch (err) {
      console.error("Error fetching user details:", err);
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Are you sure you want to delete this customer?"))
      return;
    try {
      await axios.delete(`/api/users/${id}`);
      setUserData((prev) => prev.filter((c: any) => c._id !== id));
    } catch (err) {
      console.log("Error deleting customer:", err);
    }
  }

  async function handleSuspend(id: string) {
    try {
      const res = await axios.patch(`/api/users/${id}/suspend`);
      const updatedUser = res.data;
      setUserData((prev: any) =>
        prev.map((c: any) => (c._id === id ? updatedUser : c))
      );
    } catch (err) {
      console.error("error suspeending customer:", err);
    }
  }

  useEffect(() => {
    async function fetchManageUserData() {
      try {
        var url = "/api/users";
        if (selectedRole === "vendors") url = "/api/get-supplier-data";
        if (selectedRole === "admins") url = "/api/admins";
        const res = await axios.get(url);
        setUserData(res.data);
      } catch (err) {
        console.log("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchManageUserData();
  }, [selectedRole]); // 👈 runs again whenever value changes

  // Pagination
  const indexOfLastOrder = currentPage * usersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - usersPerPage;
  const currentUsers = filteredUser.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  if (Loading) return <p>Loading ManageUser</p>;
  return (
    <div className="p-10">
      <div className="grid grid-cols-5 mb-3">
        <input
          type="text"
          placeholder="Search orders by name, email or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border col-span-4 rounded-md px-4 py-2 w-[550px] justify-self-start  focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Roles</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Roles</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={selectedRole}
            onValueChange={setSelectedRole}
          >
            <DropdownMenuRadioItem value="customers">
              Customers
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="vendors">
              Vendors
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="admins">
              Admin (staff)
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
      <Table className="">
        <TableHeader>
          <TableRow className="bg-purple-800 hover:bg-purple-900">
            <TableHead className="text-white ">S/N</TableHead>
            <TableHead className="w-[150px] text-white">{selectedRole} ID</TableHead>

            {/*Customers*/}
            {selectedRole === "customers" && (
              <>
                <TableHead className="w-[200px]  text-white">Name</TableHead>
                <TableHead className="text-white ">Email</TableHead>
                <TableHead className="text-white ">Phone</TableHead>
              </>
            )}

            {/*Vendors */}
            {selectedRole === "vendors" && (
              <>
                <TableHead className="w-[200px] text-white">Supplier</TableHead>
                <TableHead className="text-white ">Brand</TableHead>
                <TableHead className="text-white ">Email</TableHead>
                <TableHead className="text-white ">Phone No</TableHead>
              </>
            )}

            {/*Vendors */}
            {selectedRole === "admins" && (
              <>
                <TableHead className="w-[200px] text-white">Name</TableHead>
                <TableHead className="text-white ">Email</TableHead>
                <TableHead className="text-white ">Role</TableHead>
              </>
            )}

            <TableHead className="text-white ">Status</TableHead>
            <TableHead className="text-white ">Created At</TableHead>
            <TableHead className="text-right text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUser.length === 0 ? (
            <TableRow>
              <TableCell>No {selectedRole} Found</TableCell>
            </TableRow>
          ) : (
            currentUsers.map((u: any, index) => (
              <TableRow key={u._id}>
                <TableCell>{indexOfFirstOrder + index + 1}</TableCell>

                {/*Customers*/}
                {selectedRole === "customers" && (
                  <>
                    <TableCell className="w-[200px]">
                      {u._id}
                    </TableCell>
                    <TableCell className="w-[200px]">
                      {u.firstname + " " + u.lastname}
                    </TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.phonenumber}</TableCell>
                  </>
                )}

                {/*Vendors*/}
                {selectedRole === "vendors" && (
                  <>
                    <TableCell className="w-[200px]">
                      {u.supplierName}
                    </TableCell>
                    <TableCell>{u.brand}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.phone}</TableCell>
                    <TableCell>{u.address}</TableCell>
                  </>
                )}

                {/*Admins*/}
                {selectedRole === "admins" && (
                  <>
                    <TableCell className="w-[200px]">{u.name}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.role}</TableCell>
                  </>
                )}

                <TableCell>{u.status}</TableCell>
                <TableCell>{new Date(u.createdAt).toLocaleString()}</TableCell>
                <TableCell>
                  <button onClick={() => handleView(u._id)}>View</button>
                  <button onClick={() => handleDelete(u._id)}>Delete</button>
                </TableCell>
                <TableCell>
                  <button
                    disabled={u.status === "suspend"}
                    onClick={() => handleSuspend(u._id)}
                  >
                    Suspend
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

       {/* 🔹 Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({
          length: Math.ceil(filteredUser.length / usersPerPage),
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


      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>User Profile</DialogTitle>
          </DialogHeader>

          {selectedUser && (
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="flex items-center gap-4">
                <img
                  src={selectedUser.profile?.avatar || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full border"
                />
                <div>
                  <h2 className="text-xl font-semibold">
                    {selectedUser.firstname
                      ? selectedUser.firstname + " " + selectedUser.lastname
                      : selectedUser.name}
                  </h2>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      selectedUser.status === "active"
                        ? "bg-green-100 text-green-600"
                        : selectedUser.status === "suspended"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {selectedUser.status}
                  </span>
                </div>
              </div>

              {/* Role-based details */}
              <div className="space-y-3">
                {/* Customer */}
                {selectedUser.role === "user" && selectedUser.profile && (
                  <>
                    <h3 className="font-medium">Customer Details</h3>
                    <p>
                      <strong>Bio:</strong> {selectedUser.profile.bio}
                    </p>
                    <p>
                      <strong>Phone:</strong> {selectedUser.profile.phone}
                    </p>
                    <p>
                      <strong>Address:</strong> {selectedUser.profile.address}
                    </p>
                    <p>
                      <strong>Theme:</strong>{" "}
                      {selectedUser.profile.preferences?.theme}
                    </p>
                    <p>
                      <strong>Notifications:</strong>{" "}
                      {selectedUser.profile.preferences?.notifications
                        ? "On"
                        : "Off"}
                    </p>
                  </>
                )}

                {/* Vendor */}
                {selectedUser.role === "vendor" && (
                  <>
                    <h3 className="font-medium">Vendor Details</h3>
                    <p>
                      <strong>Supplier Name:</strong>{" "}
                      {selectedUser.supplierName}
                    </p>
                    <p>
                      <strong>Brand:</strong> {selectedUser.brand}
                    </p>
                    <p>
                      <strong>Phone:</strong> {selectedUser.phone}
                    </p>
                    <p>
                      <strong>Address:</strong> {selectedUser.address}
                    </p>
                  </>
                )}

                {/* Admin */}
                {selectedUser.role === "admin" && (
                  <>
                    <h3 className="font-medium">Admin Details</h3>
                    <p>
                      <strong>Name:</strong> {selectedUser.name}
                    </p>
                    <p>
                      <strong>Role:</strong> {selectedUser.role}
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default ManageUser;
