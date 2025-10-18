import { useParams } from "react-router-dom";
import productdatadetails from "../data/productdata.ts";
import { useContext } from "react";
import { CartContext } from "../cartcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Productdata() {
  const { updateQuantity, cartItems } = useContext(CartContext);
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };
  const { addToCart } = useContext(CartContext);
  let { id } = useParams();
  console.log("id:", id);
  console.log("product1:", productdatadetails);

  const product = productdatadetails.find(
    (product) => String(product.id) === id
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const url = window.location.href; // the current product page link
  const text = `Check out this product: ${product.name}`;

  return (
    <div className="bg-gray-50">
      <div className="bg-white w-full h-14">
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
      <div className="flex flex-row gap-4 justify-center">
        <div
          className="bg-white border border-purple-950 clearfix col-span-2 gap-3 flex  flex-row  justify-center    w-[850px]  mt-[2%]  h-[600px]"
          id="product-container"
          key={id}
        >
          <div className="h-[300px] w-[300px]   mt-[5%]" id="img-container">
            <img
              className=" w-[200px] h-[250px] mx-auto my-auto"
              src={product.image}
              id="product-content1"
              alt={product.name}
            />
            <p className="font-semibold mt-12">🔗 Share this product:</p>
            <div className="flex flex-row  ">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  text + " " + url
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-2  rounded"
              >
                <img
                  src="/socialmedia-logos/Digital_Glyph_Green.svg"
                  alt="whatsapp"
                  className="h-6"
                />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  text
                )}&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-black px-2"
              >
                <img
                  src="/socialmedia-logos/logo.svg"
                  alt="twitter"
                  className="text-black h-6"
                />
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  url
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 rounded"
              >
                <img
                  src="/socialmedia-logos/Facebook_Logo_Primary.png"
                  alt="facebook"
                  className="h-6"
                />
              </a>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(url);
                alert("Product link copied!");
              }}
              className="bg-gray-600 text-white px-2 mt-3 rounded"
            >
              Copy Link
            </button>
          </div>
          <div className="mt-[5%] w-[450px] ">
            <h2> {product.name} </h2>
            <p>Brand: {product.brand}</p>
            <hr />
            <p className="font-bold font-sans text-2xl leading-3">
              {" "}
              ₦{product.price.toLocaleString()}
            </p>
            <p className="text-gray-500  line-through">
              ₦{product.originalPrice!.toLocaleString()}
            </p>
            <hr />

            {/* ✅ Show only the quantity controls for this specific product */}
            {cartItems
              .filter((item) => item._id === String(product.id)) // only show this product
              .map((item) => (
                <div key={item._id} className="flex flex-row gap-4 mt-4">
                  <div>Quantity:</div>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() =>
                        handleQuantityChange(item._id, item.quantity - 1)
                      }
                      className="w-8 h-8 flex items-center justify-center border rounded-l bg-gray-100 hover:bg-gray-200"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>

                    <div className="w-10 h-8 flex items-center justify-center border-t border-b">
                      {item.quantity}
                    </div>

                    <button
                      onClick={() =>
                        handleQuantityChange(item._id, item.quantity + 1)
                      }
                      className="w-8 h-8 flex items-center justify-center border rounded-r bg-gray-100 hover:bg-gray-200"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
              ))}

            <hr />
            <button
              className="border-none bg-purple-900 hover:bg-purple-950   w-full text-white h-10 rounded-md"
              id="cart-btn"
              onClick={() => {
                addToCart({
                  _id: String(product.id), // ✅ map id → _id
                  name: product.name,
                  image: product.image,
                  price: product.price,
                  quantity: 1, // ✅ default to 1
                });
                alert(`${product.name} - ${product.id} added to cart!`);
              }}
            >
              Add To Cart
            </button>
            <hr />
            <div className="flex flex-row gap-24">
              <p className="text-sm">Free Shipping</p>
              <p className="text-sm">Pickup & Pay On Collection Available</p>
            </div>
            <hr />
            <p>
              Need help with your order? Call us at{" "}
              <Link to="tel:+2349068066760">09068066760</Link>
            </p>
          </div>
        </div>
        <div
          className="bg-white border border-purple-950 float-left clearfix  w-[300px] mt-[2%]  h-[600px]"
          id="product-container2"
        >
          <p className="ml-[2%] mt-[1%]">
            <b>Specifications</b>
          </p>
          <hr />
          <p className=" ml-[2%]">
            <b>Colour:</b>
            <span className="ml-[20%]">{product.specifications[0]}</span>
          </p>
          <hr />
          <p className=" ml-[2%]">
            <b>Weight:</b>
            <span className="ml-[20%]">{product.specifications[1]}</span>
          </p>
          <hr />
          <p className=" ml-[2%]">
            <b>Material:</b>
            <span className="ml-[18%]">{product.specifications[2]}</span>
          </p>
          <hr />
          <p className="ml-[2%]">
            <b>Size:</b>
            <span className="ml-[29%]">{product.specifications[3]}</span>
          </p>
          <hr />
          <p className="ml-[2%]">
            <b>Blade Size:</b>
            <span className="ml-[15%]">{product.specifications[3]}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-row gap-4">
        <div
          className=" bg-white clearfix  w-[42%] h-[500px] border border-purple-950 mt-[1%] mb-[1%]"
          id="delivreturns-container"
        >
          <h5 className="ml-[1%]">Delivery & Returns</h5>
          <hr />
          <p className="font-bold font-sans ml-14">Delivery</p>
          <p className="ml-14 leading-3">{product.delivery.note1}</p>
          <p className="ml-14 leading-3">{product.delivery.note2}</p>
          <p className="ml-14 leading-3">{product.delivery.note3}</p>
          <p className="ml-14">{product.delivery.note4}</p>

          {/*Returns*/}
          <p className="font-bold font-sans ml-14">Returns</p>
          <p className="ml-14  leading-3 ">{product.returns.note1}</p>
          <p className="ml-14  leading-4">{product.returns.note2}</p>
          <p className="ml-14  leading-4">{product.returns.note3}</p>
          <p className="ml-14  leading-4">{product.returns.note4}</p>
          <p className="ml-14  leading-4">{product.returns.note5}</p>
        </div>
        <div
          className="bg-white border border-purple-950 mt-[1%] mb-[1%] w-[42%] h-[500px]"
          id="descrip-container"
        >
          <h5 className="ml-[1%]">Description</h5>
          <hr />
          <p className="mt-10 ml-14">{product.description.intro}</p>
          <p className="ml-14">{product.description.note1}</p>
          <p className="ml-14">{product.description.note2}</p>
          <p className="ml-14">{product.description.note3}</p>
          <p className="ml-14">{product.description.note4}</p>
        </div>
      </div>

      <div
        className=" flex flex-col mx-auto justify-center w-[86%] mb-[1%] border border-black "
        id="rev-container"
      >
        <h5 className="ml-[1%]">Reviews</h5>
      </div>

      <div className="clearfix w-[86%] h-[320px] mx-auto mb-[1%] border border-black ">
        <h5 className="flex-none ml-[1%]">
          <b>Related Products</b>
        </h5>
        <div
          className="flex flex-row justify-center gap-1 "
          id="relatedproducts-container"
        >
          <a
            className=" no-underline w-[210px]  h-[260px] hover:rounded-md border border-gray-100 bg-gray-50 "
            href={"#"}
          >
            <img
              src={product.relatedproducts.image1}
              alt=".."
              className="w-[190px] h-[200px]  ml-[4%]"
            />
            <h5 className="text-sm ml-[1%]">Casio G-shock Wristwatch</h5>
            <p
              className="
              leading-[5px]
              text-sm
              ml-[1%]
              mb-[5%]
            "
            >
              <b> &#8358; 25,000</b>
            </p>
            <p
              className="
              line-through
              leading-[5px]
              text-sm
              ml-[1%]
            "
            >
              <span className="badge bg-danger">-50% 0ff</span> &#8358; 50,000
            </p>
          </a>
          <a
            href={"#"}
            className="float-left no-underline w-[210px] h-[260px] hover:rounded-md border border-gray-100 bg-gray-50"
          >
            <img
              src={product.relatedproducts.image2}
              alt=".."
              className="w-[190px] h-[200px]  ml-[4%]"
            />
            <h5 className="text-sm ml-[1%]">Casio G-shock Wristwatch</h5>
            <p
              className='
              leading-[5px]
              text-sm
              ml-[1%]
              marginBottom: "5%",
            '
            >
              <b> &#8358; 25,000</b>
            </p>
            <p
              className="
              line-through
              leading-[5px]
              text-sm
              ml-[1%]
            "
            >
              <span className="badge bg-danger">-50% 0ff</span> &#8358; 50,000
            </p>
          </a>
          <a
            href={"#"}
            className="no-underline w-[210px] h-[260px] hover:rounded-md border border-gray-100 bg-gray-50 "
          >
            <img
              src={product.relatedproducts.image3}
              alt=".."
              className="w-[190px] h-[200px]  ml-[4%]"
            />
            <h5 className="text-sm ml-[1%]">Casio G-shock Wristwatch</h5>
            <p
              className="
              leading-[5px]
              text-sm
              ml-[1%]
              mb[5%]
            "
            >
              <b> &#8358; 25,000</b>
            </p>
            <p
              className="
              line-through
              leading-[5px]
              text-sm
              ml-[1%]
            "
            >
              <span className="badge bg-danger">-50% 0ff</span> &#8358; 50,000
            </p>
          </a>
          <a
            href={"#"}
            className="no-underline w-[210px] h-[260px] hover:rounded-md border border-gray-100 bg-gray-50 "
          >
            <img
              src={product.relatedproducts.image4}
              alt=".."
              className="w-[190px] h-[200px]  ml-[4%]"
            />
            <h5 className="text-sm ml-[1%]"> Casio G-shock Wristwatch </h5>

            <p className="leading-[5px] text-sm ml-[1%] mb[5%]">
              <b> &#8358; 25,000</b>
            </p>
            <p
              className="
              line-through
              leading-[5px]
              text-sm
              ml-[1%]
            "
            >
              <span className="badge bg-danger">-50% 0ff</span> &#8358; 50,000
            </p>
          </a>
          <a
            href={"#"}
            className="no-underline w-[210px] h-[260px] hover:rounded-md border border-gray-100 bg-gray-50 "
          >
            <img
              src={product.relatedproducts.image5}
              alt=".."
              className="w-[190px] h-[200px]  ml-[4%]"
            />
            <h5 className="text-sm ml-[1%]">Casio G-shock Wristwatch</h5>
            <p
              className="
              leading-[5px]
              text-sm
              ml[1%]
              mb[5%]"
            >
              <b> &#8358; 25,000</b>
            </p>
            <p
              className="
              no-underline
              leading-[5px]
              text-sm
              ml-[1%]"
            >
              <span className="badge bg-danger">-50% 0ff</span> &#8358; 50,000
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Productdata;
