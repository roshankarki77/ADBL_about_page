import Image from "next/image";
import React from "react";

const EMICalculator = () => {
  return (
    <section className="my-8  ">
      <div className="mx-auto w-[85%] pt-8">
        <h2 className="my-8 text-center text-xl font-semibold">
          EMI Calculator
        </h2>
        <Image
          src={"/images/emi-calculator.png"}
          alt="emi-calculator"
          width={1250}
          height={800}
        />
      </div>
    </section>
  );
};

export default EMICalculator;
