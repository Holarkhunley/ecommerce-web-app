import { useContext } from "react";
import { CartContext } from "../cartcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useContext(CartContext);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 mr-4">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          <span>Continue Shopping</span>
        </Link>
        <h1 className="text-2xl font-bold flex-grow">Your Shopping Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="hidden md:grid md:grid-cols-5 bg-gray-50 p-4 border-b">
                <div className="md:col-span-2">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-center">Total</div>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="border-b last:border-b-0 p-4 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  {/* Product */}
                  <div className="md:col-span-2 flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded mr-4" 
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-sm flex items-center mt-2 hover:text-red-700"
                      >
                        <FontAwesomeIcon icon={faTrash} className="mr-1" /> Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:text-center">
                    <div className="md:hidden font-medium mb-1">Price:</div>
                    ₦{item.price.toLocaleString()}
                  </div>

                  {/* Quantity */}
                  <div className="md:text-center">
                    <div className="md:hidden font-medium mb-1">Quantity:</div>
                    <div className="flex items-center justify-center md:justify-center">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-l bg-gray-100 hover:bg-gray-200"
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <div className="w-10 h-8 flex items-center justify-center border-t border-b">
                        {item.quantity}
                      </div>
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-r bg-gray-100 hover:bg-gray-200"
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="md:text-center font-medium">
                    <div className="md:hidden font-medium mb-1">Total:</div>
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between">
              <button 
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 flex items-center"
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" />
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              
              <div className="border-t border-b py-4 my-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>₦{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>₦{cartTotal.toLocaleString()}</span>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
              
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>We accept various payment methods</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
