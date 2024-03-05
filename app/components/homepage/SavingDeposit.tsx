"use client";

import React from "react";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import Slider from "react-slick";

const SavingDeposit = () => {
  const slider = React.useRef<any>();
  let next = () => {
    slider.current.slickNext();
  };
  let previous = () => {
    slider.current.slickPrev();
  };
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   arrows: false,
  //   speed: 1500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   centerMode: true,
  //   autoplaySpeed: 7000,
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 2,
  //         centerMode:
  //           false /* set centerMode to false to show complete slide instead of 3 */,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         centerMode:
  //           false /* set centerMode to false to show complete slide instead of 3 */,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="mt-16">
        <div className="mx-auto w-[85%]">
          <h2 className="mt-8 text-2xl font-semibold">Saving and Deposit</h2>

          <div className="flex items-center justify-between">
            <p className="mt-4 text-sm text-[#666666]">
              Managing your personal finances and building a savings account is
              all about big picture and staying motivated
            </p>
            <div className="flex cursor-pointer items-center space-x-2 pt-2 text-custom-red hover:text-custom-light-red">
              <span>View All</span>
              <DoubleArrowRightIcon />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 ">
            <div className="relative">
              <img
                src={"/images/kisan2.webp"}
                alt="saving image"
                // width={300}
                // height={600}
                className="w-full rounded-lg"
              />
              <div className="absolute -bottom-4 right-8 w-44 rounded bg-white p-2 text-center shadow-sm shadow-slate-400 ">
                BalBachat Khata
              </div>
            </div>

            <div className="relative">
              <Image
                src={"/images/kisan2.webp"}
                alt="saving image"
                width={300}
                height={600}
                className="w-full rounded-lg"
              />
              <div className="absolute -bottom-4 right-8 w-44 rounded bg-custom-green p-2 text-center text-white shadow-sm shadow-slate-400">
                BalBachat Khata
              </div>

              <div className="absolute right-2 top-2 w-16  rounded bg-custom-green p-2 text-center text-white shadow-sm">
                9.85% P.A
              </div>
            </div>

            <div className="relative bg-red-600">
              <Image
                src={"/images/kisan2.webp"}
                alt="saving image"
                width={300}
                height={600}
                className="w-full rounded-lg"
              />
              <div className="absolute -bottom-4 right-8 w-44 rounded bg-white p-2 text-center shadow-sm shadow-slate-400 ">
                BalBachat Khata
              </div>
            </div>

            <div className="relative">
              <Image
                src={"/images/kisan2.webp"}
                alt="saving image"
                width={300}
                height={600}
                className="w-full rounded-lg"
              />
              <div className="absolute -bottom-4 right-8 w-44 rounded bg-white p-2 text-center shadow-sm shadow-slate-400 ">
                BalBachat Khata
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SavingDeposit;
