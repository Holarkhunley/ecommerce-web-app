import { useParams } from "react-router-dom";
import productdatadetails from "../data/productdata.ts";
import { useContext } from "react";
import { CartContext } from "../cartcontext";

function Productdata() {
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

  return (
      
    <>
      <div
        className="border clearfix border-black ml-[8%] mt-[2%] w-[60%] h-[600px] float-left"
        id="product-container"
        key={id}
      >
        <div
          className="h-[300px] w-[300px] border border-black mt-[7%] ml-[3%] float-left"
          id="img-container"
        >
          <img
            className=" w-[200px] h-[250px] ml-[10%] mr-[10%]"
            src={product.image}
            id="product-content1"
            alt={product.name}
          />
        </div>
        <h2 className="mt-[5%] ml-[30%]"> {product.name} </h2>
        <p className="ml-[30%]">{product.brand}</p>
        <hr className="ml-[30%] mr-[5%]" />
        <p className="ml-[30%]">&#8358;{product.price} </p>
        <hr className="ml-[30%] mr-[5%]" />
        <hr className="ml-[30%] mr-[5%]" />
        <p className="ml-[30%]"> {product.description} </p>
        <button
          className="border-none bg-black w-[50%] ml-6 text-white h-10 rounded-md"
          id="cart-btn"
          onClick={() => {
            addToCart(product);
            alert(`${product.name} added to cart!`);
          }}
        >
          Add To Cart
        </button>
      </div>
      <div
        className="float-left clearfix border border-black ml-[1.5%] mr[5.5%] mt-[2%] w-[23%] h-[600px]"
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
      <div
        className="float-left clearfix ml-[8%] w-[41.5%] h-[500px] border border-black mr-[1.5%] mt-[1%] mb-[1%]"
        id="delivreturns-container"
      >
        <h5 className="ml-[1%]">Delivery & Returns</h5>
        <hr />
      </div>
      <div
        className="float-left mt-[1%] mb-[1%] w-[41.5%] h-[500px] border border-black"
        id="descrip-container"
      >
        <h5 className="ml-[1%]">Description</h5>
        <hr />
      </div>
      <div
        className="clear-both ml-[8%] w-[84.5%] mb-[1%] border border-black "
        id="rev-container"
      >
        <h5 className="ml-[1%]">Reviews</h5>
      </div>

      <div
        className="clearfix ml-[8%] w-[84.5%] h-[320px] mb-[1%] border border-black "
        id="relatedproducts-container"
      >
        <h5 className=" ml-[1%]">
          <b>Related Products</b>
        </h5>
        <a
          className="float-left no-underline w-[210px] mr-[1%] ml-[2%] h-[260px] hover:rounded-md border border-gray-100 bg-gray-50 "
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
          className="float-left no-underline w-[210px] mr-[1%] h-[260px] hover:rounded-md border border-gray-100 bg-gray-50"
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
          className="float-left no-underline w-[210px] mr-[1%] h-[260px] hover:rounded-md border border-gray-100 bg-gray-50 "
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
          className="float-left no-underline w-[210px] mr-[1%] h-[260px] hover:rounded-md border border-gray-100 bg-gray-50 "
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
          className="float-left no-underline w-[210px] h-[260px] hover:rounded-md border border-gray-100 bg-gray-50 "
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
    </>
  );
}

export default Productdata;
