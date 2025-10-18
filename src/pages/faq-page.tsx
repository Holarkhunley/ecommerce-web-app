import { useState } from "react";
import { Link } from "react-router-dom";

function Faq() {
  type Category =
    | "General"
    | "Payments"
    | "Delivery"
    | "Return&Refunds"
    | "Products"
    | "Promotion&Discounts";

  const faqData: Record<Category, { question: string; answer: string }[]> = {
    General: [
      {
        question: "Do I need an account to order?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "How do I contact customer service?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "How do i track my order?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "Do you offer discounts or promo codes?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "Can i change or cancel my order?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
    ],

    Payments: [
      {
        question: "How do I place an order?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "What payment methods do you accept?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "Can I change or cancel my order?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "Is it safe to use my credit card on your site?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "Why was my payment declined?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
    ],

    Delivery: [
      {
        question: "How long will delivery take?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "Do you ship internationally?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "How can I track my order?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "Do you ship internationally?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "What if my order is delayed or lost?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
    ],

    "Return&Refunds": [
      {
        question: "What is your return policy?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "When will I get my refund?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "When will I get my refund?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "Can I exchange a product?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "What items are non-returnable?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
    ],

    Products: [
      {
        question: "Are the products authentic?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "How do I find the right size?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "Can I get a product warranty?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "Do you offer product customization?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "How do I find the right size?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
    ],
    "Promotion&Discounts": [
      {
        question: "How do I use a promo code?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "Can I combine multiple offers?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "Can I combine multiple offers?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
      {
        question: "When do you have sales or special offers?",
        answer: "Lorem ipsum Lorem ipsum Lorem",
      },
    ],
  };

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("General");
  const [questions, setQuestions] = useState("");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };
  return (
    <div className="clearfix ">
      <div className="bg-gray-50 flex flex-row items-center w-full gap-2 h-14">
        <span className="ml-5">
          <Link className="no-underline text-black" to="/">
            Home
          </Link>
        </span>
        <span>{" > "}</span>
        <span>
          <Link className="no-underline text-black" to="/faqs">
            Faq
          </Link>
        </span>
      </div>
      <div className=" w-full flex flex-col items-center justify-center bg-[url('/faq/Faq-Banner.jpg')] bg-cover bg-center bg-no-repeat h-64">
        <h1>FaQ</h1>
        <p>Your questions answered here</p>
        <input
          type="text"
          className="w-5/12 py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search for products..."
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </div>
      <div className="  grid  grid-cols-2 justify-center  mt-10 ">
        <div  className="flex flex-col w-96 ml-auto  bg-white">
        <ol>
          {Object.keys(faqData).map((cat, index) => (
            <li key={index} className=" hover:bg-gray-100">
                <button
                  onClick={() => setActiveCategory(cat as Category)}
                  className="leading-10"
                >
                  {cat}
                </button>
                <hr />
            </li>
          ))}
        </ol>
        </div>

        <div className="bg-white mr-20">
        <ol>
          <h5 className="mt-2  py-1">{activeCategory} Questions</h5>
          {faqData[activeCategory].map((item, index) => (
            <li key={index}>
              <div className="w-auto">
                <button
                  onClick={() => handleToggle(index)}
                  className="leading-10"
                >
                  {item.question}
                </button>
                {openQuestion === index && <p>{item.answer}</p>}
                <hr />
              </div>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </div>
  );
}

export default Faq;
