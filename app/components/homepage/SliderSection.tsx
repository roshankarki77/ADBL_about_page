import Image from "next/image";
import React from "react";
import { TriangleRightIcon } from "@radix-ui/react-icons";


import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const SliderSection = () => {
  return (
    <>
      <div className="w-full h-48 md:h-80 relative">
        <Image
          src={"/images/slider-image.png"}
          alt="slider-image"
          layout="fill"
          objectFit="fill"
          priority={true}
        />
        <div className="bg-white w-96 h-64 absolute top-10 right-24 2xl:right-72 rounded-sm p-4 hidden md:block">
          <h2 className="mb-2 text-lg">Agriculture & MSME Credit</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            error consectetur vel excepturi exercitationem dolores ipsum debitis
            quae eaque earum, soluta id, neque, libero recusandae? Eos eveniet
            ipsam dolor amet.
          </p>
          <Button className="mt-2 text-white bg-red-600 rounded-md">
            Read more
            <TriangleRightIcon />
          </Button>
        </div>
      </div>
      <div className="h-10 bg-gray-300 hidden sm:flex">
        <div className="flex w-[85%] 2xl:max-w-[1320px] h-10 mx-auto ">
          <div className="flex items-center">
            <div className="bg-custom-green text-white px-2 space-x-2 flex items-center w-36 h-10">
              <BellIcon />
              <span className="text-sm">Recent Notice</span>
            </div>
          </div>
          <div className=" items-center space-x-1 flex md:space-x-4 w-full justify-center">
            <span>notice 1</span>
            <span>/</span>
            <span>notice 2</span>
            <span>/</span>
            <span>notice 3</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderSection;
