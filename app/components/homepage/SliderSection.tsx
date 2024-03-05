import Image from "next/image";
import React from "react";

import { BellIcon } from "@radix-ui/react-icons";

const SliderSection = () => {
  return (
    <>
      <div className="w-full h-80 relative">
        <Image
          src={"/images/slider-image.png"}
          alt="slider-image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
        <div className="bg-white w-96 h-52 absolute top-10 right-24 rounded-sm p-4">
          <h2 className="mb-2 text-lg">Agriculture & MSME Credit</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            error consectetur vel excepturi exercitationem dolores ipsum debitis
            quae eaque earum, soluta id, neque, libero recusandae? Eos eveniet
            ipsam dolor amet.
          </p>
        </div>
      </div>
      <div className="h-10 bg-gray-300">
        <div className="flex w-[85%] h-10 mx-auto ">
          <div className="flex items-center">
            <div className="bg-custom-green text-white px-2 space-x-2 flex items-center w-36 h-10">
              <BellIcon />
              <span className="text-sm">Recent Notice</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full justify-center">
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
