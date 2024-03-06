"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Slider } from "../ui/slider";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanTerm, setLoanTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [monthlyEmi, setMonthlyEmi] = useState(0);
  const [sliderValue, setSliderValue] = useState(1000000);

  // useEffect(() => {
  //   // calculateEmi();
  // }, [loanAmount, loanTerm, interestRate]);

  // const calculateEmi = () => {
  //   const principal = loanAmount;
  //   const rate = parseFloat(((interestRate)) / 1200); // monthly interest rate
  //   const time = parseFloat((loanTerm)) * 12; // loan term in months

  //   const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
  //   setMonthlyEmi(isFinite(emi) ? emi.toFixed(2) : 0);
  // };
  const handleLoanAmountChange = (e: any) => {};
  const handleLoanTermChange = (e: any) => {};
  const handleInterestRateChange = (e: any) => {};

  const calculateEMI = () => {};
  const monthlyEMI = 0;
  const handleSliderChange = (value:any) => {
    setSliderValue(value);
  };

  return (
    <section className="my-8  ">
      <div className="mx-auto w-[95%] pt-2 sm:w-[85%] 2xl:max-w-[1320px]">
        <h2 className="my-8 text-center text-xl font-semibold">
          EMI Calculator
        </h2>
        <div>
          <div className="relative ">
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
            <div>
              <img src="images/emipeople.png" width={390} alt="" />
            </div>
          </div>

          <div className="bg-[#F8F6E9] p-12">
            <div className="">
              <div className="mb-8">
                <label htmlFor="loanAmount">Loan Amount:</label>
                <div className="flex ">
                <Slider value={[sliderValue]} max={1500000} step={1} className="mt-2 flex-0.6 mr-20"   onValueChange={handleSliderChange}/>
                <div className="mt-4 w-24 border-2 p-2 flex-0.2">{sliderValue }</div>

                </div>
              </div>
              <div className="mb-8">
                <label htmlFor="loanTerm">Loan Term (years):</label>
                <div className="flex ">
                <Slider defaultValue={[33]} max={100} step={1} className="mt-2 flex-0.6 mr-20"/>
                <div className="mt-4 w-24 border-2 p-2">100000</div>
                </div>
              </div>
              <div className="mb-8">
                <label htmlFor="interestRate">Interest Rate (%):</label>
                <div className="flex ">
                <Slider defaultValue={[33]} max={100} step={1} className="mt-2 flex-0.6 mr-20"/>
                <div className="mt-4 w-24 border-2 p-2">100000</div>
                </div>
              </div>
              <button onClick={calculateEMI}>Calculate EMI</button>
              <div>Monthly EMI: {monthlyEMI}</div>
            </div>

            <div className="flex bg-white p-8 rounded-md items-center justify-around">
              <div className="flex flex-1 justify-around items-center">
                  <div>
                    <img src="images/emihand.png" alt="" />
                  </div>
                  <div>
                    <div>Monthly EMI</div>
                    <div>18,750</div>
                  </div>
              </div>
              
              <div className=" border-r-2 h-24 border-[#CCCCCC]"></div>
              <div className="flex-1">
                <div className="flex flex-row">
                  <div className="mx-8">
                    <img src="images/emiarrow.png" width={30} alt="" />
                  </div>
                  <div>
                    <div>Interest Amount</div>
                    <div>800000</div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div>
                    <img src="images/emiarrow.png" width={30} alt="" />
                  </div>
                  <div>
                    <div>Total Amount Payable</div>
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
