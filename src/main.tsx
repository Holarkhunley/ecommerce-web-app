import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import MyCarousel from "./MyCarousel.tsx";
import Footer from "./footer.tsx";
import Brandcarousel from "./brandcarousel.tsx";

function Mainpage() {
  return (
    <div className="m-0 w-full min-h-screen bg-gray-50" id="wrapper">
      <div
        className="clearfix float-left w-[86%] ml-[7%] mr-[5%] mt-3 h-[200px] border-r rounded-2xl shadow-md mb-6 bg-white "
        id="main-container1"
      >
        <div
          className="float-left ml-[9%] mt-5 text-md border-r h-[100px]"
          id="main-content1"
        >
          <FontAwesomeIcon
            className="text-3xl"
            id="truck-icon"
            icon={faTruckFast}
          />
          <h1 className="text-[20px]">Free Shipping</h1>
          <p>Free shipping on all your online order</p>
        </div>
        <div
          className="float-left ml-[9%] mt-5 text-md border-r h-[100px]"
          id="main-content2"
        >
          <FontAwesomeIcon
            className="text-3xl"
            id="clock-icon"
            icon={faClock}
          />
          <h1 className="text-[20px]">24/7 Support</h1>
          <p>Contact us anytime for help or any issue</p>
        </div>
        <div
          className="float-left mt-5 ml-[9%] text-md border-r h-[100px]"
          style={{ border: "none" }}
          id="main-content3"
        >
          <FontAwesomeIcon
            className="text-3xl"
            id="creditcard-icon"
            icon={faCreditCard}
          />
          <h1 className="text-[20px]">Secure Payment</h1>
          <p>Dont worry we ensure secure payment</p>
        </div>
      </div>
      <MyCarousel />
      <div
        className="clearfix max-w-[86%] h-[250px] border ml-[7%] mb-6 mr-[7%] rounded-md bg-white"
        id="flashsales-content"
      >
        <div className="bg-[url('/flash-image/Flash sales image1.png')]  bg-center w-[15%] float-left border-r h-[249px]"></div>
        <a
          href={"/productdata/1"}
          className="no-underline mt-[0.7%] mr-[1%] ml-[1%] cursor-pointer float-left h-[230px] w-[180px]"
          id="flashImage1"
        >
          <img
            src="/flash-image/Black Standing Fan Flashsales.jpeg"
            className="w-[150px] h-[160px]"
            alt="..."
          />
          <h5 className='text-sm ml-[1%]'>
            Black Standing Fan
          </h5>
          <p className='leading-[5px] text-sm ml-[1%]'>
            <b> &#8358;10,000</b>
          </p>
          <p
            className='no-underline leading-[5px] text-sm ml-[1%]'
          
          >
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 30,000
          </p>
        </a>

        <a
          href={"/productdata/2"}
          className="no-underline mt-[0.7%] mr-[1%] border float-left h-[230px] w-[180px]"
          id="flashImage2"
        >
          <img
            src="/flash-image/Headphone Flashsales.jpeg"
            width="150px"
            height="160px"
            alt="..."
          />
          <h5 style={{ fontSize: "14px", marginLeft: "1%" }}>Headphone</h5>
          <p style={{ lineHeight: "5px", fontSize: "15px", marginLeft: "1%" }}>
            <b> &#8358; 15,000</b>
          </p>
          <p
            style={{
              textDecoration: "line-through",
              lineHeight: "5px",
              fontSize: "12px",
              marginLeft: "1%",
            }}
          >
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 30,000
          </p>
        </a>

        <a
          href={"/productdata/3"}
          className="no-underline mt-[0.7%] mr-[1%] border float-left h-[230px] w-[180px]"
          id="flashImage3"
        >
          <img
            src="/flash-image/Iphone 12pro max.jpeg"
            className="w-[150px] h-[160px]"
            alt="..."
          />
          <h5 style={{ fontSize: "14px", marginLeft: "1%" }}>
            Iphone 12 Pro Max
          </h5>
          <p style={{ lineHeight: "5px", fontSize: "15px", marginLeft: "1%" }}>
            <b> &#8358; 15,000</b>
          </p>
          <p
            style={{
              textDecoration: "line-through",
              lineHeight: "5px",
              fontSize: "12px",
              marginLeft: "1%",
            }}
          >
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 30,000
          </p>
        </a>

        <a
          href={"/productdata/4"}
          className="no-underline mt-[0.7%] mr-[1%] border float-left h-[230px] w-[180px]"
          id="flashImage4"
        >
          <img
            src="/flash-image/Wireless Electric Hair Clipper Flashsales.jpeg"
            className="w-[150px] h-[160px]"
            alt="..."
          />
          <h5 style={{ fontSize: "14px", marginLeft: "1%" }}>
            Electric Hair Clipper
          </h5>
          <p style={{ lineHeight: "5px", fontSize: "15px", marginLeft: "1%" }}>
            <b> &#8358; 15,000</b>
          </p>
          <p
            style={{
              textDecoration: "line-through",
              lineHeight: "5px",
              fontSize: "12px",
              marginLeft: "1%",
            }}
          >
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 30,000
          </p>
        </a>

        <a
          href={"/productdata/5"}
          type="button"
          className="no-underline mt-[0.7%] mr-1 ml-1 border  h-[230px] w-[180px]"
          id="flashImage5"
        >
          <img
            src="/flash-image/Office Chair Flashsales.jpeg"
            className="w-[150px] h-[160px]"
            alt="..."
          />
          <h5 style={{ fontSize: "14px", marginLeft: "1%" }}>Office Chair</h5>
          <p style={{ lineHeight: "5px", fontSize: "15px", marginLeft: "1%" }}>
            <b> &#8358; 15,000</b>
          </p>
          <p
            style={{
              textDecoration: "line-through",
              lineHeight: "5px",
              fontSize: "12px",
              marginLeft: "1%",
            }}
          >
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 30,000
          </p>
        </a>
      </div>

      <div
        className="clearfix max-w-[86%] ml-[7%] mr-[7%] border h-[300px] mb-6"
        id="Discount-container"
      >
        <p className="h-10 pt-2 pb-1 font-sans border-b border w-full text-left">
          <b>Deals Under $50</b>
        </p>
        <a
          href={"/productdata/6"}
          className="no-underline ml-[2%] mr-[1.5%] float-left border rounded-md w-[210px] h-[230px] shadow-md mt-0"
          id="discountimage1"
        >
          <img
            src="/discount-image/AdobeStock_298598309_Preview.jpeg"
            className="w-[200px] h-[150px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%]">Brown Leather Men's Shoe</h5>
          <p className="leading-[5px] text-sm ml-[1%}">
            <b> &#8358;10,000</b>
          </p>
          <p className="no-underline leading-[5px] text-[12px] ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 20,000
          </p>
          <button className="text-[10px] font-sans absolute right-[78%] top-[186.5%] float-right">
            ADD TO CART
          </button>
        </a>

        <a
          href={"/productdata/7"}
          className="no-underline mr-[1.5%] cursor-pointer float-left border rounded-md w-[210px] h-[230px] shadow-md mt-0"
          id="discountimage2"
        >
          <img
            src="/discount-image/AdobeStock_444784794_Preview_Editorial_Use_Only.jpeg"
            className="w-[200px] h-[150px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%]">Casio G-shock Wristwatch</h5>
          <p className="leading-[5px] text-sm ml-[1%}">
            <b> &#8358; 25,000</b>
          </p>
          <p className="no-underline leading-[5px] text-[12px] ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 50,000
          </p>
          <button className="text-[10px] font-sans absolute right-[61%] top-[186.4%]">
            ADD TO CART
          </button>
        </a>

        <a
          href={"/productdata/8"}
          className="no-underline mr-[1.5%] float-left border rounded-md w-[210px] h-[230px] shadow-md mt-0"
          id="discountimage3"
        >
          <img
            src="/discount-image/AdobeStock_36881885_Preview.jpeg"
            className="w-[200px] h-[150px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%]">Pressin Iron</h5>
          <p className="leading-[5px] text-sm ml-[1%}">
            <b> &#8358; 15,000</b>
          </p>
          <p className="no-underline leading-[5px] text-[12px] ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 30,000
          </p>
          <button className="text-[10px] font-sans absolute right-[44%] top-[186.4%]">
            ADD TO CART
          </button>
        </a>

        <a
          href={"/productdata/9"}
          className="no-underline mr-[1.5%] float-left border rounded-md w-[210px] h-[230px] shadow-md mt-0"
          id="discountimage4"
        >
          <img
            src="/discount-image/AdobeStock_187047193_Preview.jpeg"
            className="w-[200px] h-[150px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%]">Aviator Sunglasses</h5>
          <p className="leading-[5px] text-sm ml-[1%]">
            <b> &#8358; 5,000</b>
          </p>
          <p className="no-underline leading-[5px] text-[12px] ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 10,000
          </p>
          <button className="text-[10px] font-sans absolute right-[27%] top-[186.5%]">
            ADD TO CART
          </button>
        </a>

        <a
          href={"/productdata/10"}
          className="no-underline border rounded-md w-[210px] h-[230px] shadow-md mt-0"
          id="discountimage5"
        >
          <img
            src="/discount-image/AdobeStock_558820476_Preview.jpeg"
            className="w-[200px] h-[150px] "
            alt="..."
          />
          <h5 className="text-sm ml-[1%]">Itel 10000Mah Power Bank</h5>
          <p className="leading-[5px] text-sm ml-[1%]">
            <b> &#8358; 6,000</b>
          </p>
          <p className="no-underline leading-[5px] text-[12px] ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 12,000
          </p>
          <button className="text-[10px] font-sans absolute right-[10%] top-[186%]">
            ADD TO CART
          </button>
        </a>
      </div>

      <div
        className="clearfix max-w-[86%] h-[465px] border rounded-md ml-[7%] mr-[7%] bg-white mb-6"
        id="Appliances-content"
      >
        <div
          id="Appliances-overview"
          className="w-[35%] h-[462px] float-left   border text-center"
        >
          <p className=" h-10 pt-2 pb-1 font-sans border-b mb-0 width-[100%]">
            <b>Appliances Deals</b>
          </p>
            <img src="/mockup-image/appliannces-mockup.png "className="h-[424px] " alt="appliances mockup" />
        </div>

        <a
          href={"/productdata/11"}
          className="no-underline mt-[1%] mr-[1%] ml-[0.5%] float-left border w-[175px] h-[215px]  rounded-md shadow-md mb-[1%]"
          id="appliancesImage1"
        >
          <img
            className="mt-[1%] ml-[5%] w-[150px] h-[140px]"
            src="/appliance-image/AdobeStock_134521541_Preview.jpeg"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Microwave</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 20,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/12"}
          className="no-underline mt-[1%] mr-[1%] ml-[0.5%]  float-left border w-[175px] h-[215px]  rounded-md shadow-md mb-[1%]"
          id="appliancesImage2"
        >
          <img
            className="mt-[1%] w-[150px] h-[140px]"
            src="/appliance-image/AdobeStock_72069759_Preview (1).jpeg"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Elepaq Generator</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/13"}
          className="no-underline mt-[1%] mr-[1%] ml-[0.5%]  float-left border w-[175px] h-[215px]  rounded-md shadow-md mb-[1%]"
          id="appliancesImage3"
        >
          <img
            className="mt-[1%] w-[150px] h-[140px]"
            src="/appliance-image/AdobeStock_502262912_Preview.jpeg"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">LG 42 Inches</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 20,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/14"}
          className="no-underline   float-left border w-[175px] h-[215px] ml-[0.5%%]  rounded-md shadow-md mb-[1%]"
          id="appliancesImage4"
        >
          <img
            src="/appliance-image/AdobeStock_197652140_Preview (1).jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Gas Cooker</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 20,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/15"}
          className="no-underline   ml-[0.5%]  float-left border w-[175px] h-[215px]  rounded-md shadow-md mr-[1%]"
          id="appliancesImage5"
        >
          <img
            src="/appliance-image/AdobeStock_482803029_Preview (1).jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Chest Freezer</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 150,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/16"}
          className="no-underline  mr-[1%]  float-left border w-[175px] h-[215px]  rounded-md shadow-md"
          id="appliancesImage6"
        >
          <img
            src="/appliance-image/AdobeStock_327624949_Preview.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Electric Fan</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 20,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/17"}
          className="no-underline  mr-[1%]  float-left border w-[175px] h-[215px]  rounded-md shadow-md"
          id="appliancesImage7"
        >
          <img
            src="/appliance-image/AdobeStock_81150471_Preview.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Toaster Machine</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 15,000</b>
          </p>
          <p className="line-through leading-[0px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/18"}
          className="no-underline mt-[0.5%] w-[175px] h-[215px] border rounded-md"
          id="appliancesImage8"
        >
          <img
            src="/appliance-image/AdobeStock_588365814_Preview.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Electric Kettle</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 10,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>
      </div>

      <div
        className="clearfix border w-[86%] h-[465px] rounded-md ml-[7%] mr-[7%] mb-6 bg-white "
        id="Smartphone-container"
      >
        <div
          id="Smartphone-overview"
          className="w-[35%] float-left border-r text-center h-[465px] "
        >
          <p className="h-10 pt-2 pb-1 font-sans border-b mb-0 w-[100%]">
            <b>Smartphones & Computer Deals</b>
          </p>
          <img className='h-[424px]'src="/mockup-image/gadgets-mockup.png" alt="gadget-mockup"/>
        </div>

        <a
          href={"/productdata/19"}
          className="no-underline mr-[0.1%]  ml-[1%]  mt-[1%] float-left w-[175px] h-[203px] rounded-md shadow-md"
          id="smartPhoneImage1"
        >
          <img
            src="/smartphone-image/Infinix Hot 10.jpeg"
            className="w-[150px] h-[120px]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px] ml=[5%] mt-0 ">Infinix Hot 10</h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/20"}
          className="no-underline mr-[0.1%] ml-[1%] mt[1%]  float-left w-[175px] h-[215px] rounded-md shadow-md"
          id="smartPhoneImage2"
        >
          <img
            src="/smartphone-image/samsung galaxy S20.jpeg"
            className="w-[130px] h-[120px] mt-[6%]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px] ml-[5%] mt-0 ">Samsung Galaxy</h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline mb-[1%] text-sm ml-[5%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/21"}
          className="no-underline mr-[1%] ml-[1%] mt-[1%]  float-left w-[175px] h-[203px] rounded-md shadow-md"
          id="smartPhoneImage3"
        >
          <img
            src="/smartphone-image/Tecno Camon 20.jpeg"
            className="w-[150px] h-[120px]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px] m-=[5%] mt-0 ">Tecno Camon 20</h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline mb-[2px] text-sm ml5[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>



        <a
          href={"/productdata/26"}
          className="no-underline  w-[175px] h-[203px]  rounded-md shadow-md"
          id="smartPhoneImage4"
        >
          <img
            src="smartphone-image/Xiaomi Redmi Pad SE.jpeg"
            className="mt-0 w-[150px] h-[120px]"
            alt="..."
          />
          <h5 className="text-sm mb-0 ml-[5%] mt-0 ">
            Xiaomi Redmi Pad SE
          </h5>
          <p className=" text-sm mb-0 ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className=" text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>












       
        <a
          href={"/productdata/23"}
          className="no-underline mr-[1%] ml-[1%]  float-left w-[175px] h-[215px] rounded-md shadow-md "
          id="smartPhoneImage5"
        >
          <img
            src="/smartphone-image/Hauwei P30 pro 8+.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px] ml-[5%] mt-0 ">Hauwei P30 pro </h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline mb-[2px] text-sm ml-51%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/24"}
          className="no-underline mr-[1%]  float-left w-[175px] h-[215px] rounded-md shadow-md"
          id="smartPhoneImage6"
        >
          <img
            src="/smartphone-image/4G Tecno tablet.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px] m-=[5%] mt-0 ">4G Tecno tablet</h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline mb-[2px] text-sm ml-51%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/25"}
          className="no-underline mr-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md "
          id="smartPhoneImage7"
        >
          <img
            src="/smartphone-image/Gionee F6.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px]  ml-[5%]-mt-0 ">Gionee F6</h5>
          <p className="mb-0 text-sm ml-[1%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

       


       <a
          href={"/productdata/22"}
          className="no-underline mt-0 float-left w-[175px] h-[203px] rounded-md shadow-md"
          id="smartPhoneImage8"
        >
          <img
            src="/smartphone-image/Hp Elitebook 840 G6 Notebook.jpeg"
            className="w-[150px] h-[120px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mb-0 mt-0 ">Hp Elitebook 840 G6</h5>
          <p className="leading[0px] mb-0 text-sm ml-[1%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>
      </div>







      <div
        id="clearfix Healthbeauty-container"
        className="w-[86%] h-[465px] border rounded-md ml-[7%] mr-[7%] mb-6 bg-white"
      >
        <div
          id="Healthbeauty-overview"
          className="w-[35%] border-r text-center float-left h-[462px]"
        >
          <p className="h-10 pt-2 pb-1 font-sans border-b w-[100%] mb-0 ">
            <b>Health & Beauty</b>
          </p>
          <img src="/mockup-image/beauty-mockup.png" className="h-[424px]" alt=".." />
        </div>

        <a
          href=""
          className="no-underline mr-[0.1%] ml-[1%] mt-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md mb-[1%]"
          id="healthBeautyImage1"
        >
          <img
            src="/health&beauty-image/Shea Butter.jpeg"
            className="w-[130px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Shea Butter</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href=""
          className="no-underline mr-[1%] ml-[1%] mt-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md mb-[1%]"
          id="healthBeautyImage2"
        >
          <img
            src="/health&beauty-image/Vasline.jpeg"
            className="w-[130px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Vasline</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href=""
          className="no-underline mr-[1%]  mt-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md mb-[1%]"
          id="healthBeautyImage3"
        >
          <img
            src="/health&beauty-image/Shampoo.jpeg"
            className="w-[130px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Shampoo</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href=""
          className="no-underline  mt-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md mb-[1%]"
          id="healthBeautyImage4"
        >
          <img
            src="/health&beauty-image/Explorer Perfume.jpeg"
            className="w-[130px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Explorer Perfume</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href=""
          className="no-underline mr-[1%] ml-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md"
          id="healthBeautyImage5"
        >
          <img
            src="/health&beauty-image/Vasline  Moiturizer.jpeg"
            className="w-[130px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Vasline Moiturizer</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href=""
          className="no-underline mr-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md"
          id="healthBeautyImage6"
        >
          <img
            src="/health&beauty-image/Dark & Lovely Moisturizer.jpeg"
            className="w-[130px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Dark & Lovely</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href=""
          className="no-underline mr-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md"
          id="healthBeautyImage7"
        >
          <img
            src="/health&beauty-image/Nivea Cream.jpeg"
            className="w-[130px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">Nivea Cream</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href=""
          className="no-underline  float-left w-[175px] h-[215px] rounded-md shadow-md"
          id="healthBeautyImage8"
        >
          <img
            src="/health&beauty-image/So Fine Hair Cream.jpeg"
            className="w-[130px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%] mt-0">So Fine Hair Cream</h5>
          <p className="leading-[0px] text-sm ml-[1%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="no-underline leading-[2px] text-sm ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>
      </div>



      <div
        className="clearfix w-[86%] h-[465px] border rounded-md ml-[7%] mr-[7%] mb-6 bg-white"
        id="Fashiontrends-container"
      >
        <div
          id="Fashiontrends-overview"
          className="w-[35%] float-left border-r text-center h-[411.5px]"
        >
          <p className="font-sans h-10 pt-2 pb-1 mb-0 border-b w-[100%]">
            <b>Fashion Trends</b>
          </p>
          <img className =" h-[424px]" src ="/mockup-image/fashion-mockup.png" alt="fashion mockup"/>
        </div>

        <a
          href=""
          className="no-underline mt-[1%] mr-[1%] ml-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md mb-[1%]"
          id="fashionImage1"
        >
          <img
            src="/fashiontrends-image/Black Leather Handbag.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px] ml-[5%] mt-0">
            Black Leather Handbag
          </h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[5%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href=""
          className="no-underline mt-[1%] mr-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md mb-[1%]"
          id="fashionImage2"
        >
          <img
            src="/fashiontrends-image/Black Jeans.jpeg"
            className="w-[150px] h-[140px]"
            alt=".."
          />
          <h5 className="text-sm mb-[0.5px] ml-[5%] mt-0">Black Jeans</h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[5%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/37"}
          className="no-underline mt-[1%] mr-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md mb-[1%]"
          id="fashionImage3"
        >
          <img
            src="/fashiontrends-image/Nike Air Jordan Max.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px] ml-[5%] mt-0">
            Nike Air Jordan Max
          </h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[5%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/38"}
          className="no-underline float-left w-[175px] h-[215px] rounded-md shadow-md mt-[1%] mb-[1%]"
          id="fashionImage4"
        >
          <img
            src="/fashiontrends-image/Golden Necklace.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px] ml-[5%] mt-0">Golden Necklace</h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[5%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/39"}
          className="no-underline ml-[1%] mr-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md"
          id="fashionImage5"
        >
          <img
            src="/fashiontrends-image/Nike Air Max.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px] ml-[5%] mt-0">Nike Air Max</h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="line-through leading-[2px]  text-sm ml-[5%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/40"}
          className="no-underline  mr-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md"
          id="fashionImage6"
        >
          <img
            src="/fashiontrends-image/Green Cap.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px] ml-[5%] mt-0">Green Cap</h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[5%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/41"}
          className="no-underline mr-[1%] float-left w-[175px] h-[215px] rounded-md shadow-md"
          id="fashionImage7"
        >
          <img
            src="/fashiontrends-image/Swiss Wristwatch.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px] ml-[5%] mt-0">Swiss Wristwatch</h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="line-through leading-[2px] text-sm ml-[5%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>

        <a
          href={"/productdata/42"}
          className="no-underline float-left w-[175px] h-[215px] rounded-md shadow-md"
          id="fashionImage8"
        >
          <img
            src="/fashiontrends-image/Denim Jacket.jpeg"
            className="w-[150px] h-[140px]"
            alt="..."
          />
          <h5 className="text-sm mb-[0.5px] ml-[5%] mt-0">Denim Jacket</h5>
          <p className="mb-0 text-sm ml-[5%]">
            <b> &#8358; 120,000</b>
          </p>
          <p className="line-throughleading-[2px] text-sm ml-[5%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 5,000
          </p>
        </a>
      </div>

      


        <div
        className="clearfix max-w-[86%] ml-[7%] mr-[7%] border h-[300px] mb-6"
        id="Discount-container"
      >
        <p className="h-10 pt-2 pb-1 font-sans border-b border w-full text-left">
          <b>Top Selling Items</b>
        </p>
        <a
          href=""
          className="no-underline ml-[2%] mr-[1.5%] float-left border rounded-md w-[210px] h-[230px] shadow-md mt-0"
          id="discountimage1"
        >
          <img
            src= "/discount-image/AdobeStock_444784794_Preview_Editorial_Use_Only.jpeg"
            className="w-[200px] h-[150px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%]">Brown Leather Men's Shoe</h5>
          <p className="leading-[5px] text-sm ml-[1%}">
            <b> &#8358;10,000</b>
          </p>
          <p className="no-underline leading-[5px] text-[12px] ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 20,000
          </p>
          <button className="text-[10px] font-sans absolute right-[78%] top-[186.5%] float-right">
            ADD TO CART
          </button>
        </a>

        <a
          href=""
          className="no-underline mr-[1.5%] cursor-pointer float-left border rounded-md w-[210px] h-[230px] shadow-md mt-0"
          id="discountimage2"
        >
          <img
            src="/discount-image/AdobeStock_298598309_Preview.jpeg"
            

            className="w-[200px] h-[150px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%]">Casio G-shock Wristwatch</h5>
          <p className="leading-[5px] text-sm ml-[1%}">
            <b> &#8358; 25,000</b>
          </p>
          <p className="no-underline leading-[5px] text-[12px] ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 50,000
          </p>
          <button className="text-[10px] font-sans absolute right-[61%] top-[186.4%]">
            ADD TO CART
          </button>
        </a>

        <a
          href=""
          className="no-underline mr-[1.5%] float-left border rounded-md w-[210px] h-[230px] shadow-md mt-0"
          id="discountimage3"
        >
          <img
            src="/discount-image/AdobeStock_36881885_Preview.jpeg"
            className="w-[200px] h-[150px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%]">Pressin Iron</h5>
          <p className="leading-[5px] text-sm ml-[1%}">
            <b> &#8358; 15,000</b>
          </p>
          <p className="no-underline leading-[5px] text-[12px] ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 30,000
          </p>
          <button className="text-[10px] font-sans absolute right-[44%] top-[186.4%]">
            ADD TO CART
          </button>
        </a>

        <a
          href=""
          className="no-underline mr-[1.5%] float-left border rounded-md w-[210px] h-[230px] shadow-md mt-0"
          id="discountimage4"
        >
          <img
            src="/discount-image/AdobeStock_187047193_Preview.jpeg"
            className="w-[200px] h-[150px]"
            alt="..."
          />
          <h5 className="text-sm ml-[1%]">Aviator Sunglasses</h5>
          <p className="leading-[5px] text-sm ml-[1%]">
            <b> &#8358; 5,000</b>
          </p>
          <p className="no-underline leading-[5px] text-[12px] ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 10,000
          </p>
          <button className="text-[10px] font-sans absolute right-[27%] top-[186.5%]">
            ADD TO CART
          </button>
        </a>

        <a
          href=""
          className="no-underline border  border-black rounded-md w-[210px] h-[230px] shadow-md "
          id="discountimage5"
        >
          <img
            src="/discount-image/AdobeStock_558820476_Preview.jpeg"
            className="w-[200px] h-[150px] "
            alt="..."
          />
          <h5 className="text-sm ml-[1%]">Itel 10000Mah Power Bank</h5>
          <p className="leading-[5px] text-sm ml-[1%]">
            <b> &#8358; 6,000</b>
          </p>
          <p className="no-underline leading-[5px] text-[12px] ml-[1%]">
            <span className="badge bg-danger">-50% 0ff</span> &#8358; 12,000
          </p>
          <button className="text-[10px] font-sans absolute right-[10%] top-[186%]">
            ADD TO CART
          </button>
        </a>
      </div>




        <Brandcarousel />
      <Footer />
    </div>
  );
}

export default Mainpage;
