import React from "react";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const OfferSection = () => {
  return (
    <div className="mx-auto mt-12 max-w-[95%] md:max-w-[85%] 2xl:max-w-[1320px]">
      <h2 className="text-2xl font-bold ">Offers for You</h2>

      <div className="mb-8 flex items-center justify-between">
        <p className="mt-4 max-w-96 md:max-w-[1800px] pr-8">
          Explore and experience the ways we make your life better through our
          offerings
        </p>
        <div className="flex cursor-pointer items-center space-x-2 text-custom-red hover:text-custom-light-red">
          <span>View All</span>
          <DoubleArrowRightIcon />
        </div>
      </div>

      <div className="grid-col-1 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card border-none  outline-none ">
          <div className="relative w-full">
            <img
              src={"/images/nari-bachat.png"}
              alt="nari bachat"
            />
          </div>
          <p className="mt-2 text-base">
            Special discount offer on the occasion of Teej Festival
          </p>
        </div>
        <div className="card overflow-hidden border-none outline-none">
          <div className="relative ">
            <img src={"/images/img2.png"} alt="nari bachat"  />
          </div>
          <p className="mt-2 text-base">
            Easy fund transfer send and received via ADBL Smart Banking
          </p>
        </div>
        <div className="card overflow-hidden border-none outline-none">
          <div className="relative ">
            <img src={"/images/img3.png"} alt="nari bachat"  />
          </div>
          <p className="mt-2 text-base">
            ADBL offers personal auto loan at Auto Nada Show
          </p>
        </div>
        <div className="card overflow-hidden border-none outline-none">
          <div className="relative ">
            <img src={"/images/img3.png"} alt="nari bachat"  />
          </div>
          <p className="mt-2 text-base">
            Smart way to send and receive money from world wide
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default OfferSection;
