import Bags from '../assets/Bags.png'
import Casual_Wear from '../assets/Casual Wear.png'
import Ethnic_Wear from '../assets/Ethnic wear.png'
import Flip_Flops from '../assets/Flip-Flops.png'
import Grooming from '../assets/Grooming.png'
import Men_Footwear from '../assets/Men Footwear.png'
import Trolleys from '../assets/Trolleys.png'
import Makeup from '../assets/Makeup.png'

interface Product {
    id : number,
    name : string,
    image : string,
    description : string,
    price : number
}

export const productDetails : Product[] = [
    {
        id:1,
        name:"Bags",
        description:"",
        price:700,
        image:Bags
    },
    {
        id:2,
        name:"Casual Wear",
        description:"",
        price:500,
        image:Casual_Wear
    },
    {
        id:3,
        name:"Ethnic Wear",
        description:"",
        price:650,
        image:Ethnic_Wear
    },
    {
        id:4,
        name:"Flip Flops",
        description:"",
        price:230,
        image:Flip_Flops
    },
    {
        id:5,
        name:"Grooming",
        description:"",
        price:450,
        image:Grooming
    },
    {
        id:6,
        name:"Men's Footwear",
        description:"",
        price:700,
        image:Men_Footwear
    },
    {
        id:7,
        name:"Trolleys",
        description:"",
        price:2500,
        image:Trolleys
    },
    {
        id:8,
        name:"Beauty & Makeup",
        description:"",
        price:1000,
        image:Makeup
    },
];

