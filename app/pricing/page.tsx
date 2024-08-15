"use client";
import PricingSection from "@/components/landing/pricing-section";
import FaqDropdown from "@/components/PricingPageComponent/FaqDropdown";
import Reviews from "@/components/PricingPageComponent/Review";
import React from "react";

const Pricing = () => {
  // const amount = 49.99;
  return (
    <>
      {/* <PricingCard /> */}
      <PricingSection />
      <Reviews />
      {/* <FAQ /> */}
      <FaqDropdown />
    </>
  );
};

export default Pricing;
