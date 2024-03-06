"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { IoPersonOutline } from "react-icons/io5";
import { BsBriefcase } from "react-icons/bs";
import { PiMoneyLight } from "react-icons/pi";
import { GoTriangleDown } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

import { ChevronDownIcon } from "@radix-ui/react-icons";

type Props = {};

const Header = (props: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <header className="flex h-36 bg-white md:h-32 lg:h-32 xl:h-20 ">
        <div className=" mx-auto flex w-full max-w-[95%] flex-wrap items-center justify-between px-0 py-2 md:max-w-[85%] 2xl:max-w-[1320px]">
          <ul className="flex items-center space-x-6 sm:space-x-12">
            <li className=" hoverTextRedEffect border-b-2 border-custom-red pb-1  text-sm text-custom-red md:text-base ">
              <Link href="#" className="flex items-center">
                <IoPersonOutline />
                <span className="ml-1 ">Personal Banking</span>
              </Link>
            </li>
            <li className=" text-sm md:text-base ">
              <Link href="#" className="hoverTextRedEffect flex items-center">
                <BsBriefcase />
                <span className="ml-1">Business Banking</span>
              </Link>
            </li>
            <li className="text-sm md:text-base">
              <Link href="#" className="hoverTextRedEffect flex items-center">
                <PiMoneyLight />
                <span className="ml-1">Remitance</span>
              </Link>
            </li>
          </ul>

          <ul className="mt-2 flex items-center justify-evenly space-x-2 sm:space-x-6 md:mt-0 lg:mt-0 xl:mt-0">
            <li className="text-xm hoverGreenEffect flex cursor-pointer items-center rounded-full bg-custom-green px-4 py-2 text-white  md:text-base lg:text-base">
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
            <li className="">
              <Select>
                <SelectTrigger className="w-[65px] border-custom-green text-xs md:text-sm lg:text-base ">
                  <SelectValue placeholder="EN" />
                </SelectTrigger>
                <SelectContent className="min-w-[4rem] sm:min-w-[6]">
                  <SelectItem value="EN">EN</SelectItem>
                  <SelectItem value="NP">NP</SelectItem>
                </SelectContent>
              </Select>
            </li>
          </ul>
        </div>
      </header>

      <nav className="flex h-24 items-center bg-custom-green ">
        <div className=" mx-auto flex w-full max-w-[95%] items-center justify-between md:max-w-[85%] 2xl:max-w-[1320px]">
          <div className="flex cursor-pointer items-center  ">
            <Image
              src={"/images/adbl-logo.png"}
              alt={"logo"}
              width={300}
              height={200}
              className={"object-contain"}
            />
          </div>
          <div className=" hidden items-center text-white lg:ml-4  xl:flex">
            <ul className="flex items-center justify-center lg:space-x-4 xl:space-x-12">
              <li className="hoverTextGreenEffect flex cursor-pointer">
                <span className=" text-xs sm:text-sm md:text-base lg:text-base ">
                  Savings and Deposits
                </span>
                <ChevronDownIcon className="mt-[2px]" />
              </li>
              <li className="hoverTextGreenEffect flex cursor-pointer">
                <span className="">Loan and Advances</span>
                <ChevronDownIcon className="mt-[2px]" />
              </li>
              <li className="hoverTextGreenEffect flex cursor-pointer">
                <span className="">Services</span>
                <ChevronDownIcon className="mt-[2px]" />
              </li>
              <li className="hoverTextGreenEffect flex cursor-pointer">
                <span className=""> Financial Reports</span>
                <ChevronDownIcon className="mt-[2px]" />
              </li>
              <li className="hoverTextGreenEffect flex cursor-pointer">
                Cards
              </li>
            </ul>
          </div>

          <div
            className={`${
              isNavOpen ? "hidden" : "block space-y-2 xl:hidden"
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
              isNavOpen ? "block" : "hidden"
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

      <div className={`menu bg-custom-green`}>
      <ul className={`flex items-center justify-center w-[95%] mx-auto lg:space-x-4 xl:space-x-12 text-white flex-col space-y-4 py-8  display-none ${isNavOpen ? 'block' : 'display-hidden'}`}>
              <li className=" flex cursor-pointer  w-full justify-between">
                <ul className=" sm:text-sm md:text-base lg:text-base w-full">
                  <div className="text-custom-light-green animate-pulse">Savings and Deposits</div>
                  <li className="pl-4 flex justify-between items-center">
                    <p className="">save</p>
                    <ChevronDownIcon className="mt-[2px]" />
                  </li>
                  <li className="pl-4">save</li>
                  <li className="pl-4">save</li>
                  <li className="pl-4">save</li>
                </ul>
                <ChevronDownIcon className="mt-[2px]" />
              </li>
              <li className="hoverTextGreenEffect flex cursor-pointer w-full justify-between">
                <ul className=" sm:text-sm md:text-base lg:text-base ">
                  Loan and Advances
                  <li className="pl-4">save</li>
                  <li className="pl-4">save</li>
                  <li className="pl-4">save</li>
                  <li className="pl-4">save</li>
                </ul>
                <ChevronDownIcon className="mt-[2px]" />
              </li>
              <li className="hoverTextGreenEffect flex cursor-pointer w-full justify-between">
                <ul className=" sm:text-sm md:text-base lg:text-base ">
                  Services
                  <li className="pl-4">save</li>
                  <li className="pl-4">save</li>
                  <li className="pl-4">save</li>
                  <li className="pl-4">save</li>
                </ul>
                <ChevronDownIcon className="mt-[2px]" />
              </li>
              <li className="hoverTextGreenEffect flex cursor-pointer w-full justify-between">
                <span className=""> Financial Reports</span>
                <ChevronDownIcon className="mt-[2px]" />
              </li>
              <li className="hoverTextGreenEffect flex cursor-pointer w-full justify-between">
                Cards
              </li>
            </ul>
      </div>
    </>
  );
};

export default Header;
