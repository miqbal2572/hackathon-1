import Image from "next/image";
import { products } from "@/lib/utaill/mockup";
import { StaticImageData } from "next/image";
import Quantity from "@/components/Quantity";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
const getProductDetails = (id: number | string) => {
  return products.filter((Product) => Product.id == id);
};

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductDetails(params.id);

  return (
    <div className="flex justify-evenly mt-10 py-10 flex-wrap">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6 flex-col md:flex-row items-center">
          <div>
            <Image src={product.image} alt={product.name} />
          </div>
          <div>
            <div>
              <h1 className="text-2xl">{product.name}</h1>
              <h2 className="text-base text-gray-300 font-semibold">
                {product.tagline}
              </h2>
            </div>
            <div>
              <h3 className="text-sm font-semibold mt-4">SELECT SIZE</h3>
            </div>
            <div className="flex space-x-4 mt-2">
              <div className="h-5 w-5 rounded-full border  hover:bg-shadow-xl duration-300 mt-2 flex justify-center items-center ">
                <span className=" font-semibold text-center text-gray-600">
                  XS
                </span>
              </div>
              <div className="h-5 w-5 rounded-full border  hover:bg-shadow-xl duration-300 mt-2 flex justify-center items-center ">
                <span className=" font-semibold text-center text-gray-600">
                  S
                </span>
              </div>
              <div className="h-5 w-5 rounded-full border  hover:bg-shadow-4xl duration-300 mt-2 flex justify-center items-center ">
                <span className=" font-semibold text-center text-gray-600">
                  M
                </span>
              </div>
              <div className="h-5 w-5 rounded-full border  hover:bg-shadow-xl duration-300 mt-2 flex justify-center items-center ">
                <span className=" font-semibold text-center text-gray-600">
                  L
                </span>
              </div>
            </div>
            <div className="flex gap-x-3 mt-3">
              <h3 className="text-semibold">Quantity :</h3>
              <Quantity />
            </div>
            <div>
              <Button className="bg-black text-white mt-4 " variant="outline">
                <ShoppingCart className="h-6 w-6 text-white mr-1" />
                Add Cart
              </Button>
              <p className="text-2xl font-bold mt-3">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
