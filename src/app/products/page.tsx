import Link from "next/link";
import React from "react";
import { products } from "@/lib/utaill/mockup";
import ProductCard from "@/views/ProductCard";
import { StaticImageData } from "next/image";

const Products = () => {
  return (
    <div className="flex justify-evenly mt-10 py-10 flex-wrap flex-col md:flex-row items-center ">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price}
          Image={product.image as StaticImageData}
          category={product.category}
          id={product.id}

        />
      ))}
      ;
    </div>
  );
};

export default Products;
