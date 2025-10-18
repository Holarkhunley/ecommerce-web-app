import { useState } from "react";
import axios from "axios";

function SupplierForm() {
  const [form, setForm] = useState({
    supplierName: "",
    brand: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/api/vendors", form);
    alert("Vendor Added!");
  };

  return (
    <div className="flex flex-col border mt-1 border-x-purple-700 mx-auto h-[550px] w-[700px]">
       <p className="text-xl font-sans text-purple-950 font-bold ml-12 pt-2">Add Supplier</p>
      <form onSubmit={handleSubmit} className="p-4 inline-block border rounded  w-[600px] mx-auto  h-[450px]">
        <label> Supplier Name</label>
        <input
          name="supplierName"
          placeholder="Enter Supplier Name"
          onChange={handleChange}
          className="w-full mb-2 border p-2 rounded  outline-purple-900"
        />
        <label>Brand</label>
        <input name="brand" placeholder="Enter Brand Name" className="w-full border p-2 mb-2 rounded  outline-purple-900" onChange={handleChange} />
        
        <label>Email</label>
        <input name="email" placeholder="Enter Email" className="w-full border p-2 mb-2 rounded  outline-purple-900" onChange={handleChange} />
        
        <label>Tel No</label>
        <input name="phone" placeholder="Phone" className="w-full border p-2 rounded mb-2  outline-purple-900" onChange={handleChange} />
        
        <label>Address</label>
        <input name="address" placeholder="Address" className="w-full mb-3  outline-purple-900 p-2 rounded" onChange={handleChange} />
        
        <button type="submit" className="w-full bg-purple-800  text-white px-4 py-2 rounded">Add Vendor</button>
      </form>
    </div>
  );
}

export default SupplierForm;
