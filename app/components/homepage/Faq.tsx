'use client'
import Image from "next/image";
import React from "react";
import 'animate.css';
import { useEffect } from "react";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Faq = () => {

  const isServer = typeof window === "undefined";
  const WOW = !isServer ? require("wowjs") : null;
  useEffect(() => {
    new WOW.WOW({
      live: true,
    }).init();
  }, []);

  return (
    <section className="my-2 ">
      <div className="mx-auto w-[95%] pt-4 md:w-[90%] lg:max-w-[85%] 2xl:max-w-[1320px] wow animate__animated animate__fadeInUp animate__slow ">
        <div className="flex flex-col flex-wrap xl:flex-row xl:justify-between">
          <div className="flex flex-col ">
            <h2 className="text-xl font-semibold">
              Information and Grievance Officers
            </h2>
            <div className="flex flex-col md:items-end md:flex-row md:gap-2 xl:flex-col">
            <div className="mt-4 flex w-full flex-col rounded-md border-2  border-[#CCCCCC]">
              <div className="flex justify-center xl:px-20">
                <div className=" flex max-w-[340px] items-center justify-center lg:py-4">
                  <div className="my-1 ml-0 mr-2 flex items-center  justify-center">
                    <img
                      src={"/images/info-officer.png"}
                      alt="information officer"
                      className="ml-[5px] mt-2 h-24 w-36 overflow-hidden rounded-full object-contain md:mt-1"
                    />
                  </div>
                  <div className="justify-left my-5 flex w-full flex-col pr-1 lg:my-auto">
                    <h3 className="mb-1 text-left text-sm font-bold text-custom-green ">
                      Information Officer & Spokeperson
                    </h3>
                    <h2 className="text-sm font-semibold">Himalal Paudyal</h2>
                    <div className="flex flex-col  ">
                      <span className="text-sm text-slate-500">
                        Mobile: 9851322990
                      </span>
                      <span className="text-sm text-slate-500">
                        Email: himal.paudyal@adbl.gov.np
                      </span>
                      <span className="text-sm text-slate-500">
                        Phone: +977-01-4264016(Office)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 flex w-full flex-col rounded-md border-2  border-[#CCCCCC]">
              <div className="flex justify-center">
                <div className=" flex max-w-[340px] items-center justify-center lg:py-4">
                  <div className="my-1 ml-0 mr-2 flex items-center  justify-center">
                    <img
                      src={"/images/grievance.png"}
                      alt="information officer"
                      className="ml-[5px] mt-2 h-24 w-36 overflow-hidden rounded-full object-contain md:mt-1"
                    />
                  </div>
                  <div className="justify-left my-5 flex w-full flex-col pr-1 lg:my-auto">
                    <h3 className="mb-1 text-left text-sm font-bold text-custom-green ">
                      Grievance Officer
                    </h3>
                    <h2 className="text-sm font-semibold">
                      Mr. Hira Bahadur Ale
                    </h2>
                    <div className="flex flex-col  ">
                      <span className="text-sm text-slate-500">
                        Mobile: 9851328566
                      </span>
                      <span className="text-sm text-slate-500">
                        Email: gunaso@adbl.gov.np
                      </span>
                      <span className="text-sm text-slate-500">
                        Phone: +977-01-4264016(Office)
                      </span>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 basis-[48%] xl:mt-0">
            <h2 className="text-xl font-semibold">
              Frequently Asked Questions
            </h2>

            <div className="mt-2 border-2 rounded-md border-[#CCCCCC] p-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    How do I register for 3D Secure PIN ?
                    <ChevronDownIcon className="h-4 ml-8 w-4 shrink-0 text-black transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent>
                    3D Secure is a service that allows you to generate a 6 digit
                    PIN to protect your VISA debit/credit card when you shop
                    online; giving you added reassurance that no third person or
                    third party app can access your VISA card information.
                    Please do not disclose your 3D Secure OTP PIN to anyone.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Should I keep a record of my online transaction ?
                    <ChevronDownIcon className="h-4 ml-8 w-4 shrink-0 text-black transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How can I review my monthly account statement thoroughly?
                    <ChevronDownIcon className="h-4 ml-8 w-4 shrink-0 text-black transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What is the frequency of interest pay-out?
                    <ChevronDownIcon className="h-4 ml-8 w-4 shrink-0 text-black transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    How to protect my card details?
                    <ChevronDownIcon className="h-4 ml-8 w-4 shrink-0 text-black transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    Can I send payment information via email?
                    <ChevronDownIcon className="h-4 ml-8 w-4 shrink-0 text-black transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
