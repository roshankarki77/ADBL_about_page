import Image from "next/image";
import React from "react";
import { TriangleRightIcon } from "@radix-ui/react-icons";


import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const SliderSection = () => {
  return (
    <>
      <div className="w-full h-48 md:h-[480px] relative">
        <Image
          src={"/images/slider-image.png"}
          alt="slider-image"
          layout="fill"
          objectFit="fill"
          priority={true}
        />
        <div className="bg-white w-96 h-64 absolute top-10 right-24 xl:w-[600px] 2xl:right-72 rounded-xl p-12 hidden md:block">
          <h2 className="mb-2 font-bold text-green-900 text-lg lg:text-xl xl:text-3xl">Agriculture & MSME Credit</h2>
          <p className="text-justify text-xl">
          बढ्दो जनसंख्या, आहार विहारको परिवर्तन, तीव्र गतिमा विकसित शहरीकरण जस्ता कारणबाट देशमा खाद्द सामग्रीहरुको माग दिनानुदिन बढिरहेको सर्वविदितै छ |
          </p>
          <Button className="mt-4 text-white bg-custom-red  rounded-3xl" variant={"destructive"}>
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
            <span>मौजुदा सूचीमा सूची दर्ता गराउने बारेको सूचना                      </span>
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
