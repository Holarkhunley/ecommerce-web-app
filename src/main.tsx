import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTruckFast, 
  faShoppingCart, 
  faStar, 
  faStarHalfAlt,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import { 
  faClock, 
  faCreditCard, 
  faStar as faStarRegular 
} from "@fortawesome/free-regular-svg-icons";
import { useContext, useState } from "react";
import MyCarousel from "./MyCarousel.tsx";
import Brandcarousel from "./brandcarousel.tsx";
import { CartContext } from "./cartcontext.tsx";
import { Link } from "react-router-dom";

interface ProductType {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
}

function Mainpage() {
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState<Record<number, boolean>>({});
  
  // Sample flash sale products
  const flashSaleProducts: ProductType[] = [
    {
      id: 1,
      name: "Black Standing Fan",
      image: "/flash-image/Black Standing Fan Flashsales.jpeg",
      price: 10000,
      originalPrice: 30000
    },
    {
      id: 2,
      name: "Headphone",
      image: "/flash-image/Headphone Flashsales.jpeg",
      price: 15000,
      originalPrice: 30000
    },
    {
      id: 3,
      name: "iPhone 12 Pro Max",
      image: "/flash-image/Iphone 12pro max.jpeg",
      price: 450000,
      originalPrice: 600000
    }
  ];
  
  // Sample discount products
  const discountProducts: ProductType[] = [
    {
      id: 4,
      name: "Samsung Smart TV",
      image: "/discount-image/AdobeStock_444784794_Preview_Editorial_Use_Only.jpeg",
      price: 10000,
      originalPrice: 20000
    },
    {
      id: 5,
      name: "Casio G-shock Wristwatch",
      image: "/discount-image/AdobeStock_298598309_Preview.jpeg",
      price: 25000,
      originalPrice: 50000
    },
    {
      id: 6,
      name: "Pressing Iron",
      image: "/discount-image/AdobeStock_36881885_Preview.jpeg",
      price: 15000,
      originalPrice: 30000
    },
    {
      id: 7,
      name: "Aviator Sunglasses",
      image: "/discount-image/AdobeStock_187047193_Preview.jpeg",
      price: 5000,
      originalPrice: 10000
    },
    {
      id: 8,
      name: "Itel 10000mAh Power Bank",
      image: "/discount-image/AdobeStock_558820476_Preview.jpeg",
      price: 6000,
      originalPrice: 12000
    }
  ];
  
  // Function to handle adding product to cart
  const handleAddToCart = (product: ProductType, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1
    });
    
    // Show added to cart feedback
    setAddedToCart(prev => ({ ...prev, [product.id]: true }));
    
    // Reset after 2 seconds
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };
  
  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`star-${i}`} icon={faStar} className="text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half-star" icon={faStarHalfAlt} className="text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-star-${i}`} icon={faStarRegular} className="text-yellow-400" />);
    }
    
    return stars;
  };
  
  return (
    <div className="w-full min-h-screen bg-gray-50 pb-10">
      {/* Features section */}
      <div
        className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-10"
        id="features-container"
      >
        <div
          className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center transition-transform hover:scale-105"
          id="feature-shipping"
        >
          <div className="bg-blue-50 p-4 rounded-full mb-4">
            <FontAwesomeIcon
              className="text-3xl text-blue-600"
              icon={faTruckFast}
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-gray-600">Free shipping on all your online orders</p>
        </div>
        
        <div
          className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center transition-transform hover:scale-105"
          id="feature-support"
        >
          <div className="bg-blue-50 p-4 rounded-full mb-4">
            <FontAwesomeIcon
              className="text-3xl text-blue-600"
              icon={faClock}
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Contact us anytime for help or any issue</p>
        </div>
        
        <div
          className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center transition-transform hover:scale-105"
          id="feature-payment"
        >
          <div className="bg-blue-50 p-4 rounded-full mb-4">
            <FontAwesomeIcon
              className="text-3xl text-blue-600"
              icon={faCreditCard}
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p className="text-gray-600">Don't worry, we ensure secure payment</p>
        </div>
      </div>
      
      <MyCarousel />
      
      {/* Flash Sales Section */}
      <div className="w-full max-w-7xl mx-auto px-4 my-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Flash Sales</h2>
          <Link to="/flash-sales" className="text-blue-600 hover:text-blue-800">View All</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {flashSaleProducts.map(product => (
            <Link 
              to={`/productdata/${product.id}`} 
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {Math.round((product.originalPrice! - product.price) / product.originalPrice! * 100)}% OFF
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {renderStars(4.5)}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg">₦{product.price.toLocaleString()}</p>
                    <p className="text-gray-500 text-sm line-through">₦{product.originalPrice!.toLocaleString()}</p>
                  </div>
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className={`p-2 rounded-full ${
                      addedToCart[product.id] 
                        ? 'bg-green-500 text-white' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    } transition-colors`}
                  >
                    <FontAwesomeIcon icon={addedToCart[product.id] ? faPlus : faShoppingCart} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Discount Products Section */}
      <div className="w-full max-w-7xl mx-auto px-4 my-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Discount Deals</h2>
          <Link to="/discounts" className="text-blue-600 hover:text-blue-800">View All</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {discountProducts.map(product => (
            <Link 
              to={`/productdata/${product.id}`} 
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {Math.round((product.originalPrice! - product.price) / product.originalPrice! * 100)}% OFF
                </div>
              </div>
              
              <div className="p-3">
                <h3 className="font-medium text-gray-900 text-sm mb-1 truncate">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {renderStars(4)}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">₦{product.price.toLocaleString()}</p>
                    <p className="text-gray-500 text-xs line-through">₦{product.originalPrice!.toLocaleString()}</p>
                  </div>
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className={`p-1.5 rounded-full ${
                      addedToCart[product.id] 
                        ? 'bg-green-500 text-white' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    } transition-colors`}
                  >
                    <FontAwesomeIcon icon={addedToCart[product.id] ? faPlus : faShoppingCart} className="text-sm" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Brandcarousel />
    </div>
  );
}

export default Mainpage;
