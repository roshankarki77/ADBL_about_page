import OfferSection from "@/app/components/homepage/OfferSection";
import SliderSection from "@/app/components/homepage/SliderSection";
import React from "react";
import LoanSection from "@/app/components/homepage/LoanSection";
import ServiceSection from "@/app/components/homepage/ServiceSection";
import Banner from "@/app/components/homepage/Banner";
import SavingDeposit from "@/app/components/homepage/SavingDeposit";
import EMICalculator from "@/app/components/homepage/EMICalculator";
import Faq from "@/app/components/homepage/Faq";

type Props = {};

const BusinessBankingPage = (props: Props) => {
  return (
    <main className="min-h-screen">
      <SliderSection />
      <OfferSection />
      <ServiceSection />
      <SavingDeposit />
      <LoanSection />
      <Banner />
      <EMICalculator />
      <Faq />
    </main>
  );
};

export default BusinessBankingPage;
