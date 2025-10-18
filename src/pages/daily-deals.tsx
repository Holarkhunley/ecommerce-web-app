import {
  faShoppingCart,
  faStar,
  faStarHalfAlt,
  faPlus,
  faStar as faStarRegular,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { CartContext } from "../cartcontext.tsx";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

interface ProductType {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
}

function DailyDeals() {
  const { addToCart, addToWishlist } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState<Record<string, boolean>>({});
  const [addedToWishlist, setAddedToWishlist] = useState<
    Record<string, boolean>
  >({});

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

  const handleAddToWishlist = (
    product: ProductType,
    event: React.MouseEvent
  ) => {
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
  };

  // Sample daily deals products
  const discountProducts: ProductType[] = [
    {
      id: "1",
      name: "Samsung Smart TV",
      image:
        "/discount-image/AdobeStock_444784794_Preview_Editorial_Use_Only.jpeg",
      price: 10000,
      originalPrice: 20000,
    },
    {
      id: "2",
      name: "Casio G-shock Wristwatch",
      image: "/discount-image/AdobeStock_298598309_Preview.jpeg",
      price: 25000,
      originalPrice: 50000,
    },
    {
      id: "3",
      name: "Pressing Iron",
      image: "/discount-image/AdobeStock_36881885_Preview.jpeg",
      price: 15000,
      originalPrice: 30000,
    },
    {
      id: "4",
      name: "Aviator Sunglasses",
      image: "/discount-image/AdobeStock_187047193_Preview.jpeg",
      price: 5000,
      originalPrice: 10000,
    },
    {
      id: "5",
      name: "Itel 10000mAh Power Bank",
      image: "/discount-image/AdobeStock_558820476_Preview.jpeg",
      price: 6000,
      originalPrice: 12000,
    },
    {
      id: "6",
      name: "Infinix Hot 10",
      image: "/smartphone-image/Infinix Hot 10.jpeg",
      price: 6000,
      originalPrice: 12000,
    },
    {
      id: "7",
      name: "Panasonic Table Telephone",
      image: "/electronics-image/Panasonic/Panasonic Table Telephone.jpg",
      price: 6000,
      originalPrice: 12000,
    },
    {
      id: "8",
      name: "Panasonic Intercom",
      image: "/electronics-image/Panasonic/Panasonic Intercom.jpg",
      price: 6000,
      originalPrice: 12000,
    },
    {
      id: "9",
      name: "Panasonic Digital Camera",
      image: "/electronics-image/Panasonic/Panasonic Digital Camera.jpg",
      price: 6000,
      originalPrice: 12000,
    },
    {
      id: "10",
      name: "Playstation PS4 Pro",
      image: "/gaming/Playstation/Playstation PS4 Pro.jpg",
      price: 6000,
      originalPrice: 12000,
    },
    {
      id: "11",
      name: "Playstation PS4 Slim Plus",
      image: "/gaming/Playstation/Playstation PS4 Slim Plus.jpg",
      price: 6000,
      originalPrice: 12000,
    },
    {
      id: "12",
      name: "Adidas Shoe",
      image: "/fashiontrends-image/Mens Fashion/Adidas Shoe.jpg",
      price: 6000,
      originalPrice: 12000,
    },
    {
      id: "13",
      name: "Adidas Shoe",
      image: "/fashiontrends-image/Mens Fashion/Adidas Shoe.jpg",
      price: 6000,
      originalPrice: 12000,
    },
    {
      id: "14",
      name: "Adidas Shoe",
      image: "/fashiontrends-image/Mens Fashion/Adidas Shoe.jpg",
      price: 6000,
      originalPrice: 12000,
    },
    {
      id: "15",
      name: "Adidas Shoe",
      image: "/fashiontrends-image/Mens Fashion/Adidas Shoe.jpg",
      price: 6000,
      originalPrice: 12000,
    },
  ];

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
    <>
      <div className="bg-white flex flex-row items-center w-full gap-2 h-14">
        <span className="ml-5">
          <Link className="no-underline text-black" to="/">
            Home
          </Link>
        </span>
        <span>{" > "}</span>
        <span>
          <Link className="no-underline text-black" to="/dailydeals">
            DailyDeals
          </Link>
        </span>
      </div>
      <img src="/dailydeals.jpg" alt="deals" className="w-full mb-5 h-64" />
      <h2 className="text-2xl ml-14 font-bold">Today Deals</h2>
      <div className="w-full mt-0 max-w-7xl mx-auto px-4 my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {discountProducts.map((product) => (
          <Link
            to={`/productdata/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow no-underline group"
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
                  <p className="font-bold text-black no-underline">
                    ₦{product.price.toLocaleString()}
                  </p>
                  <p className="text-gray-500 text-xs line-through ">
                    ₦{product.originalPrice!.toLocaleString()}
                  </p>
                </div>
                <button onClick={(e) => handleAddToWishlist(product, e)}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`text-xl  ${
                      addedToWishlist[product.id]
                        ? "bg-red-500 text-white"
                        : null
                    } transition-colors`}
                  />
                </button>

                <button
                  onClick={(e) => handleAddToCart(product, e)}
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
    </>
  );
}
export default DailyDeals;
