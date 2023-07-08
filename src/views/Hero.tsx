import ProductCard from "@/views/ProductCard";
import l1 from "/public/l1.webp";
import l2 from "/public/l2.webp";
import l3 from "/public/l3.webp";
import l4 from "/public/l4.webp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import girl from "/public/girl.webp";
import Image from "next/image";
import React from "react";
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <div className="mt-20">
      <section className="flex m-6 flex-col gap-y-3 lg:flex-row ">
        <div className="flex-1 flex-col md:flex-row items-center mt-8 space-y-10">
          <Badge className="py-2 px-4 rounded-lg bg-blue-200 text-blue-900 text-base font-bold hover:bg-blue-300">
            Sale 70%
          </Badge>

          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
            An Industrial Take on Streetwear{" "}
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6 font-medium ">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>

          <Button className="bg-black text-white mt-6" variant="outline">
            <ShoppingCart className="h-6 w-6 text-white mr-1" />
            Start Shopping
          </Button>
          <div className="flex  gap-8 mt-10 flex-col md:flex-row items-center">
            <Image src={l1} alt={"logo1"} />
            <Image src={l2} alt={"logo2"} />
            <Image src={l3} alt={"logo3"} />
            <Image src={l4} alt={"logo4"} />
          </div>
        </div>
        <div className=" flex-1">
          <Image
            src={girl}
            alt={"girl"}
            className="h-100 w-100 rounded-full bg-gray-200"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
