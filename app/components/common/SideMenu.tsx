import React from "react";
import Link from "next/link";

import { GrAtm } from "react-icons/gr";
import { IoIosGitBranch } from "react-icons/io";
import { IoGiftOutline } from "react-icons/io5";
import { AiOutlinePercentage } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi";
const SideMenu = () => {
  return (
    <div className="top-50 fixed z-50 hidden h-[510px] w-[65px] justify-evenly rounded-r-md bg-custom-red lg:flex">
      <ul className="flex  flex-col justify-evenly text-sm text-white ">
        <li className="hoverTextRedEffect flex cursor-pointer flex-col items-center justify-center space-y-2 text-xs">
          <Link href="/atm" className="flex flex-col items-center space-y-1">
            <GrAtm className="text-lg" />
            <span>ATM</span>
          </Link>
        </li>
        <li className="hoverTextRedEffect flex cursor-pointer  flex-col items-center justify-center space-y-1 text-xs">
          <Link href="/branch" className="flex flex-col items-center space-y-1">
            <IoIosGitBranch className="text-lg" />
            <span>Branch</span>
          </Link>
        </li>
        <li className="hoverTextRedEffect flex cursor-pointer  flex-col items-center justify-center space-y-1 text-xs">
          <Link href="/offers" className="flex flex-col items-center space-y-1">
            <IoGiftOutline className="text-lg" />
            <span>Offers</span>
          </Link>
        </li>
        <li className="hoverTextRedEffect flex cursor-pointer  flex-col items-center justify-center  space-y-1 text-xs">
          <Link
            href="/interest-rate"
            className="flex flex-col items-center space-y-1"
          >
            <AiOutlinePercentage className="text-lg" />
            <span className="text-center">Interest Rate</span>
          </Link>
        </li>
        <li className="hoverTextRedEffect flex cursor-pointer  flex-col items-center justify-center space-y-1 text-xs">
          <Link href="/forex" className="flex flex-col items-center space-y-1">
            <FaMoneyCheckDollar className="text-lg" />
            <span> Forex </span>
          </Link>
        </li>
        <li className="hoverTextRedEffect flex cursor-pointer  flex-col items-center justify-center space-y-1 text-xs">
          <Link href="/contact" className="flex flex-col items-center space-y-1">
            <HiOutlinePhone className="text-lg" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
