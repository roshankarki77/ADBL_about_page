"use client";
import Image from "next/image";
import React from "react";
import { TriangleRightIcon } from "@radix-ui/react-icons";

import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { SlArrowRight } from "react-icons/sl";

import Slider from "react-slick";

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
      <div className="relative h-48 w-full md:h-[480px]">
        <Image
            src={"/images/slider-image.png"}
            alt="slider-image"
            layout="fill"
            objectFit="fill"
            priority={true}
          />
          <div className="absolute right-24 top-10 hidden h-64 w-96 rounded-xl bg-white p-12 md:block xl:w-[600px] 2xl:right-72">
            <h2 className="mb-2 text-lg font-bold text-green-900 lg:text-xl xl:text-3xl">
              Agriculture & MSME Credit
            </h2>
            <p className="text-justify text-xl">
              बढ्दो जनसंख्या, आहार विहारको परिवर्तन, तीव्र गतिमा विकसित शहरीकरण
              जस्ता कारणबाट देशमा खाद्द सामग्रीहरुको माग दिनानुदिन बढिरहेको
              सर्वविदितै छ |
            </p>
            <Button
              className="mt-4 rounded-3xl bg-custom-red  text-white"
              variant={"destructive"}
            >
              Read more
              <TriangleRightIcon />
            </Button>
          </div>

          <div className="">

          </div>
      </div>

      <div className="relative h-48 w-full md:h-[480px]">
        <Image
            src={"/images/slider-image.png"}
            alt="slider-image"
            layout="fill"
            objectFit="fill"
            priority={true}
          />
          <div className="absolute right-24 top-10 hidden h-64 w-96 rounded-xl bg-white p-12 md:block xl:w-[600px] 2xl:right-72">
            <h2 className="mb-2 text-lg font-bold text-green-900 lg:text-xl xl:text-3xl">
              Agriculture & MSME Credit
            </h2>
            <p className="text-justify text-xl">
              बढ्दो जनसंख्या, आहार विहारको परिवर्तन, तीव्र गतिमा विकसित शहरीकरण
              जस्ता कारणबाट देशमा खाद्द सामग्रीहरुको माग दिनानुदिन बढिरहेको
              सर्वविदितै छ |
            </p>
            <Button
              className="mt-4 rounded-3xl bg-custom-red  text-white"
              variant={"destructive"}
            >
              Read more
              <TriangleRightIcon />
            </Button>
          </div>
      </div>

      <SlArrowRight />
      </Slider>
   
      <div className="hidden h-10 bg-gray-300 sm:flex">
        <div className="mx-auto flex h-10 w-[85%] 2xl:max-w-[1320px] ">
          <div className="flex items-center">
            <div className="flex h-10 w-36 items-center space-x-2 bg-custom-green px-2 text-white">
              <BellIcon />
              <span className="text-sm">Recent Notice</span>
            </div>
          </div>
          <div className=" flex w-full items-center justify-center space-x-1 md:space-x-4">
            <span>मौजुदा सूचीमा सूची दर्ता गराउने बारेको सूचना </span>
            <span>/</span>
            <span>सिलवन्दी दरभाउपत्र स्वीकृत भएको सूचना</span>
            <span>/</span>
            <span>16th AGM Minute 2079 Chaitra 14</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderSection;
