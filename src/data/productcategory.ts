export interface ProductCategory {
    id:number,
    category:string,
    categoriesDetails:[string,string,string,string],
    brand:[string,string,string,string,string,string,string,string,string],
    discounts: {
        image1:string,
        image2:string,
        image3:string
    },
    deals: {
        image1:string,
        image2:string,
        image3:string
    },
    prodavail:number,
    prodavailimg:{
        image1:string,
        image2:string,
        image3:string
    }
}
export type ProductArray = ProductCategory[]


export const Product:ProductArray = [

    {
        "id": 1,
        "category": "Phone&Tablets",
        "categoriesDetails": ["Laptop&Desktops", "Computer Accessories", "Wifi", "PC Gaming"],
        "brand": ["Infinix", "Lenovo", "Dell", "Asus", "Samsung", "LG", "Sony", "Toshiba", "Acer"],
        "discounts": {
            "image1": "",
            "image2": "",
            "image3": ""
        },
        "deals": {
            "image1": "/Images/Headphone Flashsales.jpeg",
            "image2": "/Images/Iphone 12pro max.jpeg",
            "image3": "/Images/Infinix Hot 10.jpeg"
        },
        "prodavail": 3,
        "prodavailimg": {
            "image1": "",
            "image2": "",
            "image3": ""
        }
    },
    {
        "id": 2,
        "category": "Computer&Accessories",
        "categoriesDetails": ["Laptop&Desktops", "Computer Accessories", "Wifi", "PC Gaming"],
        "brand": ["HP", "Lenovo", "Dell", "Asus", "Samsung", "LG", "Sony", "Toshiba", "Acer"],
        "discounts": {
            "image1": "",
            "image2": "",
            "image3": ""
        },
        "deals": {
            "image1": "/Images/samsung galaxy S20.jpeg",
            "image2": "/Images/Hp Elitebook 840 G6 Notebook.jpeg",
            "image3": "/Images/Hauwei P30 pro 8+.jpeg"
        },
        "prodavail": 3,
        "prodavailimg": {
            "image1": "",
            "image2": "",
            "image3": ""
        }
    },
    {
        "id": 3,
        "category": "Electronics",
        "categoriesDetails": ["Laptop&Desktops", "Computer Accessories", "Wifi", "PC Gaming"],
        "brand": ["HP", "Lenovo", "Dell", "Asus", "Samsung", "LG", "Sony", "Toshiba", "Acer"],
        "discounts": {
            "image1": "",
            "image2": "",
            "image3": ""
        },
        "deals": {
            "image1": "",
            "image2": "",
            "image3": ""
        },
        "prodavail": 3,
        "prodavailimg": {
            "image1": "",
            "image2": "",
            "image3": ""
        }
    },
    {
        "id": 4,
        "category": "Appliances",
        "categoriesDetails": ["Laptop&Desktops", "Computer Accessories", "Wifi", "PC Gaming"],
        "brand": ["HP", "Lenovo", "Dell", "Asus", "Samsung", "LG", "Sony", "Toshiba", "Acer"],
        "discounts": {
            "image1": "",
            "image2": "",
            "image3": ""
        },
        "deals": {
            "image1": "",
            "image2": "",
            "image3": ""
        },
        "prodavail": 3,
        "prodavailimg": {
            "image1": "",
            "image2": "",
            "image3": ""
        }
    },
    {
        "id": 5,
        "category": "Fashion",
        "categoriesDetails": ["Laptop&Desktops", "Computer Accessories", "Wifi", "PC Gaming"],
        "brand": ["HP", "Lenovo", "Dell", "Asus", "Samsung", "LG", "Sony", "Toshiba", "Acer"],
        "discounts": {
            "image1": "",
            "image2": "",
            "image3": ""
        },
        "deals": {
            "image1": "",
            "image2": "",
            "image3": ""
        },
        "prodavail": 3,
        "prodavailimg": {
            "image1": "",
            "image2": "",
            "image3": ""
        }
    },
    {
        "id": 6,
        "category": "Gaming",
        "categoriesDetails": ["Laptop&Desktops", "Computer Accessories", "Wifi", "PC Gaming"],
        "brand": ["HP", "Lenovo", "Dell", "Asus", "Samsung", "LG", "Sony", "Toshiba", "Acer"],
        "discounts": {
            "image1": "",
            "image2": "",
            "image3": ""
        },
        "deals": {
            "image1": "",
            "image2": "",
            "image3": ""
        },
        "prodavail": 3,
        "prodavailimg": {
            "image1": "",
            "image2": "",
            "image3": ""
        }
    },
    {
        "id": 7,
        "category": "Grocery",
        "categoriesDetails": ["Laptop&Desktops", "Computer Accessories", "Wifi", "PC Gaming"],
        "brand": ["HP", "Lenovo", "Dell", "Asus", "Samsung", "LG", "Sony", "Toshiba", "Acer"],
        "discounts": {
            "image1": "",
            "image2": "",
            "image3": ""
        },
        "deals": {
            "image1": "",
            "image2": "",
            "image3": ""
        },
        "prodavail": 3,
        "prodavailimg": {
            "image1": "",
            "image2": "",
            "image3": ""
        }
    }
]