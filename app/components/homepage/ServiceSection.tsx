"use client";
import React from "react";
import { useEffect } from "react";


import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdPhoneAndroid } from "react-icons/md";
import Slider from "react-slick";
import { useRef } from "react";
import { ServiceData, serviceData } from "@/app/data/services";
import { Button } from "../ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import 'animate.css';

interface SlickSlider {
  slickPrev(): void;
  slickNext(): void;
}

const ServiceSection = () => {
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
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 590,
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

  const isServer = typeof window === "undefined";
  const WOW = !isServer ? require("wowjs") : null;
  useEffect(() => {
    new WOW.WOW({
      live: true,
    }).init();
  }, []);

  return (
    <section className=" bg-[#F5FFEF]  pb-8 ">
      <div className="mx-auto w-[95%] pt-4 md:w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px] animate__animated animate__fadeInUp">
        <h2 className="text-xl font-semibold">ADBL Services</h2>
        <div className="flex items-center justify-between">
          <p className="mt-2 pr-4 text-sm text-slate-500 ">
            Digital banking enables a bank's customers to access banking
            products and services via an electronic/online platform
          </p>
          <div className="flex cursor-pointer items-center space-x-2 text-custom-red hover:text-custom-light-red">
            <span>View All</span>
            <DoubleArrowRightIcon />
          </div>
        </div>

        <div className="slider-container relative wow animate__animated animate__fadeInUp animate__slow ">
          <Button
            className="absolute -left-1 top-[53%] z-10 h-5 w-5 -translate-y-1/2 transform animate-pulse rounded-full bg-custom-light-green p-0 text-3xl text-white xl:-left-8 xl:h-8 xl:w-8"
            variant={"default"}
            size={"sm"}
            onClick={handleLeftClick}
          >
            <FaChevronLeft className="h-3" />
          </Button>
          <Button
            className="absolute -right-1 top-[53%] z-10 h-5 w-5 -translate-y-1/2 transform animate-pulse rounded-full bg-custom-light-green p-0 text-3xl text-white xl:-right-8 xl:h-8 xl:w-8"
            variant={"default"}
            size={"sm"}
            onClick={handleRightClick}
          >
            <FaChevronRight className="h-3" />
          </Button>
          <Slider
            {...settings}
            ref={slickRef as React.RefObject<Slider>}
            className="mb-4"
          >
            {serviceData.map((service: ServiceData, index: number) => (
              <div
                key={index}
                className="relative h-[310px]  rounded-lg bg-[#F5FFEF] p-2 pb-4 pt-12"
              >
                <div className="relative rounded-lg bg-white p-4 pb-8 pt-4 shadow-md">
                  <span className="absolute bottom-[85%] rounded-full bg-white p-4 text-3xl shadow-md">
                    <MdPhoneAndroid />
                  </span>
                  <h2 className="mt-8 text-xl text-custom-green">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                  <div className="mt-8 flex cursor-pointer items-center space-x-2 text-custom-red hover:text-custom-light-red">
                    <span>Read More</span>
                    <FaArrowRightLong />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
