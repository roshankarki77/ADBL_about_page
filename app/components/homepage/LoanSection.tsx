import React from "react";
import { Button } from "@/app/components/ui/button";
import { TriangleRightIcon } from "@radix-ui/react-icons";

const LoanSection = () => {
  return (
    <>
      <div className="my-8  bg-[#F5FFEF] ">
        <div className="mx-auto w-[85%]">
          <h2 className="pt-6 text-2xl font-semibold ">
            Are you looking for loan ?
          </h2>
          <p className="mt-4 text-sm text-[#666666]">
            Its time to make your dream come true.We are here to help you when
            you need your financial support
          </p>

          <section className="item-center mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="relative">
              <div className="grid h-44 w-44 place-content-center rounded-full bg-white">
                image
              </div>
              <div className="absolute -bottom-4 left-0 w-44 border-b-4 border-custom-green pb-4 text-center "></div>
            </div>
            <div className="relative">
              <div className="grid h-44 w-44 place-content-center rounded-full bg-white">
                image
              </div>
            </div>
            <div className="relative">
              <div className="grid h-44 w-44 place-content-center rounded-full bg-white">
                image
              </div>
            </div>
            <div className="relative">
              <div className="grid h-44 w-44 place-content-center rounded-full bg-white">
                image
              </div>
            </div>
            <div className="relative">
              <div className="grid h-44 w-44 place-content-center rounded-full bg-white">
                image
              </div>
            </div>
          </section>

          {/* striaght line */}
          <div className="border-b-2 border-gray-300 pb-4"></div>

          <section className="mt-8 flex">
            <div className="flex-1 ">
              <img src="/images/kisan.png" alt="farmer image" />
            </div>
            <div className="flex-1 p-2">
              <p className="text-[#666666]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                ab architecto molestiae quis dolore doloremque quae tempora,
                eveniet ea officia.
              </p>
              <h2 className="mt-4">Types of business loan</h2>
              <ul className="mt-2">
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

              <div className="mt-4">
                <Button variant={"default"} className="mr-2">
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
      <section className="mt-16  ">
        <div className="mx-auto flex w-[85%]">
          {/* left */}
          <div className="flex-1 p-2">
            <h2 className="text-lg font-semibold leading-6">
              We usually follow 4 steps to get a better business loans.
            </h2>

            <div className="mt-8 flex ">
              <div className="flex-0.2 ">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-custom-green text-custom-green">
                  1
                </div>
                <div className="mx-4 h-20  w-0.5 bg-custom-green"></div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-custom-green text-custom-green">
                  2
                </div>
                <div className="mx-4 h-20  w-0.5 bg-custom-green"></div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-custom-green text-custom-green">
                  3
                </div>
                <div className="mx-4 h-20  w-0.5 bg-custom-green"></div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-custom-green text-custom-green">
                  4
                </div>
              </div>
              <div className="flex-0.8 ml-8  w-full">
                <div className="flex h-24  flex-wrap">
                  <h2 className="font-semibold">Apply in 10 minutes</h2>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti, molestiae. asdfas asfds
                  </p>
                </div>
                <div className="mt-4 flex h-24 flex-wrap">
                  <h2 className="font-semibold">Hear from us in 24 hour</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti, molestiae.loream assdf asdf gasfs
                  </p>
                </div>
                <div className="mt-4 flex h-24 flex-wrap">
                  <h2 className="font-semibold">A decision in 24 hours</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corrupti, molestiae.
                  </p>
                </div>
                <div className="mt-4 flex h-24 flex-wrap">
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
          <div className="flex-1">
            <form
              action=""
              className="m-2 rounded-lg p-4 shadow shadow-black/60"
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

                <Button variant={"default"}>
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
