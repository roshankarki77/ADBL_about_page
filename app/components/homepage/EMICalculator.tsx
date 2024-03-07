"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Slider } from "../ui/slider";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanTerm, setLoanTerm] = useState(8);
  const [interestRate, setInterestRate] = useState(10);
  const [monthlyEmi, setMonthlyEmi] = useState(18750);

  useEffect(() => {
    calculateEmi();
  }, [loanAmount, loanTerm, interestRate]);

  const calculateEmi = () => {
    const principal = loanAmount;
    const rate = interestRate/ 1200; // monthly interest rate
    const time = loanTerm * 12; // loan term in months

    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    setMonthlyEmi(isFinite(emi) ? parseFloat(emi.toFixed(2)) : 0);
  };
  const handleLoanAmountChange = (value:any) => {
    setLoanAmount(value);
  };

  const handleLoanTermChange = (value:any) => {
    setLoanTerm(value);
  };

  const handleInterestRateChange = (value:any) => {
    setInterestRate(value);
  };

  return (
    <section className="my-8  ">
      <div className="mx-auto w-[95%] pt-2 sm:w-[85%] 2xl:max-w-[1320px]">
        <h2 className="my-8 text-center text-xl font-semibold">
          EMI Calculator
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="relative  lg:basis-1/3 ">
            <div className="absolute right-0 top-0 flex w-12 flex-col">
              <div className="bg-green-900">
                <img src="images/emihome.png" alt="" />
              </div>
              <div className="bg-green-900">
                <img src="images/emicar.png" alt="" />
              </div>
              <div className="bg-green-900">
                <img src="images/emibag.png" alt="" />
              </div>
            </div>
            <div className="w-full h-full">
              <img src="images/emipeople.png" className="w-full h-full object-cover rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl" alt="" />
            </div>
          </div>

          <div className="bg-[#F8F6E9] p-6  xl:p-20 basis-1/1 lg:basis-2/3 rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl">
            <div className="">

              <div className="mb-8">
                <label htmlFor="loanAmount">Loan Amount:</label>
                <div className="flex flex-col md:flex-row">
                  <Slider value={[loanAmount]} max={1500000} step={1} className="flex-0.6 mr-20 mt-6 md:my-auto"   onValueChange={handleLoanAmountChange}/>
                  <div className="mt-6 md:my-auto w-24 border-2 p-2 flex-0.2 min-w-24 text-center">{loanAmount }</div>
                </div>
              </div>
              <div className="mb-8">
                <label htmlFor="loanTerm">Loan Term (years):</label>
                <div className="flex flex-col md:flex-row">
                <Slider value={[loanTerm]} max={20} step={1} className="flex-0.6 mr-20 mt-6 md:my-auto" onValueChange={handleLoanTermChange}/>
                <div className="mt-6 md:my-auto w-24 border-2 p-2 flex-0.2 min-w-24 text-center">{loanTerm} yrs</div>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="interestRate">Interest Rate (%):</label>
                <div className="flex flex-col md:flex-row">
                <Slider value={[interestRate]} max={20} step={1} className="flex-0.6 mr-20 mt-6 md:my-auto" onValueChange={handleInterestRateChange}/>
                <div className="mt-6 md:my-auto w-24 border-2 p-2 flex-0.2 min-w-24 text-center">{interestRate} %</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row bg-white p-8 rounded-md items-center">
              <div className="flex  flex-1 justify-center items-center">
                  <div className=" max-w-20 p-4 border-2 border-[#CCCCCC] rounded-full ">
                    <img src="images/emihand.png" alt="" className="w-full" />
                  </div>
                  <div className="ml-8 text-center pr-7 max-w-20">
                    <div className="text-lg font-bold min-w-16">Monthly EMI</div>
                    <div className="text-md md:text-3xl font-bold ">{monthlyEmi}</div>
                  </div>
              </div>
              
              <div className="px-4 mx-8 border-r-2 h-32 border-[#CCCCCC] hidden md:block"></div>

              <div className="flex-1 mt-8 md:mt-0">
                <div className="flex flex-row">
                  <div className="mx-8">
                    <img src="images/emiarrow.png" width={30} alt="" />
                  </div>
                  <div>
                    <div className="font-bold">Interest Amount</div>
                    <div>800000</div>
                  </div>
                </div>
                <div className="h-[2px] w-62 bg-[hsl(0,5%,80%)] ml-8 my-6"></div>
                <div className="flex flex-row ">
                  <div className="mx-8">
                    <img src="images/emiarrow.png" width={30} alt="" />
                  </div>
                  <div>
                    <div className="font-bold">Total Amount Payable</div>
                    <div>1800000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
