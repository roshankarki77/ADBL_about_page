import React from "react";
import { Button } from "@/app/components/ui/button";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const LoanSection = () => {

  return (
    <>
      <div className="my-4  bg-[#F5FFEF] pb-8">
        <div className="mx-auto w-[95%] md:w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px]">
          <h2 className="pt-4 text-2xl font-semibold ">
            Are you looking for loan ?
          </h2>
          <p className="mt-2 text-sm text-[#666666]">
            Its time to make your dream come true.We are here to help you when
            you need your financial support
          </p>

          <section className="justify-items-center mt-8 grid grid-cols-3 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            <div className="relative ">
              <div className="grid h-24 w-24 place-content-center rounded-full bg-white mx-auto">
                <img
                  src="/images/looking1.png"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="text-center font-bold mt-4">
                Personal Loan
              </div>
              <div className="absolute -bottom-4 left-0 w-full border-b-4 border-custom-green pb-4 text-center "></div>
            </div>
            <div className="relative">
              <div className="grid h-24 w-24 place-content-center rounded-full bg-white mx-auto">
                <img
                  src="/images/looking1.png"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="text-center font-bold mt-4">
                Business Loan
              </div>
            </div>
            <div className="relative">
              <div className="grid h-24 w-24 place-content-center rounded-full bg-white mx-auto">
                <img
                  src="/images/looking1.png"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="text-center font-bold mt-4">
                Education Loan
              </div>
            </div>
            <div className="relative">
              <div className="grid h-24 w-24 place-content-center rounded-full bg-white mx-auto">
                <img
                  src="/images/looking1.png"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="text-center font-bold mt-4">
                House Loan
              </div>
            </div>
            <div className="relative">
              <div className="grid h-24 w-24 place-content-center rounded-full bg-white mx-auto">
                <img
                  src="/images/looking1.png"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="text-center font-bold mt-4">
                Payday Loan
              </div>
            </div>
            <div className="relative">
              <div className="grid h-24 w-24 place-content-center rounded-full bg-white mx-auto">
                <img
                  src="/images/looking1.png"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="text-center font-bold mt-4">
                Agricultural Loan
              </div>
            </div>
          </section>

          {/* striaght line */}
          <div className="border-b-2 border-gray-300 pb-4"></div>

          <section className="mt-8 flex flex-wrap">
            <div className="md:flex-1">
              <img src="/images/kisan.png" alt="farmer image" />
            </div>
            <div className="flex-1 py-2">
              <p className="text-[#666666]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                ab architecto molestiae quis dolore doloremque quae tempora,
                eveniet ea officia.
              </p>
              <h2 className="mt-4">Types of business loan</h2>
              <ul className="mt-2 ml-5">
                <li className="list-disc text-[#666666]">Secured loans</li>
                <li className="list-disc text-[#666666]">Unsecured loans</li>
                <li className="list-disc text-[#666666]">
                  Revolving credit facilities
                </li>
                <li className="list-disc text-[#666666]">
                  Business cash advances
                </li>
              </ul>
              <h2 className="mt-4">
                Eligibility and criteria for business loans
              </h2>
              <p className="mt-4 text-[#666666]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, quibusdam.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-4 w-84 sm:grid-cols-2 sm:w-80 lg:w-96">
                <Button variant={"default"}  className="">
                  View Details
                  <TriangleRightIcon />
                </Button>
                <Button variant={"destructive"}>
                  Apply For Loan
                  <TriangleRightIcon />
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* loan form section */}
      <section className="mt-8 ">
        <div className="mx-auto flex w-[95%] md:w-[90%] flex-wrap lg:max-w-[85%] 2xl:max-w-[1320px]">
          {/* left */}
          <div className="lg:flex-1 py-2 lg:pr-2">
            <h2 className="text-lg font-semibold leading-6">
              We usually follow 4 steps to get a better business loans.
            </h2>

            <div className="mt-8 flex ">
              <div className="flex-0.2 ">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-custom-green text-custom-green">
                  1
                </div>
                <div className="mx-4 h-24  w-0.5 bg-custom-green"></div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-custom-green text-custom-green">
                  2
                </div>
                <div className="mx-4 h-24  w-0.5 bg-custom-green"></div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-custom-green text-custom-green">
                  3
                </div>
                <div className="mx-4 h-24  w-0.5 bg-custom-green"></div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-custom-green text-custom-green">
                  4
                </div>
              </div>
              <div className="flex-0.8 ml-8  w-full">
                <div className="flex h-28  flex-wrap">
                  <h2 className="font-semibold">Apply in 10 minutes</h2>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti, molestiae. asdfas asfds
                  </p>
                </div>
                <div className="mt-4 flex h-28 flex-wrap">
                  <h2 className="font-semibold">Hear from us in 24 hour</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti, molestiae.loream assdf asdf gasfs
                  </p>
                </div>
                <div className="mt-4 flex h-28 flex-wrap">
                  <h2 className="font-semibold">A decision in 24 hours</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti, molestiae.
                  </p>
                </div>
                <div className="mt-4 flex h-28 flex-wrap">
                  <h2 className="font-semibold">Your loan is funded</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti, molestiae.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex-1 pt-4 lg:pt-0">
            <form
              action=""
              className="my-2 rounded-lg p-4 shadow shadow-black/60"
            >
              <h2 className="text-base font-semibold leading-7">
                Get a call back
              </h2>

              <div className="mt-2 grid grid-cols-1 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-8">
                  <label
                    htmlFor="name"
                    className="text-grap-900 block text-sm font-medium leading-6"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="username"
                      className="block w-full flex-1 rounded-sm border-2 bg-transparent p-2 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-8">
                  <label
                    htmlFor="mobile"
                    className="text-grap-900 block text-sm font-medium leading-6"
                  >
                    Mobile
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      autoComplete="mobile"
                      className="block w-full flex-1 rounded-sm border-2 bg-transparent p-2 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-8">
                  <label
                    htmlFor="mobile"
                    className="text-grap-900 block text-sm font-medium leading-6"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full flex-1 rounded-sm border-2 bg-transparent p-2 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-8">
                  <label
                    htmlFor="loan"
                    className="text-grap-900 block text-sm font-medium leading-6"
                  >
                    Type of Loan
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="loan"
                      id="loan"
                      autoComplete="loan"
                      className="block w-full flex-1 rounded-sm border-2 bg-transparent p-2 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <Button variant={"default"} size={"default"} className="rounded-full">
                  Submit
                  <TriangleRightIcon />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoanSection;