export interface ProductCategory {
    id:number,
    category:string,
    categoriesDetails:[string,string,string,string],
    brand:[string,string,string,string,string,string,string,string,string],
    defaultImages: {
        image1:string,
        image2:string,
        image3:string,
        image4:string,
        image5:string,
        image6:string
        image7:string,
        image8:string,
        image9:string,
        image10:string,
        image11:string,
        image12:string,
        image13:string,
        image14:string,
        image15:string,
        image16:string
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
        "categoriesDetails": ["PhoneTablets", "Computer Accessories", "Wifi", "PC Gaming"],
        "brand": ["Infinix", "Lenovo", "Dell", "Asus", "Samsung", "LG", "Sony", "Toshiba", "Acer"],
        "defaultImages": {
            "image1": "/default Image/4G Tecno tablet.jpeg",
            "image2": "/default Image/Tecno Camon 20.jpeg",
            "image3": "/default Image/Xiaomi Redmi Pad SE.jpeg",
            "image4": "/default Image/samsung galaxy S20.jpeg",
            "image5": "/default Image/Infinix Hot 10.jpeg",
            "image6": "/default Image/Hauwei P30 pro 8+.jpeg",
            "image7": "/default Image/Gionee F6.jpeg",
            "image8": "/default Image/samsung galaxy S20.jpeg",
            "image9": "/default Image/Tecno Camon 20.jpeg",
            "image10": "/default Image/samsung galaxy S20.jpeg",
            "image11": "/default Image/Hauwei P30 pro 8+.jpeg",
            "image12": "/default Image/4G Tecno tablet.jpeg",
            "image13": "/default Image/Xiaomi Redmi Pad SE.jpeg",
            "image14": "/default Image/Infinix Hot 10.jpeg",
            "image15": "/default Image/Gionee F6.jpeg",
            "image16":"/default Image/Tecno Camon 20.jpeg",
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
        "defaultImages": {
            "image1": "",
            "image2": "",
            "image3": "",
            "image4": "",
            "image5": "",
            "image6": "",
            "image7": "",
            "image8": "",
            "image9": "",
            "image10": "",
            "image11": "",
            "image12": "",
            "image13": "",
            "image14": "",
            "image15": "",
            "image16":"",
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
        "defaultImages": {
            "image1": "",
            "image2": "",
            "image3": "",
            "image4": "",
            "image5": "",
            "image6": "",
            "image7": "",
            "image8": "",
            "image9": "",
            "image10": "",
            "image11": "",
            "image12": "",
            "image13": "",
            "image14": "",
            "image15": "",
            "image16":"",
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
       "defaultImages": {
            "image1": "",
            "image2": "",
            "image3": "",
            "image4": "",
            "image5": "",
            "image6": "",
            "image7": "",
            "image8": "",
            "image9": "",
            "image10": "",
            "image11": "",
            "image12": "",
            "image13": "",
            "image14": "",
            "image15": "",
            "image16":"",
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
        "defaultImages": {
            "image1": "",
            "image2": "",
            "image3": "",
            "image4": "",
            "image5": "",
            "image6": "",
            "image7": "",
            "image8": "",
            "image9": "",
            "image10": "",
            "image11": "",
            "image12": "",
            "image13": "",
            "image14": "",
            "image15": "",
            "image16":"",
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
        "defaultImages": {
            "image1": "",
            "image2": "",
            "image3": "",
            "image4": "",
            "image5": "",
            "image6": "",
            "image7": "",
            "image8": "",
            "image9": "",
            "image10": "",
            "image11": "",
            "image12": "",
            "image13": "",
            "image14": "",
            "image15": "",
            "image16":"",
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
        "defaultImages": {
            "image1": "",
            "image2": "",
            "image3": "",
            "image4": "",
            "image5": "",
            "image6": "",
            "image7": "",
            "image8": "",
            "image9": "",
            "image10": "",
            "image11": "",
            "image12": "",
            "image13": "",
            "image14": "",
            "image15": "",
            "image16":"",
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