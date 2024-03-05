import React from "react";

import { GrAtm } from "react-icons/gr";
import { IoIosGitBranch } from "react-icons/io";
import { IoGiftOutline } from "react-icons/io5";
import { AiOutlinePercentage } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi";
const SideMenu = () => {
  return (
    <div className="fixed top-24 z-50 hidden h-96 w-[55px] justify-evenly rounded-r-md bg-custom-red md:flex">
      <ul className="flex  flex-col justify-evenly text-sm text-white ">
        <li className="flex cursor-pointer flex-col items-center justify-center space-y-2 text-xs hover:text-custom-light-red">
          <GrAtm className="text-lg" />
          <span>ATM</span>
        </li>
        <li className="flex cursor-pointer flex-col  items-center justify-center space-y-1 text-xs hover:text-custom-light-red">
          <IoIosGitBranch className="text-lg" />
          <span>Branch</span>
        </li>
        <li className="flex cursor-pointer flex-col  items-center justify-center space-y-1 text-xs hover:text-custom-light-red">
          <IoGiftOutline className="text-lg" />
          <span>Offers</span>
        </li>
        <li className="flex cursor-pointer flex-col  items-center justify-center space-y-1  text-xs hover:text-custom-light-red">
          <AiOutlinePercentage className="text-lg" />
          <span className="text-center">Interest Rate</span>
        </li>
        <li className="flex cursor-pointer flex-col  items-center justify-center space-y-1 text-xs hover:text-custom-light-red">
          <FaMoneyCheckDollar className="text-lg" />
          <span> Forex </span>
        </li>
        <li className="flex cursor-pointer flex-col  items-center justify-center space-y-1 text-xs hover:text-custom-light-red">
          <HiOutlinePhone className="text-lg" />
          <span>Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
