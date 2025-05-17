
export interface productDataDetailsCategory {
    id:number,
    name:string,
    brand:string,
    price:number,
    image:string,
    quantity:number,
    description:string,
    specifications:[string,number,string,string],
    relatedproducts : {
        image1:string,
        image2:string,
        image3:string,
        image4:string,
        image5:string
    }
}

export type productdatadetailsArray = productDataDetailsCategory[]


export const productdatadetails:productdatadetailsArray = [
    {
        id:1,
        name: "Sample Product",
        brand:"Lg",
        price: 10000,
        image: "/flash-image/Black Standing Fan Flashsales.jpeg",
        quantity:0,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/flash-image/Headphone Flashsales.jpeg",
            image2:"/flash-image/Headphone Flashsales.jpeg",
            image3:"/flash-image/Headphone Flashsales.jpeg",
            image4:"/flash-image/Headphone Flashsales.jpeg",
            image5:"/flash-image/Headphone Flashsales.jpeg"
        }
    },
    {
        id:2,
        name: "Sony Headphone",
        brand:"Sony",
        price: 15000,
        image: "/flash-image/Headphone Flashsales.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/flash-image/Headphone Flashsales.jpeg",
            image2:"/flash-image/Headphone Flashsales.jpeg",
            image3:"/flash-image/Headphone Flashsales.jpeg",
            image4:"/flash-image/Headphone Flashsales.jpeg",
            image5:"/flash-image/Headphone Flashsales.jpeg"
        }
    },
    {
        id:3,
        name: "Iphone12 Pro Max",
        brand:"Apple",
        price: 1000000.00,
        image: "/flash-image/Iphone 12pro max.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/flash-image/Iphone 12pro max.jpeg",
            image2:"/flash-image/Iphone 12pro max.jpeg",
            image3:"/flash-image/Iphone 12pro max.jpeg",
            image4:"/flash-image/Iphone 12pro max.jpeg",
            image5:"/flash-image/Iphone 12pro max.jpeg"
        }
    },
    {
        id:4,name: "Electric Hair Clipper",
        brand:"Wahl",
        price: 15000,
        image: "/flash-image/Wireless Electric Hair Clipper Flashsales.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/flash-image/Headphone Flashsales.jpeg",
            image2:"/flash-image/Headphone Flashsales.jpeg",
            image3:"/flash-image/Headphone Flashsales.jpeg",
            image4:"/flash-image/Headphone Flashsales.jpeg",
            image5:"/flash-image/Headphone Flashsales.jpeg"
        }
    },
    {
        id:5,
        name: "Office Chair",
        brand:"Herman Miller",
        price: 15000,
        image: "/flash-image/Office Chair Flashsales.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:6,
        name: "Brown Leather Men's Shoes",
        brand:"Gucci",
        price: 10000,
        image: '/Images/AdobeStock_298598309_Preview.jpeg',
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:7,
        name: "Casio G-shock Wristwatch",
        brand:"G-shock",
        price: 25000,
        image: "/Images/AdobeStock_444784794_Preview_Editorial_Use_Only.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:8,
        name: "Pressing Iron",
        brand:"Binatone",
        price: 15000,
        image: "/Images/AdobeStock_36881885_Preview.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:9,
        name: "Aviator Sunglasses",
        brand:"Gucci",
        price: 5000,
        image: "/Images/AdobeStock_187047193_Preview.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:10,
        name: "Itel 10000mah Power Bank",
        brand:"Itel",
        price: 6000,
        image: "/Images/AdobeStock_558820476_Preview.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:11,
        name: "Microwave",
        brand:"LG",
        price: 20000,
        image: "/Images/AdobeStock_134521541_Preview.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:12,
        name: "Elepaq Generator",brand:"Elepaq",
        price: 120000,
        image: "/Images/AdobeStock_72069759_Preview (1).jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:13,
        name: "LG 42 Inches",
        brand:"LG",
        price: 80000,
        image: "/Images/AdobeStock_502262912_Preview.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:14,
        name: "Gas Cooker",
        brand:"Binatone",
        price: 150000,
        image: "/Images/AdobeStock_197652140_Preview (1).jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:15,
        name: "Chest Freezer",
        brand:"Scanfrost",
        price: 150000,
        image: "/Images/AdobeStock_482803029_Preview (1).jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:16,
        name: "Electric Fan",
        brand:"Binatone",
        price: 20000,
        image: "/Images/AdobeStock_327624949_Preview.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:17,
        name: "Toaster Machine",
        brand:"Binattone",
        price: 15000,
        image: "/Images/AdobeStock_81150471_Preview.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:18,
        name: "Electric Kettle",
        brand:"Binatone",
        price: 10000,
        image: "/Images/AdobeStock_588365814_Preview.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:19,
        name: "Infinix Hot 10",
        brand:"Infinix",
        price: 120000,
        image: "/Images/Infinix Hot 10.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:20,
        name: "Samsung Galaxy",
        brand:"Samsung",
        price: 120000,
        image: "/Images/samsung galaxy S20.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:21,
        name: "Tecno Camon 20",
        brand:"Tecno",
        price: 120000,
        image: "/Images/Tecno Camon 20.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:22,
        name: "HP Elitebook 840 G6",
        brand:"HP",
        price: 120000,
        image: "/Images/Hp Elitebook 840 G6 Notebook.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:23,
        name: "Huawei P30 Pro",
        brand:"Huawei",
        price: 120000,
        image: "/Images/Hauwei P30 pro 8+.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:24,
        name: "4G Tecno Tablet",
        brand:"Tecno",
        price: 120000,
        image: "/Images/4G Tecno tablet.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:25,
        name: "Gionee F6",
        brand:"Gionee",
        price: 120000,
        image: "/Images/Gionee F6.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:26,
        name: "Xiaomi Redmi Pad SE",
        brand:"Xiaomi",
        price: 120000,
        image: "/Images/Xiaomi Redmi Pad SE.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:27,
        name: "Sheabutter",
        brand:"Vaseline",
        price: 10000,
        image: "/Images/Shea Butter.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:28,
        name: "Vaseline",
        brand:"Vaseline",
        price: 5000,
        image: "/Images/Vasline.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:29,
        name: "Shampoo",
        brand:"Shampoo",
        price: 3000,
        image: "/Images/Shampoo.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:30,
        name: "Explorer Perfume",
        brand:"Explorer",
        price: 10000,
        image: "/Images/Explorer Perfume.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:31,
        name: "Vaseline Moiturizer",
        brand:"Vaseline",
        price: 8000,
        image: "/Images/Vasline  Moiturizer.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:32,
        name: "Dark & Lovely",
        brand:"Dark & Lovely",
        price: 10000,
        image: "/Images/Dark & Lovely Moisturizer.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:33,
        name: "Nivea Cream",
        brand:"Nivea",
        price: 7000,
        image: "/Images/Nivea Cream.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:34,
        name: "So Fine Hair Cream",
        brand:"So Fine",
        price: 1000,
        image: "/Images/So Fine Hair Cream.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:35,
        name: "Black Leather Handbag",
        brand:"Gucci",
        price: 100000,
        image: "/Images/Black Leather Handbag.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:36,
        name: "Black Jeans",
        brand:"Prada",
        price: 15000,
        image: "/Images/Black Jeans.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:37,
        name: "Nike Air Jordan Max",
        brand:"jordan",
        price: 80000,
        image: "/Images/Nike Air Jordan Max.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:38,
        name: "Golden Necklace",
        brand:"IceHub",
        price: 50000,
        image: "/Images/Golden Necklace.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:39,
        name: "Nike Air Max",
        brand:"Nike",
        price: 70000,
        image: "/Images/Nike Air Max.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:40,
        name: "Green Cap",
        brand:"Gucci",
        price: 10000,
        image: "/Images/Green Cap.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:41,
        name: "Swiss Wristwatch",
        brand:"Swiss",
        price: 100000,
        image: "/Images/Swiss Wristwatch.jpeg",
        quantity:1,
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    },
    {
        id:42,
        name: "Denim Jacket",
        brand:"Denim",
        price: 30000,
        quantity:1,
        image: "/Images/Denim Jacket.jpeg",
        description:"it is a nice product",
        specifications:["Black",6,"Metal","16inches"],
        relatedproducts:{
            image1:"/Images/Headphone Flashsales.jpeg",
            image2:"/Images/Headphone Flashsales.jpeg",
            image3:"/Images/Headphone Flashsales.jpeg",
            image4:"/Images/Headphone Flashsales.jpeg",
            image5:"/Images/Headphone Flashsales.jpeg"
        }
    }
]
export default productdatadetails;
