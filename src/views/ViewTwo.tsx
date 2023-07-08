import Image from "next/image";
import banner from "/public/banner.png";
import React from "react";
import { Button } from "@/components/ui/button";

const ViewTwo = () => {
  return (
    <div>
      <div className="mt-30">
        <Image src={banner} alt={"banner"} className="mt-36" />
        <div className="mt-40">
          <div className="text-4xl font-bold text-center space-b-10 relative z-1 top-10">
            Subscribe Our Newsletter
          </div>
          <div className="text-9xl font-extrabold text-center text-gray-100">
            Newsletter
          </div>
          <div className="text-lg text-center relative z-1 bottom-20">
            Get the latest information and promo offers directly
          </div>
        </div>

        <div className="flex w-full md:justify-center justify-center mb-6">
          <div className="relative mr-4 md:w-full lg:w-full xl:w-1/4	w-2/4 z-1 bottom-16 ">
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              className="w-full h-9 bg-gray-100 rounded border bg-opacity-100 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <Button className=" h-9 relative z-1 bottom-16 " variant="outline">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewTwo;
