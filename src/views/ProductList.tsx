import Link from "next/link";
import React from "react";
import ProductCard from "@/views/ProductCard";
import { products } from "@/lib/utaill/mockup";
import { StaticImageData } from "next/image";
const ProductList = () => {
  const productsChecks = products.slice(0, 3);

  return (
    <div>
      <div className="mt-40">
        <p className="text-center text-sky-500 text-lg font-semibold ">
          PRODUCTS
        </p>
        <p className="text-center font-bold text-3xl">Check What We Have</p>
      </div>
      <div className="flex justify-evenly mt-10 flex-col md:flex-row items-center ">
        {productsChecks.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            Image={product.image as StaticImageData}
            category={product.category}
            id={product.id}

          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
