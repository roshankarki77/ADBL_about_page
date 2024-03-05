"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="my-8">
      <div className="w-[85%] mx-auto">
        <div className="flex">
          <div className="flex-1">
            <img src={"/images/mobile-app.png"} alt="mobile app" />
          </div>
          <div className="flex-1 flex flex-col pt-32 space-y-6">
            <h2 className="text-2xl font-semibold">
              Enjoy easy,secure,convenient banking with ADBL mobile application
            </h2>
            <p className="mt-2 text-sm text-slate-500">
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
