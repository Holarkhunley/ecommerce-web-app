import { useState } from "react";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Help() {
  const arrow = ">";
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(() => {
    const saved = localStorage.getItem("help-dropdown");
    return saved === "true";
  });
  const [activeCategory, setActiveCategory] = useState<Help>("Place Order");
  const [questions, setQuestions] = useState("");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  type Help =
    | "Place Order"
    | "Payment"
    | "Track Order"
    | "Cancel Order"
    | "Return Request";

  const faqData: Record<
    Help,
    { one: string; two: string; three: string; image: string }[]
  > = {
    "Place Order": [
      {
        one: "Lorem ipsum Lorem ipsum Lorem",
        two: "Lorem ipsum Lorem ipsum Lorem",
        three: "Lorem ipsum Lorem ipsum Lorem",
        image: "",
      },
    ],

    Payment: [
      {
        one: "Lorem ipsum Lorem ipsum Lorem",
        two: "Lorem ipsum Lorem ipsum Lorem",
        three: "Lorem ipsum Lorem ipsum Lorem",
        image: "",
      },
    ],

    "Track Order": [
      {
        one: "Lorem ipsum Lorem ipsum Lorem",
        two: "Lorem ipsum Lorem ipsum Lorem",
        three: "Lorem ipsum Lorem ipsum Lorem",
        image: "",
      },
    ],
    "Cancel Order": [
      {
        one: "Lorem ipsum Lorem ipsum Lorem",
        two: "Lorem ipsum Lorem ipsum Lorem",
        three: "Lorem ipsum Lorem ipsum Lorem",
        image: "",
      },
    ],
    "Return Request": [
      {
        one: "Lorem ipsum Lorem ipsum Lorem",
        two: "Lorem ipsum Lorem ipsum Lorem",
        three: "Lorem ipsum Lorem ipsum Lorem",
        image: "",
      },
    ],
  };

  const categoryIcons: Record<Help, any> = {
    "Place Order": faShoppingBag,
    Payment: faCreditCard,
    "Track Order": faTruckFast,
    "Cancel Order": faBan,
    "Return Request": faBoxOpen,
  };

  return (
    //<div>Hello World</div>
    <div className="clearfix pb-4 border-none">
       <div className="bg-gray-50 shadow-sm flex flex-row items-center w-full gap-2 h-14 sticky top-0">
        <span className="ml-5">
          <Link className="no-underline text-black" to="/">
            Home
          </Link>
        </span>
        <span>{" > "}</span>
        <span>
          <Link className="no-underline text-black" to="/bestseller">
            BestSeller
          </Link>
        </span>
      </div>
      <div className="w-full flex flex-col items-center justify-center bg-[url('/help%20center/Help%20Center%20Banner.jpg')] bg-cover bg-center bg-no-repeat h-64">
        <h3 className="">How Can We Help You ?</h3>
        <p className="">
          Quick help with your purchases,account and shopping experience
        </p>
        <input
          type="text"
          className="w-5/12 py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search for products..."
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </div>

      <div className="w-full mt-8 grid place-items-center grid-cols-5 mb-10">
        {Object.keys(faqData).map((cat, index) => (
          <div
            className="bg-white border border-r-purple-950 w-48 h-36 flex flex-col items-center text-center transition-transform hover:scale-105"
            key={index}
          >
            <button
              onClick={() => setActiveCategory(cat as Help)}
              className="leading-10"
            >
              <FontAwesomeIcon
                icon={categoryIcons[cat as Help]} // use icon from mapping
                className="text-6xl text  text-purple-950  mt-3 "
              />
              <p className="font-medium">{cat}</p>
            </button>
          </div>
        ))}
      </div>
      {/*
        <div className="border  border-gray-300 w-48 h-36 flex flex-col items-center text-center transition-transform hover:scale-105">
          <FontAwesomeIcon
            className="text-7xl mb-2 mt-2 p-1"
           icon={faShoppingBag}
          />
          <p className="font-medium p-1">Place Order</p>
        </div>

        <div className="border border-gray-300 w-48 h-36 flex flex-col items-center text-center transition-transform hover:scale-105">
          <FontAwesomeIcon
            className="text-7xl mb-2 mt-2 p-1"
            icon={faCreditCard}
          />
          <p className="font-medium p-1">Payment</p>
        </div>

        <div className="border border-gray-300 w-48 h-36 flex flex-col items-center text-center transition-transform hover:scale-105">
          <FontAwesomeIcon
            className="text-7xl text-blue-600  mb-2 mt-2 p-1"
            icon={faTruckFast}
          />
          <p className="text-center font-medium  p-1 ">Track Order</p>
        </div>

        <div className="border border-gray-300 w-48 h-36 flex flex-col items-center text-center transition-transform hover:scale-105">
          <FontAwesomeIcon
            className="text-7xl text-blue-600  mb-2 mt-2 p-1"
            icon={faBan}
          />
          <p className="text-center font-medium p-1">Cancel Order</p>
        </div>
        <div className="border border-gray-300 w-48 h-36 flex flex-col items-center text-center transition-transform hover:scale-105">
          <FontAwesomeIcon
            className="text-7xl text-blue-600  mb-2 mt-2 p-1"
            icon={faBoxOpen}
          />
          <p className="text-center font-medium p-1">Return Request</p>
        </div>
      </div>*/}
      <div className="shadow-sm h-auto grid grid-cols-6 ">
        <div className="w-96 h-auto bg-white  col-span-2 border border-purple-950">
          <h5 className="mt-4 px-3 ml-3 ">Get in touch</h5>
          <div className="mb-10 mt-4 ml-7">
            <h6>Visit Us</h6>
            <p className="m-0 text-sm">
              Visit our store or office location in Hardin
            </p>
            <p className="font-semibold text-sm">
              67 Lorem way Ipsum apet 3316 NIG
            </p>
          </div>

          <div className="mb-10 ml-7">
            <h6>Chat Support</h6>
            <p className="text-sm">
              Need help? We're available across multiple channels{" "}
            </p>
            <h6>Email Support</h6>
            <p className="text-sm">Reach us anytime at shopflix@gmail.com.</p>
            <h6>Live Chat</h6>
            <p className="text-sm text-balance">
              Click the chat icon at the bottom-right corner of the page to chat
              with real person instantly
            </p>
          </div>

          <div className="mb-10  ml-7">
            <h6>Call Us</h6>
            <p className="text-sm text-balance m-0">
              Our customer support line is open and ready to help you with
              anything.
            </p>
            <p className="text-sm my-1">
              <span className="font-semibold">Available Hours</span>:
              Mondays-Friday, 9:00am-6:00pm
            </p>
            <p className="text-sm mb-1 text-balance">
              <span className="font-semibold ">Weekend Support</span>: Limited
              support on Saturdays(10am - 2pm)
            </p>
            <p className="text-sm font-semibold">
              <span>Phone Number</span>: +234 090 680 66760
            </p>
          </div>
          <div className="ml-7">
            <h6>Connect on Social Media</h6>
            <p className="text-sm text-balance m-0 ">
              We are just one message away on your favorite platforms
            </p>
            <a href={"#"}>
              <FontAwesomeIcon icon={faSquareFacebook} />
            </a>
            <a href={"#"}>
              <FontAwesomeIcon icon={faSquareInstagram} />
            </a>
            <a href={"#"}>
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </a>
          </div>
        </div>
        {activeCategory && (
          <div className="bg-white shadow-sm h-96 col-span-4 border border-purple-950 ">
            {faqData[activeCategory].map((item, index) => (
              <div key={index}>
                <p>{item.one}</p>
                <p>{item.two}</p>
                <p>{item.three}</p>
                <img src={item.image} alt={activeCategory} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Help;
