import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../../public/Logo.webp";
import React from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-black body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center space-y-2">
        <Link href={"/"}><Image src={Logo} alt={"Logo"} /></Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-6 font-lg text-lg text-black " href={"/category/Male"}>Male</Link>
          <Link className="mr-6 font-lg text-lg text-black" href={"/category/Female"}>Female</Link>
          <Link className="mr-6 font-lg text-lg text-black" href={"/category/Kids"}>Kids</Link>
          <Link className="mr-6 font-lg text-lg text-black" href={"/products"}>All Products</Link>
        </nav>
        <div>
          <form className="flex items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300   text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block rounded h-8 w-full pl-32  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="What you Looking for..."
              />
            </div>
            <button
              type="submit"
              className="p-2.5  text-sm font-medium text-black  rounded-sm border  hover:bg-gry-400  focus:outline-none   "
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        <Button className="ml-5 mr-5 h-9 " variant="outline">
          Sign in
        </Button>
        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center mr-4">
          <ShoppingCart className="h-6 w-6 " />
        </div>
      </div>
    </header>
  );
};

export default Header;
