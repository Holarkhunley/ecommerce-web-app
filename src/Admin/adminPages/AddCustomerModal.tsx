import { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function AddCustomerModal({
  onCustomerAdded,
}: {
  onCustomerAdded: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/admin/add-customer", form);
      alert("Customer added, email sent!");
      setForm({ firstname: "", lastname: "", email: "", phonenumber: "" });
      setOpen(false);
      onCustomerAdded(); // refresh customer list
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        console.error("Backend said:", err.response?.data);
        alert(err.response?.data?.message || "Failed to add customer");
      } else {
        console.error("Unexpected error:", err);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-full flex items-center justify-center w-36 border rounded-sm bg-purple-800 text-white font-medium hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <span className="text-white">➕</span> 
        <span>Add Customer</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Customer</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <Input
            name="firstname"
            placeholder="First Name"
            value={form.firstname}
            onChange={handleChange}
          />
          <Input
            name="lastname"
            placeholder="Last Name"
            value={form.lastname}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            name="phonenumber"
            placeholder="Phone Number"
            value={form.phonenumber}
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddCustomerModal;
