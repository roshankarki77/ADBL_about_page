"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import 'animate.css';
import { useEffect } from "react";



const Banner = () => {
  const isServer = typeof window === "undefined";
  const WOW = !isServer ? require("wowjs") : null;
  useEffect(() => {
    new WOW.WOW({
      live: true,
    }).init();
  }, []);
  return (
    <section className="my-8 py-8" style={{ backgroundImage: `url('/images/mobile-app-bg.png')` , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div 
        className="w-[95%] sm:w-[85%] mx-auto lg:max-w-[85%] 2xl:max-w-[1320px] wow animate__animated animate__fadeInUp animate__slow "
      >
        <div className="flex flex-wrap">
          <div className="lg:flex-1 w-full"  >
            <img src={"/images/mobile-app.png"} className="w-full hidden object-cover lg:block" alt="mobile app" />
          </div>
          <div className=" flex lg:flex-1 flex-col lg:pl-8 lg:pt-0 space-y-4  justify-center">
            <h2 className="text-2xl font-semibold">
              Enjoy easy,secure,convenient banking with ADBL mobile application
            </h2>
            <p className="text-sm text-slate-500">
              Manage and use your Bank Application on the move and around the
              clock with this secure Mobile Banking App from ADBL. This App will
              be regularly updated with additional features.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <Link href={"#"} target="_blank" rel="noreferrer">
                <span className="">
                  <Image
                    src={"/images/playstore.png"}
                    width={133}
                    height={40}
                    alt="Play Store"
                  />
                </span>
              </Link>

              <Link href={"#"} target="_blank" rel="noreferrer">
                <span className="">
                  <Image
                    src={"/images/appstore.png"}
                    width={133}
                    height={40}
                    alt="App Store"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
