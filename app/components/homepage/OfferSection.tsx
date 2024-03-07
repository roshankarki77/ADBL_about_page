import React from "react";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const OfferSection = () => {
  return (
    <div className="mx-auto my-8 max-w-[95%] md:max-w-[90%] 2xl:max-w-[1320px]">
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

      <div className="grid-col-1 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card transform border-none outline-none ">
          <div className="relative w-full transform cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              className="w-full"
              src={"/images/nari-bachat.png"}
              alt="nari bachat"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="text-center text-lg text-white">
                Special discount offer on the occasion of Teej Festival
              </p>
            </div>
          </div>
          <p className="mt-2 text-base">Nari Bachaat</p>
        </div>

        <div className="card transform border-none outline-none ">
          <div className="relative w-full transform cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              className="w-full"
              src={"/images/img2.png"}
              alt="nari bachat"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="text-center text-lg text-white">
                Easy fund transfer send and received via ADBL Smart Banking
              </p>
            </div>
          </div>
          <p className="mt-2 text-base">ADBL Smart Banking</p>
        </div>

        <div className="card transform border-none outline-none ">
          <div className="relative w-full transform cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              className="w-full"
              src={"/images/img3.png"}
              alt="nari bachat"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="text-center text-lg text-white">
                ADBL offers personal auto loan at Auto Nada Show
              </p>
            </div>
          </div>
          <p className="mt-2 text-base">Personal Auto Loan</p>
        </div>

        <div className="card transform border-none outline-none ">
          <div className="relative w-full transform cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              className="w-full"
              src={"/images/img4.png"}
              alt="nari bachat"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="text-center text-lg text-white">
                Smart way to send and receive money from world wide
              </p>
            </div>
          </div>
          <p className="mt-2 text-base">ADBL Money Transfer</p>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
