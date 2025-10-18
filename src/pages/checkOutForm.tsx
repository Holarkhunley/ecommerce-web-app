import { useState, useEffect } from "react";
import createOrder from "../api/orders";
import { CartContext } from "../cartcontext";
import { useContext } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    PaystackPop: any;
  }
}

function CheckOutForm() {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);

  // customer information
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // shipping info
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateAddress, setStateAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  //Shipping Details
  const [shippingMethod, setShippingMethod] = useState("Delivery");

  //payment method
  const [paymentMethod, setPaymentMethod] = useState("paystack");

  const totalAmount = cartTotal * 100; // Paystack expects kobo

  // Load Paystack script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);

    // cleanup function must return a function, not the element
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePaystackPayment = () => {
    if (!window.PaystackPop) {
      alert("Paystack SDK not loaded yet.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY, // replace with your live/test key
      email: customerEmail,
      amount: totalAmount,
      metadata: {
        name: customerName,
        phone: phoneNumber,
        address: { street, city, state: stateAddress, postalCode, country },
        cart: cartItems,
      },
      callback: (response: any) => {
        // ✅ handle async operation inside normal function
        (async () => {
          // Map cart items to include orderId
          const itemsForOrder = cartItems.map((item) => ({
            // _id: item._id || "",       // keep the cart's _id
            orderId: item._id || "", // assign _id as orderId
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: item.quantity,
            color: item.color,
            size: item.size,
          }));
          await createOrder({
            reference: response.reference,
            paymentReference: response.reference,
            customerName,
            customerEmail,
            phoneNumber,
            shippingAddress: [
              // ✅ wrap in array
              {
                street,
                city,
                state: stateAddress,
                postalCode,
                country,
              },
            ],
            items: itemsForOrder, // use mapped array here
            // items: cartItems,
            totalAmount: cartTotal,
            paymentStatus: "Paid",
            paymentMethod,
            shippingMethod,
          });
          clearCart();
          alert(`Payment successful! Reference: ${response.reference}`);
        })();
      },
      onClose: () => alert("Payment was not completed."),
    });

    handler.openIframe();
  };

  return (
    <div className="bg-gray-50">
      <div className="bg-white shadow-md   flex flex-row items-center w-full gap-2 h-14">
        <span className="ml-5">
          <Link className="no-underline  text-black" to="/">
            Home
          </Link>
        </span>
        <span>{" > "}</span>
        <span>
          <Link className="no-underline text-black" to="/cart">
            Cart
          </Link>
        </span>
        <span>{" > "}</span>
        <span>
          <Link className="no-underline text-black" to="/checkOutForm">
            Checkout
          </Link>
        </span>
      </div>
      <div className="border mx-auto shadow-md rounded-lg my-3 bg-white border-gray-600 flex flex-col w-[700px]">
        <p className="ml-10 font-bold font-sans text-2xl mt-1">Checkout</p>
        <p className="font-bold ml-10">Delivery Method</p>
        <div className=" cursor-pointer ml-10 flex flex-row gap-5 mb-3">
          <div className=" h-14 flex flex-row items-center outline outline-gray-300  outline-2 hover:outline-blue-700 rounded-md w-36">
            <Input
              type="radio"
              name="shipping"
              value="Delivery"
              onChange={(e) => setShippingMethod(e.target.value)}
               className="ml-2 py-1 w-5 mr-2  outline-none shadow-none cursor-pointer"
            />
            <img
              src="/delivery-method-logos/Delivery.png"
              alt="Paystack"
              className="h-6  mr-2"
            />
            <span className="font-bold text-sm"> Delivery </span>
          </div>

          <div className="h-14 flex flex-row items-center outline outline-gray-300  outline-2 hover:outline-blue-700 rounded-md w-36">
            <Input
              type="radio"
              name="shipping"
              value="Pick up"
              onChange={(e) => setShippingMethod(e.target.value)}
              className="ml-2 py-1 w-5 mr-2  outline-none shadow-none cursor-pointer"
            />
            <img
              src="/delivery-method-logos/Pickup.png"
              alt="Paystack"
              className="h-6 mr-2"
            />
            <span  className="font-bold text-sm"> Pick Up </span>
          </div>
        </div>

        <div className="mb-3 ml-10 max-w-sm">
          <Label htmlFor="email">FullName</Label>
          <Input
            type="text"
            id="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="FullName"
            className="w-[610px]"
          />
        </div>
        <div className="mb-3 ml-10 max-w-sm">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="Email"
            className="w-[610px]"
          />
        </div>
        <div className="mb-3 ml-10 max-w-sm">
          <Label htmlFor="email">phoneNumber</Label>
          <Input
            type="number"
            id="num"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="phoneNumber"
            className="w-[610px]"
          />
        </div>

        <div className="mb-3">
          <p className="font-bold ml-10">Shipping Address</p>
          <Label className="ml-10" htmlFor="address">
            Street Address
          </Label>
          <Input
            type="text"
            id="address"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="streetAddress"
            className="ml-10 w-[610px] mb-3"
          />

          <Label className="ml-10" htmlFor="city">
            City
          </Label>
          <Input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="city"
            className="ml-10 w-[610px] mb-3"
          />

          <Label className="ml-10" htmlFor="state">
            State/Province
          </Label>
          <Input
            type="text"
            id="state"
            value={stateAddress}
            onChange={(e) => setStateAddress(e.target.value)}
            placeholder="phoneNumber"
            className="ml-10 w-[610px] mb-3"
          />

          <Label className="ml-10" htmlFor="postal">
            Postal Code
          </Label>
          <Input
            type="text"
            id="pos"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="postal code"
            className="ml-10 w-[610px] mb-3"
          />

          <Label className="ml-10" htmlFor="country">
            Country
          </Label>
          <Input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="country"
            className="ml-10 w-[610px]"
          />
        </div>

        {/*Payment Method*/}
        <p className="font-bold ml-10">Payment Method</p>
        <div className="ml-10 flex flex-row gap-3">
          <div
            onClick={() => setPaymentMethod("paystack")}
            className="h-14 cursor-pointer  outline outline-gray-300 outline-2 hover:outline-blue-700 rounded-md flex flex-row items-center  w-36  transition-colors duration-200"
          >
            <Input
              type="radio"
              checked={paymentMethod === "paystack"}
              name="payment"
              value="paystack"
              readOnly
              className="ml-2 py-1 w-5 mr-2 outline-none shadow-none cursor-pointer"
            />
            <span className="py-1">
              {" "}
              <img
                src="/paymethod-logos/paystack-2.svg"
                alt="Paystack"
                className="h-4"
              />
            </span>
          </div>

          <div className="flex flex-row items-center outline outline-gray-300  outline-2 hover:outline-blue-700 rounded-md w-36 h-14">
            <Input
              type="radio"
              name="payment"
              value="paystack"
              className="ml-2 py-1 w-5 mr-1  outline-none shadow-none cursor-pointer"
            />
            <span className="py-1">
              {" "}
              <img
                src="/paymethod-logos/flutterwave.svg"
                alt="Paystack"
                className="h-6"
              />
            </span>
          </div>

          <div className="h-14 flex flex-row items-center outline outline-gray-300  outline-2 hover:outline-blue-700 rounded-md w-36">
            <Input
              type="radio"
              name="payment"
              value="bank"
              className="ml-2 py-1 w-5 mr-4  outline-none shadow-none cursor-pointer"
            />
            <span className="py-1">
              {" "}
              <img
                src="/paymethod-logos/bank transfer.png"
                alt="Paystack"
                className="h-8 w-10"
              />
            </span>
          </div>

          <div className="h-14 flex flex-row items-center outline outline-gray-300  outline-2 hover:outline-blue-700 rounded-md w-36">
            <Input
              type="radio"
              name="payment"
              value="cod"
              className="ml-2 py-1 w-5 mr-4  outline-none shadow-none cursor-pointer"
            />
            <span className="py-1">
              {" "}
              <img
                src="/paymethod-logos/cash-on-delivery.png"
                alt="Paystack"
                className="h-8 w-10"
              />
            </span>
          </div>
        </div>
        <button
          className="mb-4 hover:bg-purple-950 mt-6 bg-purple-900 w-[630px] mx-auto text-white font-bold px-2 py-2 rounded-md"
          onClick={handlePaystackPayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
export default CheckOutForm;
