import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Link from "next/link";


const ProductCard = (props: {
  title: string;
  price: number;
  Image: StaticImageData;
  category:string
  id:number
}) => {
  return (
    <Link href={`/products/${props.id}`}>
    <div className="py-5 ">
      <Image src={props.Image} alt={"product"} height={350}/>
      <h3 className="font-bold text-lg mt-2">{props.title}</h3>
      <p className="font-bold text-lg">${props.price}</p>
      <p className="font-bold text-lg">Category <span className="text-base font-normal">{props.category}</span></p>

    </div>
    </Link>
  );
};

export default ProductCard;
