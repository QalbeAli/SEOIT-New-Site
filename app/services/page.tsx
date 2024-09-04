import { ServicesIconCloud } from "@/components/AnimationComponents/ServicesIconCloud";
import ClientSection from "@/components/landing/client-section";
import CallToActionService from "@/components/ServicesPageComponents/CallToActionService";
import Clients from "@/components/ServicesPageComponents/Clients";
import CompanyLogoService from "@/components/ServicesPageComponents/CompanyLogoService";
import ServicesGrid from "@/components/ServicesPageComponents/ServiceGrid";
import { ServiceHeroAnimation } from "@/components/ServicesPageComponents/ServiceHeroAnimation";
import { SphereMask } from "@/components/magicui/sphere-mask";

import React from "react";
import { MacbookScroll } from "@/components/macbook";
import HeadingSection from "@/components/ServicesPageComponents/HeadingSection";

const Services = () => {
  return (
    <>
      <HeadingSection />
      <MacbookScroll src={`/dashboard.png`} showGradient={true} />
      {/* <ServiceHeroAnimation /> */}
      <SphereMask />
      <ServicesIconCloud />
      <ServicesGrid />
      <Clients />
      <ClientSection />
      <CallToActionService />
    </>
  );
};

export default Services;
