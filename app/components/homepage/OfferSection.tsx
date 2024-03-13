"use client";

import React from "react";
import Slider from "react-slick";
import { useRef } from "react";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { OfferData, offerData } from "@/app/data/offers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface SlickSlider {
  slickPrev(): void;
  slickNext(): void;
}

const OfferSection = () => {
  const slickRef = useRef<SlickSlider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleLeftClick = () => {
    slickRef.current?.slickPrev();
  };
  const handleRightClick = () => {
    slickRef?.current?.slickNext();
  };

  return (
    <div className="mx-auto my-8 max-w-[95%] md:max-w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px]">
      <h2 className="text-xl font-bold ">Offers for You</h2>

      <div className="mb-8 flex items-center justify-between">
        <p className="mt-0 max-w-96 pr-8 md:max-w-[1800px]">
          Explore and experience the ways we make your life better through our
          offerings
        </p>
        <div className="flex cursor-pointer items-center justify-center space-x-2 text-custom-red hover:text-custom-light-red">
          <span className="w-9 text-sm">View All</span>
          <DoubleArrowRightIcon className="m-0 p-0" />
        </div>
      </div>

      <div className="slider-container relative">
        <Button
          className="absolute left-0 top-[47%] z-10 h-5 w-5 -translate-y-1/2 transform animate-pulse rounded-full bg-custom-light-green p-0 text-3xl text-white xl:-left-6 xl:h-8 xl:w-8"
          variant={"default"}
          size={"sm"}
          onClick={handleLeftClick}
        >
          <FaChevronLeft className="h-3" />
        </Button>
        <Button
          className="absolute right-0 top-[47%] z-10 h-5 w-5 -translate-y-1/2 transform animate-pulse rounded-full bg-custom-light-green p-0 text-3xl  text-white xl:-right-6 xl:h-8 xl:w-8"
          variant={"default"}
          size={"sm"}
          onClick={handleRightClick}
        >
          <FaChevronRight className="h-3" />
        </Button>
        <Slider {...settings} ref={slickRef as React.RefObject<Slider>}>
          {offerData.map((offer: OfferData, index: number) => (
            <div
              key={index}
              className="card transform border-none p-3 outline-none"
            >
              <div className="relative w-full  transform cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src={offer.img}
                  alt={offer.title}
                  width={300}
                  height={200}
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center  justify-center rounded-lg bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <p className="text-center text-lg text-white">
                    {offer.description}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-base">{offer.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OfferSection;
