import { Product } from "./types";
import girl1 from "/public/girl1.png";
import girl2 from "/public/girl2.webp";
import girl3 from "/public/girl3.png";
import boy from "/public/boy.webp";
import girl4 from "/public/girl4.webp";
import kids from "/public/kids.webp";

export const products: Product[] = [
  {
    id: 1,
    name: "Raglan Sweatshirt",
    tagline: "Dress",
    category: "Female",
    price: 195,
    image: girl1,
  },
  {
    id: 2,
    name: "Brushed Bomber",
    tagline: "Dress",
    category: "Female",
    price: 200,
    image: girl2,
  },
  {
    id: 3,
    name: "Muscle Tank",
    tagline: "Dress",
    category: "Female",
    price: 75,
    image: girl3,
  },
  {
    id: 4,
    name: "Flex Push Button Bomber",
    category: "Male",
    tagline: "Dress",
    price: 150,
    image: boy,
  },
  {
    id: 5,
    name: "Brushed Bomber",
    tagline: "Dress",
    category: "Female",
    price: 225,
    image: girl4,
  },
  {
    id: 6,
    name: "T-SHIRT CHARACTER - BLUE",
    category: "Kids",
    tagline: "Dress",
    price: 20,
    image: kids,
  },
];
