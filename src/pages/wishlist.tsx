import { useContext } from "react";
import { CartContext } from "../cartcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/components/ui/table";

function Wishlist() {
  const { wishlistItems, removeWishlist } = useContext(CartContext);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      {/* Top Header */}
      <div className="flex items-center mb-6">
        <Link
          to="/"
          className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          <span>Continue Shopping</span>
        </Link>
        <h1 className="text-2xl font-bold flex-grow">Your Wishlist</h1>
      </div>

      {/* Empty Wishlist */}
      {wishlistItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-6">
            Tap the heart button to start saving your favorite items.
          </p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Add Now
          </Link>
        </div>
      ) : (
        /* Wishlist Table */
        <Table className="bg-white rounded-lg shadow-sm">
          <TableHeader>
            <TableRow className="bg-purple-800 text-white">
              <TableHead className="w-[60px] text-white">S/N</TableHead>
              <TableHead className="text-white">Image</TableHead>
              <TableHead className="text-white">Product Name</TableHead>
              <TableHead className="text-white">Price</TableHead>
              <TableHead className="text-white">Stock Status</TableHead>
              <TableHead className="text-white">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {wishlistItems.map((item, index) => (
              <TableRow key={item._id || index } className="text-gray-700 ">
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded"
                  />
                </TableCell>

                <TableCell className="font-medium">{item.name}</TableCell>

                <TableCell className="font-medium text-gray-900">
                  ₦{item.price?.toLocaleString()}
                </TableCell>

                <TableCell>
                  {item.inStock ? (
                    <span className="text-green-600 font-medium">In Stock</span>
                  ) : (
                    <span className="text-red-500 font-medium">Out of Stock</span>
                  )}
                </TableCell>

                <TableCell>
                  <button
                    onClick={() => removeWishlist(item._id)}
                    className="text-red-500 text-sm flex items-center hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} className="mr-1" />
                    Remove
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default Wishlist;
