"use client"
import React from "react";

import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";
import Slider from "react-slick";

const ServiceSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className=" pb-8  bg-[#F5FFEF] ">
      <div className="w-[95%] md:w-[90%] mx-auto pt-4 lg:max-w-[85%] 2xl:max-w-[1320px]">
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

        <div className="slider-container">
      <Slider {...settings} className="mb-4">
          <div className="h-[300px] bg-[#F5FFEF]  rounded-lg p-2 pt-12 pb-4 relative">
            <div className="relative pt-4 pb-8 p-4 bg-white rounded-lg shadow-md">
            <span className="absolute bottom-[85%] rounded-full p-4 bg-white text-3xl shadow-md">
              <MdPhoneAndroid />
            </span>
            <h2 className="text-custom-green text-xl mt-8">Mobile Banking</h2>
            <p className="text-sm text-gray-500 mt-2">
              ADBL Smart is ADBL's Offical Mobile Banking App.Enjoy easy banking
              from your hand held devices,from anywhere anytime.
            </p>

            <div className="flex text-custom-red mt-8 items-center space-x-2 hover:text-custom-light-red cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong />
            </div>
            </div>
          </div>
          <div className="h-[300px] bg-[#F5FFEF]  rounded-lg p-2 pt-12 pb-4 relative">
            <div className="relative pt-4 pb-8 p-4 bg-white rounded-lg shadow-md">
            <span className="absolute bottom-[85%] rounded-full p-4 bg-white text-3xl shadow-md">
              <MdPhoneAndroid />
            </span>
            <h2 className="text-custom-green text-xl mt-8">Mobile Banking</h2>
            <p className="text-sm text-gray-500 mt-2">
              ADBL Smart is ADBL's Offical Mobile Banking App.Enjoy easy banking
              from your hand held devices,from anywhere anytime.
            </p>

            <div className="flex text-custom-red mt-8 items-center space-x-2 hover:text-custom-light-red cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong />
            </div>
            </div>
          </div>
          <div className="h-[300px] bg-[#F5FFEF]  rounded-lg p-2 pt-12 pb-4 relative">
            <div className="relative pt-4 pb-8 p-4 bg-white rounded-lg shadow-md">
            <span className="absolute bottom-[85%] rounded-full p-4 bg-white text-3xl shadow-md">
              <MdPhoneAndroid />
            </span>
            <h2 className="text-custom-green text-xl mt-8">Mobile Banking</h2>
            <p className="text-sm text-gray-500 mt-2">
              ADBL Smart is ADBL's Offical Mobile Banking App.Enjoy easy banking
              from your hand held devices,from anywhere anytime.
            </p>

            <div className="flex text-custom-red mt-8 items-center space-x-2 hover:text-custom-light-red cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong />
            </div>
            </div>
          </div>
          <div className="h-[300px] bg-[#F5FFEF]  rounded-lg p-2 pt-12 pb-4 relative">
            <div className="relative pt-4 pb-8 p-4 bg-white rounded-lg shadow-md">
            <span className="absolute bottom-[85%] rounded-full p-4 bg-white text-3xl shadow-md">
              <MdPhoneAndroid />
            </span>
            <h2 className="text-custom-green text-xl mt-8">Mobile Banking</h2>
            <p className="text-sm text-gray-500 mt-2">
              ADBL Smart is ADBL's Offical Mobile Banking App.Enjoy easy banking
              from your hand held devices,from anywhere anytime.
            </p>

            <div className="flex text-custom-red mt-8 items-center space-x-2 hover:text-custom-light-red cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong />
            </div>
            </div>
          </div>
          <div className="h-[300px] bg-[#F5FFEF]  rounded-lg p-2 pt-12 pb-4 relative">
            <div className="relative pt-4 pb-8 p-4 bg-white rounded-lg shadow-md">
            <span className="absolute bottom-[85%] rounded-full p-4 bg-white text-3xl shadow-md">
              <MdPhoneAndroid />
            </span>
            <h2 className="text-custom-green text-xl mt-8">Mobile Banking</h2>
            <p className="text-sm text-gray-500 mt-2">
              ADBL Smart is ADBL's Offical Mobile Banking App.Enjoy easy banking
              from your hand held devices,from anywhere anytime.
            </p>

            <div className="flex text-custom-red mt-8 items-center space-x-2 hover:text-custom-light-red cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong />
            </div>
            </div>
          </div>
          <div className="h-[300px] bg-[#F5FFEF]  rounded-lg p-2 pt-12 pb-4 relative">
            <div className="relative pt-4 pb-8 p-4 bg-white rounded-lg shadow-md">
            <span className="absolute bottom-[85%] rounded-full p-4 bg-white text-3xl shadow-md">
              <MdPhoneAndroid />
            </span>
            <h2 className="text-custom-green text-xl mt-8">Mobile Banking</h2>
            <p className="text-sm text-gray-500 mt-2">
              ADBL Smart is ADBL's Offical Mobile Banking App.Enjoy easy banking
              from your hand held devices,from anywhere anytime.
            </p>

            <div className="flex text-custom-red mt-8 items-center space-x-2 hover:text-custom-light-red cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong />
            </div>
            </div>
          </div>
          
          </Slider>
    </div>
      </div>
    </section>
  );
};

export default ServiceSection;