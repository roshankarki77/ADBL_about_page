import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    // mx-auto w-[95%]  md:w-[90%]
    <div className="mx-auto mt-8  flex w-[95%]  flex-col flex-wrap  justify-between md:w-[90%] xl:flex-row  2xl:max-w-[1320px]">
      <div className="grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-2 lg:grid-cols-4 flex-1">
        <div className="mb-6">
          <div className="mb-3 text-xl font-bold text-green-600">About Us</div>
          <div className="grid grid-cols-2 gap-x-2 md:grid-cols-1">
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Introduction
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Board of Directors
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Management Team
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Department Head
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Capital Ownership Structure
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Organizational Structure
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Financial Literacy Program
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Customer Care and Support
            </div>
          </div>
        </div>
        <div className="mb-6 min-w-[230px]">
          <div className="mb-3 text-xl font-bold text-green-600">
            Reports & Rates
          </div>
          <div className="grid grid-cols-2 gap-x-2 md:grid-cols-1">
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Annual Reports
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Quarterly Reports
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Basel Reports
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Interest Rate
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Base Rate
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Spread Rate
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Foreign Exchange Rates
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Service Charges
            </div>
          </div>
        </div>
        <div className="mb-6 md:min-w-[230px] xl:min-w-[190px] ">
          <div className="mb-3 text-xl font-bold text-green-600">
            News & Media
          </div>
          <div className="grid grid-cols-2 gap-x-2 md:grid-cols-1">
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              News & Events
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Notices
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Articles
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Photo Gallery
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium  text-stone-500 hover:cursor-pointer">
              Video Gallery
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              CSR
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Downloads
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              ADBL Projects
            </div>
          </div>
        </div>
        <div className="mb-6 md:min-w-[230px]xl:min-w-[180px] ">
          <div className="mb-3 text-xl font-bold text-green-600">
            Quick Links
          </div>
          <div className="grid grid-cols-2 gap-x-2 md:grid-cols-1">
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Branches
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              ATM Location
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Extension Counters
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              EMI Calculator
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Career Notice
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Syllabus
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Online Job Apply
            </div>
            <div className="hoverTextGreenEffect mb-2 text-sm font-medium text-stone-500 hover:cursor-pointer">
              Contact Us
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <div className="rounded-xl bg-green-700 p-6">
          <div>
            <div className="mb-4 flex">
              <div className="mr-2 mt-1">
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
            <div className="mb-4 flex">
              <div className="mr-2 mt-2">
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
            <div className="mb-4 flex">
              <div className="mr-2 mt-1">
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
                  className="mr-3 h-8 w-8 rounded-full bg-cover bg-center p-2"
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
                  className="mr-3 h-8 w-8 rounded-full bg-cover bg-center p-2"
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
                  className="mr-3 h-8 w-8 rounded-full bg-cover bg-center p-2"
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
                  className="mr-3 h-8 w-8 rounded-full bg-cover bg-center p-2"
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
        <div className="mt-4 text-stone-500">
          © 2023 ADBL. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
