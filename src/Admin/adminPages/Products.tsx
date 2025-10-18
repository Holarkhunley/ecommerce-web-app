import axios from "axios";
import { useState } from "react";

// 1️⃣ Define Variant type
interface Variant {
  color: string;
  size: string;
  stock: number;
  price: number;
}

// 2️⃣ Define the full form state type
interface ProductFormState {
  name: string;
  image: string;
  category: string;
  price: string;
  OriginalPrice: string;
  default: boolean;
  brand: string;
  supplier: string;
  discount: string;
  variants: Variant[];
}

const ProductForm = () => {
  // 3️⃣ Initialize state with proper types
  const [form, setForm] = useState<ProductFormState>({
    name: "",
    image: "",
    category: "",
    price: "",
    OriginalPrice: "",
    default: false,
    brand: "",
    supplier: "",
    discount: "",
    variants: [],
  });

  // 4️⃣ Handle normal inputs including checkbox
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 5️⃣ Handle image input
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm(prev => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  // 6️⃣ Handle variant input changes
  const handleVariantChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const { name, value } = e.target;
    setForm(prev => {
      const newVariants = [...prev.variants];
      newVariants[idx] = {
        ...newVariants[idx],
        [name]: name === "stock" || name === "price" ? parseFloat(value) || 0 : value

      };
      return { ...prev, variants: newVariants };
    });
  };

  // 7️⃣ Add new variant
  const addVariant = () => {
    setForm(prev => ({
      ...prev,
      variants: [...prev.variants, { color: "", size: "", stock: 0, price: 0 }],
    }));
  };

  // 8️⃣ Remove variant
  const removeVariant = (idx: number) => {
    setForm(prev => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== idx),
    }));
  };

  // 9️⃣ Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/addProducts", {
        ...form,
        price: parseFloat(form.price),
        originalPrice: parseFloat(form.OriginalPrice),
        discount: parseFloat(form.discount) || 0,
        variants: form.variants.map(v => ({
  color: v.color,
  size: v.size,
  stock: v.stock || 0,
  price: v.price || 0
}))
      });

      // Reset form completely
      setForm({
        name: "",
        image: "",
        category: "",
        price: "",
        OriginalPrice: "",
        default: false,
        brand: "",
        supplier: "",
        discount: "",
        variants: [],
      });
    } catch (err) {
      console.error("Failed to add product:", err);
    }
  };

  return (
    <div className="p-6 border border-gray-50 bg-white">
      <h1 className="text-2xl m-0 px-2 mb-6 font-sans">Add Product</h1>
      <p className="text-gray-800 px-2">Add a new product to your store</p>
      <div className="flex justify-center border rounded-lg border-gray-50 bg-white">
        <form className="w-full bg-white p-6 rounded-lg space-y-4">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
          <input type="file" accept="image/*" onChange={handleChangeImage} className="w-full" />
          <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="OriginalPrice" placeholder="Original Price" value={form.OriginalPrice} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full border p-2 rounded" />
          <label className="flex items-center gap-2">
            <input type="checkbox" name="default" checked={form.default} onChange={handleChange} />
            Is Default Product?
          </label>

          {/* Brand, Supplier, Discount */}
          <input name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="supplier" placeholder="Supplier" value={form.supplier} onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="discount" placeholder="Discount (%)" type="number" value={form.discount} onChange={handleChange} className="w-full border p-2 rounded" />

          {/* Variants */}
          <div>
            <h3 className="font-bold">Variants</h3>
            {form.variants.map((variant, idx) => (
              <div key={idx} className="flex gap-2 mb-2">
                <input name="color" placeholder="Color" value={variant.color} onChange={e => handleVariantChange(e, idx)} className="border p-1 rounded" />
                <input name="size" placeholder="Size" value={variant.size} onChange={e => handleVariantChange(e, idx)} className="border p-1 rounded" />
                <input name="stock" placeholder="Stock" type="number" value={variant.stock} onChange={e => handleVariantChange(e, idx)} className="border p-1 rounded" />
                <input name="price" placeholder="Price" type="number" value={variant.price} onChange={e => handleVariantChange(e, idx)} className="border p-1 rounded" />
                <button type="button" onClick={() => removeVariant(idx)} className="bg-red-500 px-2 text-white rounded">Remove</button>
              </div>
            ))}
            <button type="button" onClick={addVariant} className="bg-gray-300 px-2 rounded">+ Add Variant</button>
          </div>

          <button onClick={handleSubmit} className="bg-indigo-950 text-white px-4 w-full py-2 rounded">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
