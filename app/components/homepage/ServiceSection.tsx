import React from "react";

import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";

const ServiceSection = () => {
  return (
    <section className=" pb-8  bg-[#F5FFEF] ">
      <div className="w-[95%] md:w-[85%] mx-auto pt-8 2xl:max-w-[1320px]">
        <h2 className="text-xl font-semibold">ADBL Services</h2>
        <div className="flex items-center justify-between">
          <p className="mt-2 text-sm text-slate-500 pr-4 ">
            Digital banking enables a bank's customers to access banking
            products and services via an electronic/online platform
          </p>
          <div className="flex items-center space-x-2 text-custom-red cursor-pointer hover:text-custom-light-red">
            <span>View All</span>
            <DoubleArrowRightIcon />
          </div>
        </div>

        <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 ">
          <div className="h-60  rounded-lg p-4 bg-white relative">
            <h2 className="text-custom-green text-xl mt-8">Mobile Banking</h2>
            <p className="text-sm text-gray-500 mt-2">
              ADBL Smart is ADBL's Offical Mobile Banking App.Enjoy easy banking
              from your hand held devices,from anywhere anytime.
            </p>

            <div className="flex text-custom-red mt-8 items-center space-x-2 hover:text-custom-light-red cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong />
            </div>
            <span className="absolute -top-6 left-4 rounded-full p-4 bg-white border-2 text-3xl">
              <MdPhoneAndroid />
            </span>
          </div>

          <div className="h-60  rounded-lg p-4 bg-white  relative">
            <h2 className="text-custom-green text-xl mt-8">Mobile Banking</h2>
            <p className="text-sm text-gray-500 mt-2">
              ADBL Smart is ADBL's Offical Mobile Banking App.Enjoy easy banking
              from your hand held devices,from anywhere anytime.
            </p>

            <div className="flex text-custom-red mt-8 items-center space-x-2 hover:text-custom-light-red cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong />
            </div>

            <span className="absolute -top-6 left-4 rounded-full p-4 bg-white border-2 text-3xl">
              <MdPhoneAndroid />
            </span>
          </div>

          <div
            className="h-60 rounded-lg p-4 bg-white 
         relative"
          >
            <h2 className="text-custom-green text-xl mt-8">Mobile Banking</h2>
            <p className="text-sm text-gray-500 mt-2">
              ADBL Smart is ADBL's Offical Mobile Banking App.Enjoy easy banking
              from your hand held devices,from anywhere anytime.
            </p>

            <div className="flex text-custom-red mt-8 items-center space-x-2 hover:text-custom-light-red cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong />
            </div>

            <span className="absolute -top-6 left-4 rounded-full p-4 bg-white border-2 text-3xl">
              <MdPhoneAndroid />
            </span>
          </div>

          <div className="h-60  rounded-lg p-4 bg-white   relative">
            <h2 className="text-custom-green text-xl mt-8">Mobile Banking</h2>
            <p className="text-sm text-gray-500 mt-2">
              ADBL Smart is ADBL's Offical Mobile Banking App.Enjoy easy banking
              from your hand held devices,from anywhere anytime.
            </p>

            <div className="flex text-custom-red mt-8 items-center space-x-2 hover:text-custom-light-red cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong />
            </div>

            <span className="absolute -top-6 left-4 rounded-full p-4 bg-white border-2 text-3xl">
              <MdPhoneAndroid />
            </span>
          </div>

          <div className="h-60  rounded-lg p-4 bg-white  relative">
            <h2 className="text-custom-green text-xl mt-8">Mobile Banking</h2>
            <p className="text-sm text-gray-500 mt-2">
              ADBL Smart is ADBL's Offical Mobile Banking App.Enjoy easy banking
              from your hand held devices,from anywhere anytime.
            </p>

            <div className="flex text-custom-red mt-8 items-center space-x-2 hover:text-custom-light-red cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong />
            </div>

            <span className="absolute -top-6 left-4 rounded-full p-4 bg-white border-2 text-3xl">
              <MdPhoneAndroid />
            </span>
          </div>

          <div className="h-60  rounded-lg p-4 bg-white  relative">
            <h2 className="text-custom-green text-xl mt-8">Mobile Banking</h2>
            <p className="text-sm text-gray-500 mt-2">
              ADBL Smart is ADBL's Offical Mobile Banking App.Enjoy easy banking
              from your hand held devices,from anywhere anytime.
            </p>

            <div className="flex text-custom-red mt-8 items-center space-x-2 hover:text-custom-light-red cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong />
            </div>

            <span className="absolute -top-6 left-4 rounded-full p-4 bg-white border-2 text-3xl">
              <MdPhoneAndroid />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
