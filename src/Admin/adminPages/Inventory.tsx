
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/components/ui/table";

interface IVariant {
  color?: string;
  size?: string;
  stock?: number;
  price?: number;
}

interface IProduct {
  _id: string;
  name: string;
  brand?: string;
  supplier?: string;
  category: string;
  price: number;
  OriginalPrice: number;
  stock?: number; // for products without variants
  variants?: IVariant[];
  createdAt: string;
}

function Inventory() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/getProducts");
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Inventory</h2>
      <button
        className="mb-4 px-4 py-2 bg-purple-800 text-white hover:bg-purple-900 rounded"
        onClick={fetchProducts}
      >
        Refresh Inventory
      </button>

      <Table className="bg-white">
        <TableHeader>
          <TableRow className="bg-purple-800 text-white hover:bg-purple-900">
            <TableHead className="text-white">Inventory ID</TableHead>
            <TableHead className="text-white">Product Name</TableHead>
            <TableHead className="text-white">Brand</TableHead>
            <TableHead className="text-white">Supplier</TableHead>
            <TableHead className="text-white">Category</TableHead>
            <TableHead className="text-white">Size</TableHead>
            <TableHead className="text-white">Color</TableHead>
            <TableHead className="text-white">Price</TableHead>
            <TableHead className="text-white">Original Price</TableHead>
            <TableHead className="text-white">Stock</TableHead>
            <TableHead className="text-white">Created At</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={11}>Loading...</TableCell>
            </TableRow>
          ) : products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={11}>No products found</TableCell>
            </TableRow>
          ) : (
            products.flatMap((product) =>
              product.variants && product.variants.length > 0
                ? product.variants.map((v, index) => (
                    <TableRow key={`${product._id}-${index}`}>
                      <TableCell>{product._id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.brand ?? "-"}</TableCell>
                      <TableCell>{product.supplier ?? "-"}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{v.size ?? "-"}</TableCell>
                      <TableCell>{v.color ?? "-"}</TableCell>
                      <TableCell>${v.price ?? product.price}</TableCell>
                      <TableCell>${product.OriginalPrice}</TableCell>
                      <TableCell>{v.stock ?? 0}</TableCell>
                      <TableCell>{new Date(product.createdAt).toLocaleString()}</TableCell>
                    </TableRow>
                  ))
                : [
                    <TableRow key={product._id}>
                      <TableCell>{product._id}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.brand ?? "-"}</TableCell>
                      <TableCell>{product.supplier ?? "-"}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell>${product.OriginalPrice}</TableCell>
                      <TableCell>{product.stock ?? 0}</TableCell>
                      <TableCell>{new Date(product.createdAt).toLocaleString()}</TableCell>
                    </TableRow>,
                  ]
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default Inventory;
