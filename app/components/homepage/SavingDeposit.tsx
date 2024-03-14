"use client";

import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { SavingData, savingData } from "@/app/data/savings";
import Slider from "react-slick";
import { Button } from "../ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import 'animate.css';

interface SlickSlider {
  slickPrev(): void;
  slickNext(): void;
}

const SavingDeposit = () => {
  const slider = React.useRef<any>();

  let next = () => {
    slider.current.slickNext();
  };
  let previous = () => {
    slider.current.slickPrev();
  };

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

  const isServer = typeof window === "undefined";
  const WOW = !isServer ? require("wowjs") : null;
  useEffect(() => {
    new WOW.WOW({
      live: true,
    }).init();
  }, []);
  return (
    <>
      <section className="mb-16 mt-4">
        <div className="mx-auto w-[95%] md:w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px] wow animate__animated animate__fadeInUp">
          <h2 className=" text-2xl font-semibold">Saving and Deposit</h2>

          <div className="flex items-center justify-between">
            <p className=" pr-4 text-sm text-[#666666]">
              Managing your personal finances and building a savings account is
              all about big picture and staying motivated
            </p>
            <div className="flex cursor-pointer items-center space-x-2 pt-2 text-custom-red hover:text-custom-light-red">
              <span>View All</span>
              <DoubleArrowRightIcon />
            </div>
          </div>

          <div className="slider-container relative wow animate__animated animate__fadeInUp animate__slow ">
            <Button
              className="absolute -left-2 top-[48%] z-10 h-5 w-5 -translate-y-1/2 transform animate-pulse rounded-full bg-custom-light-green p-0 text-3xl text-white xl:-left-8 xl:h-8 xl:w-8"
              variant={"default"}
              size={"sm"}
              onClick={handleLeftClick}
            >
              <FaChevronLeft className="h-3" />
            </Button>
            <Button
              className="absolute -right-2 top-[48%] z-10 h-5 w-5 -translate-y-1/2 transform animate-pulse rounded-full bg-custom-light-green p-0 text-3xl text-white xl:-right-8 xl:h-8 xl:w-8"
              variant={"default"}
              size={"sm"}
              onClick={handleRightClick}
            >
              <FaChevronRight className="h-3" />
            </Button>
            <Slider
              {...settings}
              ref={slickRef as React.RefObject<Slider>}
              className="w-full "
            >
              {savingData.map((data: SavingData, index: number) => (
                <div key={index} className="relative mt-1 p-1 pb-4">
                  <Image
                    src={data.image}
                    alt="saving image"
                    width={300}
                    height={600}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute -bottom-1 left-0 right-0 mx-auto w-44 rounded bg-white p-2 text-center shadow-sm shadow-slate-400">
                    {data.title}
                  </div>
                  <div className="absolute right-2 top-2 w-16  rounded bg-custom-green p-2 text-center text-white shadow-sm">
                    9.85% P.A
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default SavingDeposit;
