import { useParams } from "react-router-dom";
import { Product } from "../data/productcategory.ts";
import $ from "jquery";

function Products() {
  let { category } = useParams();
  console.log("category:", category);
  console.log("ProductList:", Product);

  const prod = Product.find((prod) => String(prod.category) === category);
  if (!prod) {
    return <div>Product not found</div>;
  }
  return (
    <>
        <div
          className="float-left w-[20%] mt-[3%] ml-[5%] mr-[1%] h-auto border border-black"
          id="wrapper"
        >
          <div id="category-list">
            <h6 className="cursor-pointer ml-[2%] mt-[8%] mb-[2%]" id="gadcat">
              <b>Category</b>
            </h6>
            <div className="hidden leading-[1.6px]" id="gadlist">
              <p className="text-sm cursor-pointer">
                {prod.categoriesDetails[0]}
              </p>
              <a href={"/"} className="text-sm block ml-[2%] no-underline">
                {prod.categoriesDetails[1]}
              </a>
              <a href={"/"} className="text-sm block ml-[2%] no-underline">
                {prod.categoriesDetails[2]}
              </a>
              <a href={"/"} className="text-sm block ml-[2%] no-underline">
                {prod.categoriesDetails[3]}
              </a>
            </div>
          </div>
          <hr className="w-[100%]" />
          <div id="brand-list">
            <h6 className="cursor-pointer ml-[2%] mt-[8%] mb-[6%]" id="brand">
              <b>Brand</b>
            </h6>
            <div className="hidden ml-[2%] leading-[1.6px]" id="brand-names">
              <a href={"/"} className="block ml=[2%] no-underline text-sm">
                {prod.brand[0]}
              </a>
              <a href={"/"} className="block ml=[2%] no-underline text-sm">
                {prod.brand[1]}
              </a>
              <a href={"/"} className="block ml=[2%] no-underline text-sm">
                {prod.brand[2]}
              </a>
              <a href={"/"} className="block ml=[2%] no-underline text-sm">
                {prod.brand[3]}
              </a>
              <a href={"/"} className="block ml=[2%] no-underline text-sm">
                {prod.brand[4]}
              </a>
              <a href={"/"} className="block ml=[2%] no-underline text-sm">
                {prod.brand[5]}
              </a>
              <a href={"/"} className="block ml=[2%] no-underline text-sm">
                {prod.brand[6]}
              </a>
              <a href={"/"} className="block ml=[2%] no-underline text-sm">
                {prod.brand[7]}
              </a>
            </div>
          </div>
          <hr className="w-[100%}" />
          <div id="Price-range">
            <h6 className="cursor-pointer ml-[2%] mt-[8%] mb-[6%]" id="Price">
              <b>Price</b>
            </h6>
            <div className="hidden ml-[2%] leading-[1.6px]" id="Price-list">
              <a href={"/"} className="text-sm block no-underline ml-[2%]">
                {prod.brand[0]}
              </a>
              <a href={"/"} className="text-sm block no-underline ml-[2%]">
                {prod.brand[1]}
              </a>
              <a href={"/"} className="text-sm block no-underline ml-[2%]">
                {prod.brand[2]}
              </a>
              <a href={"/"} className="text-sm block no-underline ml-[2%]">
                {prod.brand[3]}
              </a>
              <a href={"/"} className="text-sm block no-underline ml-[2%]">
                {prod.brand[4]}
              </a>
              <a href={"/"} className="text-sm block no-underline ml-[2%]">
                {prod.brand[5]}
              </a>
              <a href={"/"} className="text-sm block no-underline ml-[2%]">
                {prod.brand[6]}
              </a>
              <a href={"/"} className="text-sm block no-underline ml-[2%]">
                {prod.brand[7]}
              </a>
            </div>
          </div>
          <hr className="w-[100%]" />
          <div
            className="cursor-pointer ml-[2%] mt-[8%] mb-[6%]"
            id="dealsdisc-container"
          >
            <h6 className="dealsdisc">
              <b>Deal & Discounts</b>
            </h6>
            <div className="hidden leading-[1.6px]" id="dealsdisc-content">
              <a href={"/"} className="text-sm block ml-[2%]">
                All Discounts
              </a>
              <a href={"/"} className="text-sm block ml-[2%]">
                Today's Deals
              </a>
            </div>
          </div>
          <hr className="w-[100%]" />
          <div id="itemavail-container1">
            <h6
              className="cursor-pointer ml-[2%] mt-[8%] mb-[6%]"
              id="itemavail"
            >
              <b>Item Availability</b>
            </h6>
            <div className="hidden ml-[2%]" id="itemavail-container2">
              <a href={"/"} className="text-sm no-underline">
                Shopflix Warehouse
                <span style={{ marginLeft: "45%" }}>{prod.prodavail}</span>
              </a>
            </div>
          </div>
          <hr className="w-[100%]" />
          <div id="shipping-container">
            <h6 className="cursor-pointer ml-[2%]" id="shipping-title">
              <b>Shipping</b>
            </h6>
            {/*<div className="shipping-content">
                    <p className='text-sm'>All Discounts</p>
                    <p className='text-sm'>Today's Deals</p>  
                </div>*/}
          </div>
          <hr className="w-[100%]" />
          <div id="rating-container">
            <h6 className="cursor-pointer ml-[2%] " id="rating-title">
              <b>Rating</b>
            </h6>
            {/*<div className="rating-content">
                    <p className='text-sm'>All Discounts</p>
                    <p className='text-sm'>Today's Deals</p>  
                </div>*/}
          </div>
        </div>

        <div
          id="updatedPage"
          className="float-left w-[70%] h-[600px] mt-[3%] mb-[3%] border border-black"
        ></div>
    </>
  );
}
$(document).ready(function () {
  $("#gadcat").click(function () {
    $("#gadlist").toggle();
  });
  $("#brand").click(function () {
    $("#brand-names").toggle();
  });
  $("#Price").click(function () {
    $("#Price-list").toggle();
  });
  $("#itemavail").click(function () {
    $("#itemavail-container2").toggle();
  });
  $("#dealsdisc").click(function () {
    $("#dealsdisc-content").toggle();
  });
  $("#gadlist > p").click(function () {
    $("#updatedPage").html();
  });
});

export default Products;
