import { useContext } from "react";
import { CartContext } from "../cartcontext"; // make sure path is correct

function CartPage() {
  const { cartItems } = useContext(CartContext); // get cart data from context

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="block" key={item.id}>
            <img src={item.image} alt={item.name} width={100} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;
