import { createContext, useState } from "react";

//Our Product Shape
interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

//Shape Of Our Context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
}

//Context Created
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
});

//Cart Provider
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); //storing the list of products(the cart) in state,starts with an empty array [].

  //Add Cart Function
  const addToCart = (Product: CartItem) => {
    setCartItems((PrevItems) => {
      const existing = PrevItems.find((item) => Product.id === item.id);

      //Checking if the product already exist in the cart by comparing both iD's
      if (existing) {
        return PrevItems.map((item) =>
          item.id === Product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...PrevItems, { ...Product, quantity: 1}]; // if the value doesnt exist,add the new product to the cart list below
      }
    });
  };

  //Return The Provider
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
