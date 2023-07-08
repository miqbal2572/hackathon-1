import React from "react";
import Image from "next/image";
import viewOne from "/public/viewOne.png";
import viewTwo from "/public/viewTwo.png";
import banner from "/public/banner.png"

const ViewOne = () => {
  return (
    <div>
    <div className="mt-40">
      <p className="text-center text-sky-500 text-lg font-semibold">
        PROMOTIONS
      </p>
      <p className="text-center font-bold text-3xl">Our Promotions Events</p>
      <div className="  flex space-x-7 flex-col md:flex-row items-center">
        <Image src={viewOne} alt={"viewOne"} className="mt-10" />
        <Image src={viewTwo} alt={"viewTwo"} className="mt-10" />
      </div>
    </div>
    </div>
    
  );
};

export default ViewOne;
