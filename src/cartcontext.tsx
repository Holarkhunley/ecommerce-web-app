import { createContext, useState, useEffect } from "react";

//Our Product Shape
interface CartItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
   color?: string;    // optional, for variants
  size?: string;     // optional, for variants
  inStock?: boolean;  // ✅ added this line
}
//Shape Of Our Context
interface CartContextType {
  cartItems: CartItem[];
  wishlistItems: CartItem[]; // ✅ Add this line
  addToCart: (product: CartItem) => void;
  addToWishlist:(product:CartItem)=>void;
  removeWishlist:(id:string) =>void,
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  wishCount:number;
}

//Context Created
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  wishlistItems: [],
  addToCart: () => {},
  addToWishlist:() => {},
  removeFromCart: () => {},
  removeWishlist: ()=> {},
  updateQuantity: () => {},
  clearCart: () => {},
  cartTotal: 0,
  cartCount: 0,
  wishCount: 0,
});

//Cart Provider
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // Try to load cart from localStorage on initial render
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Try to Wishlist from localStorage on initial render
  const[wishlistItems,setWishListItems] = useState<CartItem[]>(()=> {
    const savedWishList = localStorage.getItem('wishlist');
    return savedWishList ? JSON.parse(savedWishList) : [];
  })
  
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [cartCount, setCartCount] = useState<number>(0);
  const [wishCount, setWishCount] = useState<number>(0);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // Calculate totals
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCartTotal(total);
    
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);


  //Save WishList To LOcalstorage,To Rememeber Wishlist Across Page Refreshes.
  useEffect(() => {
    localStorage.setItem('wishlist',JSON.stringify(wishlistItems))

    //Calculate Wishlist Count
    const count = wishlistItems.reduce((sum, item) => sum + item.quantity, 0);
    setWishCount(count);
  },[wishlistItems])

  //Add Cart Function
  const addToCart = (Product: CartItem) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => Product._id === item._id);
       
      //Checking if the product already exists in the cart by comparing IDs
      if (existing) {
        return prevItems.map((item) =>
          item._id === Product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...Product, quantity: 1 }]; // if the item doesn't exist, add the new product to the cart
      }
    });
  };
  
  //Add To Wishlist Function
  const addToWishlist = (Product:CartItem) => {
    setWishListItems((prevItems) => {
      const existingWishlist =  prevItems.find((item) => Product._id === item._id);
      if (existingWishlist) {
        return prevItems
      } else {
        return [...prevItems,Product]
      }
    })
  }
  
  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter(item => item._id !== id));
  };

   // Remove wishlist item
  const removeWishlist = (id: string) => {
  setWishListItems((prevItems) => prevItems.filter(item => item._id !== id));
};

  
  // Update quantity of an item
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item._id === id ? { ...item, quantity } : item
      )
    );
  };
  
  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  //Return The Provider
  return (
    <CartContext.Provider value={{ 
      cartItems, 
      wishlistItems,
      addToCart, 
      addToWishlist,
      removeWishlist,
      removeFromCart, 
      updateQuantity, 
      clearCart,
      cartTotal,
      cartCount,
      wishCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
