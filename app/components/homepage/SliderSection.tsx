"use client";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRef } from "react";

import { BellIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

import Marquee from "react-fast-marquee";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";

interface SlickSlider {
  slickPrev(): void;
  slickNext(): void;
}

const sliderData = [
  {
    id: 1,
    title: "Agriculture & MSME Credit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    image: "/images/slider-image.png",
  },
  {
    id: 1,
    title: "Agriculture Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    image: "/images/slider-image.png",
  },
];
const SliderSection = () => {
  const slickRef = useRef<SlickSlider>(null);

  console.log("slick", slickRef);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleLeftClick = () => {
    slickRef.current?.slickPrev();
  };
  const handleRightClick = () => {
    slickRef?.current?.slickNext();
  };
  return (
    <>
      <Slider {...settings} ref={slickRef as React.RefObject<Slider>}>
        {sliderData?.map(({ id, title, description, image }) => (
          <div key={id} className="relative h-48 w-full md:h-[480px]">
            <Image
              src={image}
              alt="slider-image"
              layout="fill"
              className="object-cover  object-left md:object-center"
              priority={true}
            />
            <div className="absolute right-12 top-24 hidden h-56 w-96 rounded-xl bg-white px-12 pt-8 md:block xl:w-[500px] 2xl:right-72">
              <h2 className="mb-2 text-xl font-bold text-green-900 lg:text-xl xl:text-3xl">
                {title}
              </h2>
              <p className="te text-justify text-sm">{description}</p>

              <Button
                className="mt-4 h-7 rounded-3xl bg-custom-red p-4 text-xs text-white"
                variant={"destructive"}
              >
                Read more
                <TriangleRightIcon />
              </Button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
              <Button
                className="h-8 w-8 rounded-full bg-custom-light-green text-3xl text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                variant={"default"}
                size={"sm"}
                onClick={handleLeftClick}
              >
                <FaChevronLeft />
              </Button>

              <Button
                className="h-8 w-8 rounded-full bg-custom-light-green text-3xl text-white sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                variant={"default"}
                size={"sm"}
                onClick={handleRightClick}
              >
                <FaChevronRight />
              </Button>
            </div>
          </div>
        ))}
      </Slider>

      <div className="hidden h-10 bg-gray-300 sm:flex">
        <div className="mx-auto flex h-10 w-[95%] md:max-w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px] ">
          <div className="flex items-center">
            <div className="flex h-10 w-36 items-center space-x-2 bg-custom-green px-2 text-white">
              <BellIcon />
              <span className="text-sm">Recent Notice</span>
            </div>
          </div>
          <div className=" flex w-full items-center justify-center space-x-1 md:space-x-4">
            <Marquee>
              <span className="ml-4">
                मौजुदा सूचीमा सूची दर्ता गराउने बारेको सूचना{" "}
              </span>
              <span className="ml-4">/</span>
              <span className="ml-4">
                सिलवन्दी दरभाउपत्र स्वीकृत भएको सूचना
              </span>
              <span className="ml-4">/</span>
              <span className="ml-4">16th AGM Minute 2079 Chaitra 14</span>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderSection;
