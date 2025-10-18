import { useParams } from "react-router-dom";
import { Product } from "../data/productcategory.ts";
//import $ from "jquery";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  type ProductCategory = {
    id: number;
    image: string;
    name: string;
    OriginalPrice: number;
    Price: number;
    default: boolean
  }
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  const [productCategory, setProductCategory] = useState<ProductCategory[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(() => {
    const saved = localStorage.getItem("dropDown");
    return saved === "true";
  });

  const [selectedSubcategory, setSelectedSubcategory] = useState(() => {
    return localStorage.getItem("selectedSubcategory") || "";
  });

  const toggleDropdown = () => {
    const newState = !isDropdownOpen;
    setIsDropdownOpen(newState);
    localStorage.setItem("dropDown", String(newState));
  };

  useEffect(() => {
  const fetchProducts = async () => {
    setLoading(true); // Start loading
    let res;
    try {
      if (!selectedSubcategory) {
        res = await axios.get('/api/getProducts?isDefault=true');
      } else {
        res = await axios.get(`/api/addProducts?category=${selectedSubcategory}`);
      }

      setProductCategory(res.data); // Set the data
    } catch (err) {
      console.error("❌ Failed to fetch products", err);
    } finally {
      setLoading(false); // End loading no matter what
    }
  };

  fetchProducts();
}, [selectedSubcategory]);

  const handleSubcategoryClick = (Category: string) => {
    setSelectedSubcategory(Category);
    localStorage.setItem("selectedSubcategory", Category);
  };

  {
    /* const handleCategoryClick = (categoryName: string) => {
    setCategoryName(categoryName);
    fetchProducts(categoryName);
    Navigate(`/${categoryName}`);*/
  }

  let { category } = useParams();
  console.log("category:", category);
  console.log("ProductList:", Product);

  const prod = Product.find((prod) => String(prod.category) === category);
  if (!prod) {
    return <div>Product not found</div>;
  }
  return (
    <div className="clearfix">
      <div
        className="float-left w-[20%] mt-[3%] ml-[5%] mr-[1%] h-auto border border-black"
        id="wrapper"
      >
        <button
          onClick={toggleDropdown}
          id="category-list"
          className="cursor-pointer ml-[2%] mt-[8%] mb-[2%]"
        >
          <b>Category</b>
        </button>

        {/* Dropdown items, visible only if open */}
        {isDropdownOpen && (
          <div className=" leading-[1.6px] h-auto " id="gadlist">
            {/*<p className="text-sm cursor-pointer">
              {prod.categoriesDetails[0]}
            </p>*/}
            {prod.categoriesDetails.map((subcategory, index) => (
              <p
                key={index}
                className="text-sm cursor-pointer"
                onClick={() => handleSubcategoryClick(subcategory)}
              >
                {subcategory}
              </p>
            ))}
          </div>
        )}
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
          <h6 className="cursor-pointer ml-[2%] mt-[8%] mb-[6%]" id="itemavail">
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  float-left w-[70%] h-auto mt-[3%] my-auto mb-[3%] border border-black"
      >
    {loading ? (
  <p>Loading products...</p>
) : productCategory.length > 0 ? (
  selectedSubcategory ? (
    productCategory.filter(item => !item.default).map((item) => (
      <Link className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group" to="" key={item.id}>
        <div className="relative">
        <img className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform" src={item.image} />
        <p>{item.name}</p>
        <p>{item.OriginalPrice}</p>
        <p>{item.Price}</p>
        </div>
      </Link>
    ))
  ) : (
    productCategory.filter(item => item.default).map((item) => (
      <Link className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group" to="" key={item.id}>
        <div className="relative">
        <img className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform" src={item.image} />
        <p>{item.name}</p>
        <p>{item.OriginalPrice}</p>
        <p>{item.Price}</p>
        </div>
      </Link>
    ))
  )
) : (
  <p>No products found</p>
)}

      </div>
    </div>
  );
}



export default Products;
