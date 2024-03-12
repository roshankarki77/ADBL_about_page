"use client";

import React from "react";
import Slider from "react-slick";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { OfferData,offerData } from "@/app/data/offers";

const OfferSection = () => {

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mx-auto my-8 max-w-[95%] md:max-w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px]">
      <h2 className="text-xl font-bold ">Offers for You</h2>


      <div className="mb-8 flex items-center justify-between">
        <p className="mt-0 max-w-96 pr-8 md:max-w-[1800px]">
          Explore and experience the ways we make your life better through our
          offerings
        </p>
        <div className="flex cursor-pointer justify-center items-center space-x-2 text-custom-red hover:text-custom-light-red">
          <span className="w-9 text-sm">View All</span>
          <DoubleArrowRightIcon className="m-0 p-0" />
        </div>
      </div>

      <div className="slider-container">
      <Slider {...settings}>
        {
          offerData.map((offer: OfferData, index: number) => (
            <div key={index} className="card transform border-none outline-none p-3">
              <div className="relative w-full  rounded-lg transform cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src={offer.img}
                  alt={offer.title}
                  width={300}
                  height={200}
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center  rounded-lg justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <p className="text-center text-lg text-white">
                    {offer.description}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-base">{offer.title}</p>
            </div>
          ))
        }
        
        </Slider>
    </div>
    </div>
  );
};

export default OfferSection;
