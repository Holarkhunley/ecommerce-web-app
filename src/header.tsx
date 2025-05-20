import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMagnifyingGlass, 
  faShoppingCart, 
  faBars, 
  faMobileScreen,
  faDesktop,
  faRadio,
  faBlender,
  faShirt,
  faGamepad,
  faWineBottle,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { 
  faHeart, 
  faUser 
} from "@fortawesome/free-regular-svg-icons";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./cartcontext";

function Header() {
  const { cartCount } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Handle scroll for sticky header
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`w-full bg-white ${isScrolled ? 'sticky top-0 shadow-md z-50' : ''} transition-all duration-300`}>
      {/* Top header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-blue-700 mr-4">
            SHOPFLIX
          </Link>

          {/* Search bar - hidden on mobile, shown on larger screens */}
          <div className={`order-3 mt-4 lg:mt-0 lg:order-2 w-full lg:flex-1 lg:mx-6 ${windowWidth >= 1024 ? 'block' : isSearchFocused ? 'block' : 'hidden'}`}>
            <div className="relative">
              <input
                type="text"
                className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search for products..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-700">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>

          {/* Mobile search toggle */}
          <div className="lg:hidden order-2">
            <button 
              onClick={() => setIsSearchFocused(!isSearchFocused)}
              className="p-2 text-gray-500 hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6 order-2 lg:order-3">
            {/* Account */}
            <div className="relative group">
              <Link to="/account" className="flex flex-col items-center text-gray-700 hover:text-blue-700">
                <FontAwesomeIcon icon={faUser} className="text-xl" />
                <span className="text-xs mt-1 hidden md:block">Account</span>
              </Link>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
                <div className="py-2">
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</Link>
                  <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Up</Link>
                </div>
              </div>
            </div>

            {/* Wishlist */}
            <Link to="/wishlist" className="flex flex-col items-center text-gray-700 hover:text-blue-700">
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
              <span className="text-xs mt-1 hidden md:block">Wishlist</span>
            </Link>

            {/* Cart with count */}
            <Link to="/cart" className="flex flex-col items-center text-gray-700 hover:text-blue-700 relative">
              <div className="relative">
                <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1 hidden md:block">Cart</span>
            </Link>

            {/* Mobile menu toggle */}
            <button 
              className="lg:hidden text-gray-700 hover:text-blue-700"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-blue-700 text-white hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex">
            <div className="relative group">
              <button className="flex items-center py-3 px-4 hover:bg-blue-800">
                <FontAwesomeIcon icon={faBars} className="mr-2" />
                <span>All Categories</span>
              </button>
              <div className="absolute left-0 top-full bg-white text-gray-800 shadow-lg w-64 hidden group-hover:block z-10">
                <Link to="/Phone&Tablets" className="flex items-center px-4 py-3 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faMobileScreen} className="mr-3 text-blue-700" />
                  <span>Phone and Tablets</span>
                </Link>
                <Link to="/Computer&Accessories" className="flex items-center px-4 py-3 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faDesktop} className="mr-3 text-blue-700" />
                  <span>Computers and Accessories</span>
                </Link>
                <Link to="/Electronics" className="flex items-center px-4 py-3 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faRadio} className="mr-3 text-blue-700" />
                  <span>Electronics</span>
                </Link>
                <Link to="/Appliances" className="flex items-center px-4 py-3 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faBlender} className="mr-3 text-blue-700" />
                  <span>Appliances</span>
                </Link>
                <Link to="/Fashion" className="flex items-center px-4 py-3 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faShirt} className="mr-3 text-blue-700" />
                  <span>Fashion</span>
                </Link>
                <Link to="/Gaming" className="flex items-center px-4 py-3 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faGamepad} className="mr-3 text-blue-700" />
                  <span>Gaming</span>
                </Link>
                <Link to="/Grocery" className="flex items-center px-4 py-3 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faWineBottle} className="mr-3 text-blue-700" />
                  <span>Grocery</span>
                </Link>
              </div>
            </div>
            <Link to="/deals" className="py-3 px-4 hover:bg-blue-800">Deals</Link>
            <Link to="/new-arrivals" className="py-3 px-4 hover:bg-blue-800">New Arrivals</Link>
            <Link to="/best-sellers" className="py-3 px-4 hover:bg-blue-800">Best Sellers</Link>
            <div className="ml-auto">
              <Link to="/help" className="py-3 px-4 hover:bg-blue-800">Help</Link>
              <Link to="/faqs" className="py-3 px-4 hover:bg-blue-800">FAQs</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-bold text-lg">Menu</h2>
              <button onClick={toggleMenu} className="text-gray-500 hover:text-red-500">
                <FontAwesomeIcon icon={faXmark} className="text-xl" />
              </button>
            </div>
            
            <div className="overflow-y-auto h-full pb-20">
              <div className="border-b">
                <div className="p-4">
                  <h3 className="font-bold mb-2">Categories</h3>
                  <ul>
                    <li>
                      <Link to="/Phone&Tablets" className="flex items-center py-2 hover:text-blue-700" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faMobileScreen} className="mr-3" />
                        <span>Phone and Tablets</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Computer&Accessories" className="flex items-center py-2 hover:text-blue-700" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faDesktop} className="mr-3" />
                        <span>Computers and Accessories</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Electronics" className="flex items-center py-2 hover:text-blue-700" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faRadio} className="mr-3" />
                        <span>Electronics</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Appliances" className="flex items-center py-2 hover:text-blue-700" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBlender} className="mr-3" />
                        <span>Appliances</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Fashion" className="flex items-center py-2 hover:text-blue-700" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faShirt} className="mr-3" />
                        <span>Fashion</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Gaming" className="flex items-center py-2 hover:text-blue-700" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faGamepad} className="mr-3" />
                        <span>Gaming</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Grocery" className="flex items-center py-2 hover:text-blue-700" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faWineBottle} className="mr-3" />
                        <span>Grocery</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="border-b">
                <div className="p-4">
                  <h3 className="font-bold mb-2">Account</h3>
                  <ul>
                    <li>
                      <Link to="/login" className="block py-2 hover:text-blue-700" onClick={toggleMenu}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="block py-2 hover:text-blue-700" onClick={toggleMenu}>
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="border-b">
                <div className="p-4">
                  <h3 className="font-bold mb-2">Help</h3>
                  <ul>
                    <li>
                      <Link to="/help" className="block py-2 hover:text-blue-700" onClick={toggleMenu}>
                        Customer Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/returns" className="block py-2 hover:text-blue-700" onClick={toggleMenu}>
                        Returns & Refunds
                      </Link>
                    </li>
                    <li>
                      <Link to="/payment-options" className="block py-2 hover:text-blue-700" onClick={toggleMenu}>
                        Payment Options
                      </Link>
                    </li>
                    <li>
                      <Link to="/faqs" className="block py-2 hover:text-blue-700" onClick={toggleMenu}>
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
