import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faRadio } from "@fortawesome/free-solid-svg-icons";
import { faBlender } from "@fortawesome/free-solid-svg-icons";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
//import Counter from './Counter.jsx'

function Header() {
  //const count=<Counter/>

  return (
    <div className="w-100" id="header-container">
      <h1
        className="mt-0.5 inline font-sans text-3xl text-blue-700 ml-28 mr-6"
        id="header"
      >
        <b>SHOPFLIX</b>
      </h1>
      <input
        type="text"
        className="mt-0.5 inline w-5/12 h-auto border border-gray-500 mr-3"
        id="searchbox"
        placeholder=""
      />
      <button
        className="mt-0.5 inline mr-20 w-12 h-30 border border-blue-950"
        id="searchicon"
        type="button"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <div id="header-acct-dropdown" className="dropdown">
        <button
          id="acct-btn"
          className="dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <p className="inline">
            <FontAwesomeIcon icon={faUser} />
          </p>{" "}
          Account
        </button>
        <ul id="dropdowncontent1" className="dropdown-menu">
          <li style={{ marginLeft: "10%" }} className="login-link">
            <a href={"/login"}>Login</a>
          </li>

          <li style={{ marginLeft: "10%" }} className="signup-link">
            <a href={"/signup"}>SignUp</a>
          </li>
        </ul>
      </div>
      <p className="mr-10 inline" id="wishlist-content">
        <FontAwesomeIcon className="mr-0.5" id="wishlist-icon" icon={faHeart} />
        <a href={""} id="wishlist-content2">
          Wishlist
        </a>
      </p>
      <a href={"/cart"} className="inline cursor-pointer" id="cart">
        <span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>{" "}
        Cart<span style={{ color: "black", fontSize: "40px" }}></span>
      </a>

      <div
        className="w-full border relative border-black"
        id="header-container2"
      >
        <button id="sidenav-btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="z-[1000]" id="sidenav-container">
          <ul id="sidenav-content">
            <li className="content1">
              <b>All Categories</b>
              <button id="close-btn">x</button>
            </li>
            <li>
              <a href={"/Phone&Tablets"}>
                <FontAwesomeIcon icon={faMobileScreen} /> Phone and Tablets
              </a>
            </li>
            <li>
              <a href={"/Computer&Acessories"}>
                <FontAwesomeIcon icon={faDesktop} /> Computers and Accessories
              </a>
            </li>
            <li>
              <a href={"/Electronics"}>
                <FontAwesomeIcon icon={faRadio} /> Electronics
              </a>
            </li>
            <li>
              <a href={"/Appliances"}>
                <FontAwesomeIcon icon={faBlender} /> Appliances
              </a>
            </li>
            <li>
              <a href={"/Fashion"}>
                <FontAwesomeIcon icon={faShirt} /> Fashion
              </a>
            </li>
            <li>
              <a href={"/Gaming"}>
                <FontAwesomeIcon icon={faGamepad} /> Gaming
              </a>
            </li>
            <li>
              <a href={"/Grocery"}>
                <FontAwesomeIcon icon={faWineBottle} /> Grocery
              </a>
            </li>
          </ul>
          <hr id="sidenav-divider" />
          <ul id="sidenav-content2">
            <li className="content2">
              <b>Account</b>
            </li>
            <li>Sign In/Sign Up</li>
          </ul>
          <hr id="sidenav-divider" />
          <ul id="sidenav-content3">
            <li className="content3">
              <b>Help</b>
            </li>
            <li>Customer Service</li>
          </ul>
        </div>
        <div id="dropdown-help" className="dropdown">
          <button
            id="header-help-btn"
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Help
          </button>
          <ul id="dropdowncontent2" className="dropdown-menu">
            <li className="contact-link">
              <a href={""}>Contact Us</a>
            </li>
            <li className="return-link">
              <a href={""}>Returns & Refunds</a>
            </li>
            <li className="payment-link">
              <a href={""}>Payment Options</a>
            </li>
          </ul>
        </div>
        <a className="absolute right-24" href={""} id="faqs">
          FAQs
        </a>
      </div>
    </div>
  );
}
$(document).ready(function () {
  $("#sidenav-btn").click(function () {
    $("#sidenav-container").animate(
      {
        width: "toggle",
      },
      "fast"
    );
  });
  $("#close-btn").click(function () {
    $("#sidenav-container").animate(
      {
        width: "toggle",
      },
      "fast"
    );
  });
});

export default Header;
