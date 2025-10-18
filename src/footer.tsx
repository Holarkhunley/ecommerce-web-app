import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
  faYoutube,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <footer id="footer-container" className="bg-gray-900 text-gray-300 mb-0">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6">
        {/* Newsletter Section */}
        <div className="col-span-2">
          <h6 className="text-sm text-white mb-2">NEW TO SHOPFLIX?</h6>
          <p className="text-sm mb-3">
            Subscribe to our newsletter to get updates on the latest deals.
          </p>
          <div className="flex gap-2">
            <input
              className="border border-gray-400 rounded px-2 py-1 text-sm w-2/3"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <input
              className="bg-blue-600 text-white rounded px-3 py-1 text-sm cursor-pointer hover:bg-blue-700"
              type="submit"
              value="Submit"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="footer-section">
          <h6 className="text-sm text-white mb-2 ml-8">ABOUT SHOPFLIX</h6>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="no-underline  text-gray-300">About Us</a></li>
            <li><a href="#" className="no-underline  text-gray-300">Shopflix Blog</a></li>
            <li><a href="#" className="no-underline  text-gray-300">Terms & Conditions</a></li>
            <li><a href="#" className="no-underline  text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Buying Section */}
        <div className="footer-section">
          <h6 className="text-sm text-white mb-2 ml-8">BUYING ON SHOPFLIX</h6>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="no-underline  text-gray-300">FAQs</a></li>
            <li><a href="#" className="no-underline  text-gray-300">Delivery</a></li>
            <li><a href="#" className="no-underline  text-gray-300">Return & Refunds</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-section">
          <h6 className="text-sm text-white mb-2 ml-8">NEED HELP?</h6>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="no-underline  text-gray-300">Chat With Us</a></li>
            <li><a href="#" className="no-underline  text-gray-300">Contact Us</a></li>
            <li><a href="#" className="no-underline  text-gray-300">Help Center</a></li>
          </ul>
        </div>

        {/* Earn Section */}
        <div className="footer-section">
          <h6 className="text-sm text-white mb-2 ml-8">EARN ON SHOPFLIX</h6>
          <ul className="text-sm">
            <li><a href="#" className="no-underline  text-gray-300">Become a SHOPFLIX Affiliate</a></li>
          </ul>
        </div>
      </div>

      {/* Socials and Payment */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 border-t border-gray-700 py-4 px-6">
        <div className="col-span-2 ">
          <h6 className="text-sm text-white">CONNECT WITH US</h6>
          <div className="flex items-center gap-3 text-xl text-white">
            <a href="#"><FontAwesomeIcon icon={faSquareFacebook} className="hover:text-blue-500" /></a>
            <a href="#"><FontAwesomeIcon icon={faSquareInstagram} className="hover:text-pink-500" /></a>
            <a href="#"><FontAwesomeIcon icon={faSquareXTwitter} className="hover:text-gray-400" /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} className="hover:text-red-500" /></a>
          </div>
        </div>

        <div className="col-span-4 flex flex-col md:flex-col items-center ">
          <h6 className="text-sm text-white ">PAYMENT METHODS</h6>
          <div className="flex gap-2 text-2xl">
            <img
                src="/paymethod-logos/Paystack_idDJH-nJsq_0.svg"
                alt="Paystack"
                className="h-4 text-blue-600"
              />
              <img
                src="/paymethod-logos/flutterwave-3.svg"
                alt="Paystack"
                className="h-4 "
              />
              <img
                src="/paymethod-logos/Mastercard-logo.svg"
                alt="Paystack"
                className="h-4 w-20 "
              />
              <img
                src="/paymethod-logos/visa-4.svg"
                alt="Paystack"
                className="h-5 w-4 "
              />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <hr className="border-gray-700 " />
      <p className="text-center text-sm text-gray-400 py-1">
        <FontAwesomeIcon icon={faCopyright} /> 2024, Shopflix.com. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
