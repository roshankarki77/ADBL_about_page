import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex mt-24 px-8 justify-center flex-col  flex-wrap lg:flex-row ">
      <div className="flex flex-col flex-wrap md:justify-center  lg:flex-row lg:mr-4">
        <div className=" flex flex-col md:justify-center md:flex-row">
          <div className="min-w-[230px] lg:mx-9">
            <div className="font-bold text-xl text-green-600 mb-3">
              About Us
            </div>
            <div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Introduction
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Organizational Structure
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Capital Ownership Structure
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Board of Directors
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Management Team
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Department Head
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Financial Literacy Program
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Customer Care and Support
              </div>
            </div>
          </div>
          <div className="mb-6 min-w-[230px] lg:mx-8 ">
            <div className="font-bold text-xl text-green-600 mb-3">
              Reports & Rates
            </div>
            <div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Annual Reports
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Quarterly Reports
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Basel Reports
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Interest Rate
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Base Rate
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Spread Rate
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Foreign Exchange Rates
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Service Charges
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col  md:flex-row md:justify-center">
          <div className="mb-6 md:min-w-[230px]  xl:min-w-[190px] lg:mx-8 ">
            <div className="font-bold text-xl text-green-600 mb-3">
              News & Media
            </div>
            <div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                News & Events
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Notices
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Articles
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Photo Gallery
              </div>
              <div className="text-stone-500 font-medium text-base mb-3  hoverTextGreenEffect hover:cursor-pointer">
                Video Gallery
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                CSR
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Downloads
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                ADBL Projects
              </div>
            </div>
          </div>
          <div className="mb-6 md:min-w-[230px]  xl:min-w-[180px] lg:mx-8 ">
            <div className="font-bold text-xl text-green-600 mb-3">
              Quick Links
            </div>
            <div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Branches
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                ATM Location
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Extension Counters
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                EMI Calculator
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Career Notice
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Syllabus
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Online Job Apply
              </div>
              <div className="text-stone-500 font-medium text-base mb-3 hoverTextGreenEffect hover:cursor-pointer">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-24">
        <div className="bg-green-700 p-6 rounded-xl">
          <div>
            <div className="flex mb-4">
              <div className="mt-1 mr-2">
                <Image
                  src="/about/Group 1.png"
                  alt="about"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <div className="text-white">Ramshahapath, Kathmandu,</div>
                <div className="text-white">Nepal</div>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="mt-2 mr-2">
                <Image
                  src="/about/Vector.png"
                  alt="about"
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <div className="text-white">01-4263387</div>
                <div className="text-white">Toll Free: 16600111110</div>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="mt-1 mr-2">
                <Image
                  src="/about/Vector (1).png"
                  alt="about"
                  width={20}
                  height={20}
                />
              </div>
              <div className="text-white">info@adbl.gov.np</div>
            </div>
            <div>
              <div className="flex">
                <div
                  className="rounded-full w-8 h-8 bg-cover bg-center mr-3 p-2"
                  style={{ backgroundColor: "white" }}
                >
                  <Image
                    src="/about/104498_facebook_icon 2.png"
                    alt="about"
                    width={24}
                    height={24}
                  />
                </div>
                <div
                  className="rounded-full w-8 h-8 bg-cover bg-center mr-3 p-2"
                  style={{ backgroundColor: "white" }}
                >
                  <Image
                    src="/about/104501_twitter_bird_icon 2.png"
                    alt="about"
                    width={24}
                    height={24}
                  />
                </div>
                <div
                  className="rounded-full w-8 h-8 bg-cover bg-center mr-3 p-2"
                  style={{ backgroundColor: "white" }}
                >
                  <Image
                    src="/about/2559760_media_social_video_youtube_icon 2.png"
                    alt="about"
                    width={24}
                    height={24}
                  />
                </div>
                <div
                  className="rounded-full w-8 h-8 bg-cover bg-center mr-3 p-2"
                  style={{ backgroundColor: "white" }}
                >
                  <Image
                    src="/about/367593_linkedin_business_network_social_icon 2.png"
                    alt="about"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-stone-500 mt-4">
          © 2023 ADBL. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
