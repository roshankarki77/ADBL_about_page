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
              <div className="text-stone-500 font-medium text-base mb-3">
                Introduction
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Organizational Structure
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Capital Ownership Structure
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Board of Directors
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Management Team
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Department Head
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Financial Literacy Program
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Customer Care and Support
              </div>
            </div>
          </div>
          <div className="mb-6 min-w-[230px] lg:mx-8 ">
            <div className="font-bold text-xl text-green-600 mb-3">
              Reports & Rates
            </div>
            <div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Annual Reports
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Quarterly Reports
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Basel Reports
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Interest Rate
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Base Rate
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Spread Rate
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Foreign Exchange Rates
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
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
              <div className="text-stone-500 font-medium text-base mb-3">
                News & Events
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Notices
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Articles
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Photo Gallery
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Video Gallery
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                CSR
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Downloads
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                ADBL Projects
              </div>
            </div>
          </div>
          <div className="mb-6 md:min-w-[230px]  xl:min-w-[180px] lg:mx-8 ">
            <div className="font-bold text-xl text-green-600 mb-3">
              Quick Links
            </div>
            <div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Branches
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                ATM Location
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Extension Counters
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                EMI Calculator
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Career Notice
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Syllabus
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
                Online Job Apply
              </div>
              <div className="text-stone-500 font-medium text-base mb-3">
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
