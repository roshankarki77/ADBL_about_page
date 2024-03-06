import Image from "next/image";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const Faq = () => {
  return (
    <section className="my-8 ">
      <div className="mx-auto w-[95%] sm:w-[85%] pt-8 2xl:max-w-[1320px]">
        
        <div className="flex flex-wrap xl:justify-between flex-col xl:flex-row"> 
          <div className="flex flex-col basis-[48%]">
          <h2 className="text-xl font-semibold">
            Information and Grievance Officers
        </h2>
              <div className="mt-8 flex flex-col lg:flex-row flex-wrap justify-between rounded border-2 border-[#CCCCCC] p-8">
                <div className="basis-1/4 w-full">
                  <img
                     src={"/images/info-officer.png"}
                     alt="information officer"
                     className="overflow-hidden rounded-full mx-auto"
                     height="auto"
                  />
                </div>
                <div className="mt-12 md:ml-36 lg:ml-0 lg:my-auto pl-4 basis-3/4 ">
                  <h3 className="text-custom-green font-bold text-xl">
                    Information Officer & Spokeperson
                  </h3>

                  <h2 className="text-normal py-2 font-semibold">
                    Himalal Paudyal
                  </h2>
                  <div className="flex flex-col  ">
                    <span className="text-slate-500">Mobile: 9851322990</span>
                    <span className="text-slate-500">
                      Email: himal.paudyal@adbl.gob.np
                    </span>
                    <span className="text-slate-500">
                      Phone: +977-01-4264016
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col lg:flex-row flex-wrap justify-between rounded border-2 border-[#CCCCCC] p-8">
                <div className=" basis-1/4 w-full">
                  <img
                     src={"/images/grievance.png"}
                     alt="information officer"
                     className="overflow-hidden rounded-full mx-auto"
                     height="auto"
                  />
                </div>
                <div className="mt-12 md:ml-36 lg:ml-0 lg:my-auto basis-3/4 pl-4">
                  <h3 className="text-custom-green font-bold text-xl">
                  Grievance Officer
                  </h3>

                  <h2 className="text-normal py-2 font-semibold">
                  Mr. Hira Bahadur Ale
                  </h2>
                  <div className="flex flex-col  ">
                    <span className="text-slate-500">Mobile: +9779851328566</span>
                    <span className="text-slate-500">
                    Email: gunaso@adbl.gov.np
                    </span>
                    <span className="text-slate-500">
                      Phone: +977-01-4264016(Office)
                    </span>
                  </div>
                </div>
              </div>
             
          </div>
          <div className="basis-[48%] mt-12  lg:mt-52 xl:mt-0">
            <h2 className="text-xl font-semibold">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 border-2 border-[#CCCCCC] p-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How do I register for 3D Secure PIN ?
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
                  <AccordionTrigger>
                    Should I keep a record of my online transaction ?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How can I review my monthly account statement thoroughly?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What is the frequency of interest pay-out?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    How to protect my card details?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you
                    prefer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Can I send payment information via email?
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
