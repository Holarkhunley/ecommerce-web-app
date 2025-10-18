import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faClock,
  faCreditCard,
  faStar as faStarRegular,
} from "@fortawesome/free-regular-svg-icons";
import { useContext, useState } from "react";
import MyCarousel from "./MyCarousel.tsx";
import { CartContext } from "./cartcontext.tsx";
import { Link } from "react-router-dom";

interface ProductType {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
}

function Mainpage() {
  const { addToCart,addToWishlist } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState<Record<string, boolean>>({});
  const [addedToWishlist, setAddedToWishlist] = useState<Record<string, boolean>>({});


  // Sample flash sale products
  const flashSaleProducts: ProductType[] = [
    {
      id: "1",
      name: "Black Standing Fan",
      image: "/flash-image/Black Standing Fan Flashsales.jpeg",
      price: 10000,
      originalPrice: 30000,
    },
    {
      id: "2",
      name: "Headphone",
      image: "/flash-image/Headphone Flashsales.jpeg",
      price: 15000,
      originalPrice: 30000,
    },
    {
      id: "3",
      name: "iPhone 12 Pro Max",
      image: "/flash-image/Iphone 12pro max.jpeg",
      price: 450000,
      originalPrice: 600000,
    },
  ];

  // Sample discount products
  const discountProducts: ProductType[] = [
    {
      id: "4",
      name: "Samsung Smart TV",
      image:
        "/discount-image/AdobeStock_444784794_Preview_Editorial_Use_Only.jpeg",
      price: 10000,
      originalPrice: 20000,
    },
    {
      id: "5",
      name: "Casio G-shock Wristwatch",
      image: "/discount-image/AdobeStock_298598309_Preview.jpeg",
      price: 25000,
      originalPrice: 50000,
    },
    {
      id: "6",
      name: "Pressing Iron",
      image: "/discount-image/AdobeStock_36881885_Preview.jpeg",
      price: 15000,
      originalPrice: 30000,
    },
    {
      id: "7",
      name: "Aviator Sunglasses",
      image: "/discount-image/AdobeStock_187047193_Preview.jpeg",
      price: 5000,
      originalPrice: 10000,
    },
    {
      id: "8",
      name: "Itel 10000mAh Power Bank",
      image: "/discount-image/AdobeStock_558820476_Preview.jpeg",
      price: 6000,
      originalPrice: 12000,
    },
  ];

  // Function to handle adding product to cart
  const handleAddToCart = (product: ProductType, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    addToCart({
      _id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
    });

    // Show added to cart feedback
    setAddedToCart((prev) => ({ ...prev, [product.id]: true }));

    // Reset after 2 seconds
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

   const handleAddToWishlist = (product: ProductType, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    addToWishlist({
      _id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
    });
    
    // Show added to cart feedback
    setAddedToWishlist((prev) => ({ ...prev, [product.id]: true }));

    // Reset after 2 seconds
    setTimeout(() => {
      setAddedToWishlist((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  }


  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`star-${i}`}
          icon={faStar}
          className="text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key="half-star"
          icon={faStarHalfAlt}
          className="text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`empty-star-${i}`}
          icon={faStarRegular}
          className="text-yellow-400"
        />
      );
    }

    return stars;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-50 to-transparent ">
      {/* Features section */}
      <div
        className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 mb-10"
        id="features-container"
      >
        <div
          className="bg-gradient-to-r from-gray-200 to-transparent p-6 rounded-lg shadow-sm flex flex-col items-center text-center transition-transform hover:scale-105"
          id="feature-shipping"
        >
          <div className="bg-blue-50 p-4 rounded-full mb-4">
            <FontAwesomeIcon
              className="text-3xl text-purple-800"
              icon={faTruckFast}
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-gray-600">
            Free shipping on all your online orders
          </p>
        </div>

        <div
          className="bg-gradient-to-r from-gray-200 to-transparent p-6 rounded-lg shadow-sm flex flex-col items-center text-center transition-transform hover:scale-105"
          id="feature-support"
        >
          <div className="bg-blue-50 p-4 rounded-full mb-4">
            <FontAwesomeIcon
              className="text-3xl text-purple-800"
              icon={faClock}
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">
            Contact us anytime for help or any issue
          </p>
        </div>

        <div
          className=" border-purple-900 border bg-gradient-to-r from-gray-200 to-transparent p-6 rounded-lg shadow-sm flex flex-col items-center text-center transition-transform hover:scale-105"
          id="feature-payment"
        >
          <div className="bg-blue-50 p-4 rounded-full mb-4">
            <FontAwesomeIcon
              className="text-3xl text-purple-800"
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
          <Link to="/flash-sales" className="text-blue-600 hover:text-blue-800">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {flashSaleProducts.map((product) => (
            <Link
              to={`/productdata/${product.id}`}
              key={product.id}
              className="bg-white rounded-lg shadow-sm no-underline overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  
                  className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {Math.round(
                    ((product.originalPrice! - product.price) /
                      product.originalPrice!) *
                      100
                  )}
                  % OFF
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">{renderStars(4.5)}</div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg text-black">
                      ₦{product.price.toLocaleString()}
                    </p>
                    <p className="text-gray-500 text-sm line-through">
                      ₦{product.originalPrice!.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={(e) => handleAddToCart(product,e)}
                    className={`p-2 rounded-full ${
                      addedToCart[product.id]
                        ? "bg-green-500 text-white"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    } transition-colors`}
                  >
                    <FontAwesomeIcon
                      icon={addedToCart[product.id] ? faPlus : faShoppingCart}
                    />
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
          <Link to="/discounts" className=" no-underline text-purple-600 hover:text-purple-800">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {discountProducts.map((product) => (
            <Link
              to={`/productdata/${product.id}`}
              key={product.id}
              className="bg-white no-underline rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {Math.round(
                    ((product.originalPrice! - product.price) /
                      product.originalPrice!) *
                      100
                  )}
                  % OFF
                </div>
              </div>

              <div className="p-3">
                <h3 className="font-medium text-gray-900 text-sm mb-1 truncate">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">{renderStars(4)}</div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-black">
                      ₦{product.price.toLocaleString()}
                    </p>
                    <p className="text-gray-500 text-xs line-through">
                      ₦{product.originalPrice!.toLocaleString()}
                    </p>
                  </div>
                  <button onClick={(e) => handleAddToWishlist(product,e)}
                   
                  >

                     <FontAwesomeIcon icon={faHeart} className={`text-xl  ${
                      addedToWishlist[product.id]
                        ? "bg-red-500 text-white":null
                    } transition-colors`} />
                  </button>

                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className={`p-1.5 rounded-full ${
                      addedToCart[product.id]
                        ? "bg-green-500 text-white"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    } transition-colors`}
                  >
                    <FontAwesomeIcon
                      icon={addedToCart[product.id] ? faPlus : faShoppingCart}
                      className="text-sm"
                    />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full  mx-auto px-4 my-12">
        <h3>Official Store</h3>
        <div className="grid  grid-cols-4  gap-3 h-auto  max-w-7xl mx-auto">
          <Link
            className="border text-black bg-white rounded-lg transition-transform hover:scale-105 h-32 no-underline "
            to=""
          >
            <img
              src="/brand carousel/lg.jpeg"
              className="w-24 h-24  rounded-full float-left ml-4 mr-4 mt-3"
            />
            <h3 className="text-lg font-bold mt-5 ">LG</h3>
            <p className="text-sm ">Life's Good</p>
          </Link>
          <Link
            className="border  text-black bg-white rounded-lg h-32 no-underline transition-transform hover:scale-105"
            to=""
          >
            <img
              src="/brand carousel/hp.jpeg"
              className="w-24 h-24 rounded-full ml-4 float-left mr-4  mt-3"
            />
            <h3 className="text-lg font-bold mt-5 ">Hp</h3>
            <p className="text-sm">Make it matter</p>
          </Link>
          <Link
            className="border  text-black bg-white rounded-lg h-32 no-underline transition-transform hover:scale-105"
            to=""
          >
            <img
              src="/brand carousel/pepsi.jpeg"
              className="w-24 h-24 rounded-full float-left mr-4 ml-4 mt-3"
            />
            <h3 className="text-lg font-bold mt-5">Pepsi</h3>
            <p className="text-sm">For the love of it</p>
          </Link>
          <Link
            className="border  text-black bg-white rounded-lg h-32 no-underline transition-transform hover:scale-105"
            to=""
          >
            <img
              src="/brand carousel/gionee.jpeg"
              className="w-24 h-24 rounded-full float-left mr-4 ml-4 mt-3"
            />
            <h3 className="text-lg font-bold mt-5">Gionee</h3>
            <p className="text-sm">Smart life,simple experience</p>
          </Link>
          <Link
            className="border  text-black bg-white rounded-lg h-32 no-underline transition-transform hover:scale-105"
            to=""
          >
            <img
              src="/brand carousel/infinix.jpeg"
              className="w-24 h-24 rounded-full float-left mr-4 ml-4 mt-3"
            />
            <h3 className="text-lg font-bold mt-5">Infinix</h3>
            <p className="text-sm">The future is now</p>
          </Link>
          <Link
            className="border  text-black bg-white rounded-lg h-32 no-underline transition-transform hover:scale-105"
            to=""
          >
            <img
              src="/brand carousel/samsung.jpeg"
              className="w-24 h-24 rounded-full float-left mr-4 ml-4 mt-3"
            />
            <h3 className="text-lg font-bold mt-5">Samsung</h3>
            <p className="text-sm">Never settle</p>
          </Link>
          <Link
            className="border  text-black bg-white rounded-lg h-32 no-underline transition-transform hover:scale-105"
            to=""
          >
            <img
              src="/brand carousel/unilever.jpeg"
              className="w-24 h-24 rounded-full float-left mr-4 ml-4 mt-3"
            />
            <h3 className="text-lg font-bold mt-5">Unilever</h3>
            <p className="text-sm">Brighten everyday life for all</p>
          </Link>
          <Link
            className="border  text-black bg-white rounded-lg h-32 no-underline transition-transform hover:scale-105"
            to=""
          >
            <img
              src="/brand carousel/Tecno logo.png"
              className="w-24 h-24 rounded-full float-left mr-4 ml-4 mt-3"
            />
            <h3 className="text-lg font-bold mt-5">Tecno</h3>
            <p className="text-sm">Stop at nothing</p>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Mainpage;
