"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { BsBriefcase } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { PiMoneyLight } from "react-icons/pi";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";


type Props = {};

const Header = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [bankingPage, setBankingPage] = useState(1);

  return (
    <>
      <header className="flex h-28 sm:h-24 bg-white  md:h-32 lg:h-24 xl:h-24 ">
        <div className=" mx-auto flex w-full max-w-[95%] flex-wrap items-center justify-between px-0 py-2 md:max-w-[90%] 2xl:max-w-[1320px]">
          <ul className="flex items-center space-x-6 sm:space-x-12">
            <li 
            className={`border-b-2 ${bankingPage == 1 ? "border-custom-red text-custom-red":"border-white"} hoverTextRedEffect   pb-1 text-sm  md:text-base `}
            onClick={() => setBankingPage(1)}
            >
              <Link href="/personal-banking" className="flex items-center">
                <IoPersonOutline />
                <span className="ml-1 ">Personal Banking</span>
              </Link>
            </li>
            <li 
            className={`border-b-2 ${bankingPage == 2 ? "border-custom-red text-custom-red":"border-white"} hoverTextRedEffect   pb-1 text-sm  md:text-base `}
            onClick={() => setBankingPage(2)}
            >
              <Link href="/business-banking" className=" flex items-center">
                <BsBriefcase />
                <span className="ml-1">Business Banking</span>
              </Link>
            </li>
            <li 
            className={`border-b-2 ${bankingPage == 3 ? "border-custom-red text-custom-red":"border-white"} hoverTextRedEffect   pb-1 text-sm  md:text-base `}
            onClick={() => setBankingPage(3)}
            >
              <Link href="remittance" className=" flex items-center">
                <PiMoneyLight />
                <span className="ml-1">Remittance</span>
              </Link>
            </li>
          </ul>

          <ul className="mt-0 flex items-center justify-evenly space-x-2 sm:space-x-6 md:mt-0">
            <li className="text-xm hoverGreenEffect flex cursor-pointer items-center rounded-full bg-custom-green px-2 sm:px-4 py-2 text-white  md:text-base lg:text-base">
              <span className="mr-1 text-sm lg:text-base">
                Online Application
              </span>
              <GoTriangleDown />
            </li>
            <li className="hoverRedEffect flex cursor-pointer items-center rounded-full border-none bg-custom-red px-4 py-2  text-xs text-white outline-none hover:ease-in-out md:text-sm lg:text-base ">
              <span className="mr-1"> Login</span>
              <GoTriangleDown />
            </li>
            <li className="cursor-pointer">
              <IoSearchOutline />
            </li>
            <li className="text-custom-green">
              <Select>
                <SelectTrigger className="w-[65px] border-custom-green text-xs md:text-sm lg:text-base ">
                  <SelectValue placeholder="EN" />
                </SelectTrigger>
                <SelectContent className=" min-w-[4rem] sm:min-w-[6]">
                  <SelectItem value="EN" className="text-custom-green">EN</SelectItem>
                  <SelectItem value="NP" className="text-custom-green">NP</SelectItem>
                </SelectContent>
              </Select>
            </li>
          </ul>
        </div>
      </header>

      <nav className="flex h-[70px] md:h-24 items-center bg-custom-green ">
        <div className="relative mx-auto flex w-full max-w-[95%] items-center justify-between  2xl:max-w-[1320px]">
          <div className="flex cursor-pointer items-center w-48 md:w-[250px] ">
            <Image
              src={"/images/adbl-logo.png"}
              alt={"logo"}
              width={250}
              height={200}
              className={"object-cover"}
            />
          </div>
          {bankingPage == 1 && <Accordion type="single" collapsible  className={`${isNavOpen ? "bg-custom-green flex flex-col items-start justify-start -left-[2.6%] h-[500px] absolute top-[140%] z-10 mx-auto w-screen lg:flex-row  lg:h-auto lg:w-auto lg:relative  lg:mx-0 lg:bg-custom-green lg:items-center " : "hidden lg:flex  lg:flex-row lg:left-auto lg:h-auto lg:w-auto lg:relative lg:top-auto lg:mx-0 lg:bg-custom-green lg:items-center "}  text-white px-2`}>
                <AccordionItem value="item-1" className="relative w-full mb-1 px-5 mt-8 border-none no-underline lg:px-0 lg:w-auto lg:mt-0 lg:mx-auto lg:mr-4 ">
                  <AccordionTrigger className=" p-0 text-base lg:text-sm lg:p-0  ">
                  Savings and Deposits
                  <ChevronDownIcon className="h-4 ml-8 w-4 shrink-0 text-white transition-transform duration-200 lg:ml-1" />
                  </AccordionTrigger>
                  <AccordionContent className="p-0 lg:absolute lg:z-20 lg:bg-custom-green lg:mx-auto lg:rounded-xl">
                    <ul className={` ml-4 lg:text-xs lg:mx-auto lg:text-center lg:px-4 lg:py-2`}>
                      <li>sample</li>
                      <li>sample</li>
                      <li>sample</li>
                      <li>sample</li>
                      <li>sample</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="relative w-full mb-1 px-5 mt-8 border-none no-underline lg:px-0 lg:w-auto lg:mt-0 lg:mx-auto lg:mr-4">
                  <AccordionTrigger className=" p-0 text-base lg:text-sm lg:p-0">
                  Loan and Advances
                  <ChevronDownIcon className="h-4 ml-8 w-4 shrink-0 text-white transition-transform duration-200 lg:ml-1" />
                  </AccordionTrigger>
                  <AccordionContent className="p-0 lg:absolute lg:z-20 lg:bg-custom-green lg:mx-auto lg:rounded-xl">
                    <ul className="ml-4 lg:text-xs lg:mx-auto lg:text-center lg:px-4 lg:py-2">
                      <li>sample</li>
                      <li>sample</li>
                      <li>sample</li>
                      <li>sample</li>
                      <li>sample</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="relative w-full mb-1 px-5 mt-8 border-none no-underline lg:px-0 lg:w-auto lg:mt-0 lg:mx-auto lg:mr-4">
                  <AccordionTrigger className=" p-0 text-base lg:text-sm lg:p-0">
                  Services
                  <ChevronDownIcon className="h-4 ml-8 w-4 shrink-0 text-white transition-transform duration-200 lg:ml-1" />
                  </AccordionTrigger>
                  <AccordionContent className="p-0 lg:absolute lg:z-20 lg:bg-custom-green lg:mx-auto lg:rounded-xl">
                    <ul className="ml-4 lg:text-xs lg:mx-auto lg:text-center lg:px-4 lg:py-2">
                      <li>sample</li>
                      <li>sample</li>
                      <li>sample</li>
                      <li>sample</li>
                      <li>sample</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="relative w-full mb-1 px-5 mt-8 border-none no-underline lg:px-0 lg:w-auto lg:mt-0 lg:mx-auto lg:mr-4">
                  <AccordionTrigger className=" p-0 text-base lg:text-sm lg:p-0">
                  Financial Reports
                  <ChevronDownIcon className="h-4 ml-8 w-4 shrink-0 text-white transition-transform duration-200 lg:ml-1" />
                  </AccordionTrigger>
                  <AccordionContent className="p-0 lg:absolute lg:z-20 lg:bg-custom-green lg:mx-auto lg:rounded-xl">
                    <ul className="ml-4 lg:text-xs lg:mx-auto lg:text-center lg:px-4 lg:py-2">
                      <li>sample</li>
                      <li>sample</li>
                      <li>sample</li>
                      <li>sample</li>
                      <li>sample</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="relative w-full mb-1 px-5 mt-8 border-none no-underline lg:px-0 lg:w-auto lg:mt-0 lg:mx-auto lg:mr-4">
                  <AccordionTrigger className=" p-0 text-base lg:text-sm lg:p-0">
                  Cards
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>}
          {bankingPage == 2 && <Accordion type="single" collapsible  className={`${isNavOpen ? "bg-custom-green flex flex-col items-start justify-start -left-[2.6%] h-[500px] absolute top-[140%] z-10 mx-auto w-screen lg:flex-row  lg:h-auto lg:w-auto lg:relative  lg:mx-0 lg:bg-custom-green lg:items-center " : "hidden lg:flex  lg:flex-row lg:left-auto lg:h-auto lg:w-auto lg:relative lg:top-auto lg:mx-0 lg:bg-custom-green lg:items-center "}  text-white px-2`}>
                <AccordionItem value="item-1" className="relative w-full mb-1 px-5 mt-8 border-none no-underline lg:px-0 lg:w-auto lg:mt-0 lg:mx-auto lg:mr-4 ">
                  <AccordionTrigger className=" p-0 text-base lg:text-sm lg:p-0  ">
                  Deposit Account
                  <ChevronDownIcon className="h-4 ml-8 w-4 shrink-0 text-white transition-transform duration-200 lg:ml-1" />
                  </AccordionTrigger>
                  <AccordionContent className="p-0 lg:absolute lg:z-20 lg:bg-custom-green lg:mx-auto lg:rounded-xl">
                    <ul className={` ml-4 lg:text-xs lg:mx-auto lg:text-center lg:px-4 lg:py-2 `}>
                      <li className="text-left">Current Account</li>
                      <li className="text-left">Call Account</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="relative w-full mb-1 px-5 mt-8 border-none no-underline lg:px-0 lg:w-auto lg:mt-0 lg:mx-auto lg:mr-4">
                  <AccordionTrigger className=" p-0 text-base lg:text-sm lg:p-0">
                  Loan and Advances
                  <ChevronDownIcon className="h-4 ml-8 w-4 shrink-0 text-white transition-transform duration-200 lg:ml-1" />
                  </AccordionTrigger>
                  <AccordionContent className="p-0 lg:absolute lg:z-20 lg:bg-custom-green lg:mx-auto lg:rounded-xl">
                    <ul className="ml-4 lg:text-xs lg:mx-auto lg:text-center lg:px-4 lg:py-2">
                      <li className="text-left">Micro Loan</li>
                      <li className="text-left">Business Loan</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="relative w-full mb-1 px-5 mt-8 border-none no-underline lg:px-0 lg:w-auto lg:mt-0 lg:mx-auto lg:mr-4">
                  <AccordionTrigger className=" p-0 text-base lg:text-sm lg:p-0">
                  Non-Funded Credit Facilities
                  </AccordionTrigger>
                </AccordionItem>
                
              </Accordion>}

          <div
            className={`${
              isNavOpen ? "hidden" : "block space-y-2 lg:hidden"
            } transition delay-150 ease-in-out`}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div
            onClick={() => setIsNavOpen(false)}
            className={`transition delay-150 ease-in-out ${
              isNavOpen ? "block lg:hidden" : "hidden"
            }`}
          >
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

