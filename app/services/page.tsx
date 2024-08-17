import { ServicesIconCloud } from "@/components/AnimationComponents/ServicesIconCloud";
import CallToActionService from "@/components/ServicesPageComponents/CallToActionService";
import Clients from "@/components/ServicesPageComponents/Clients";
import CompanyLogoService from "@/components/ServicesPageComponents/CompanyLogoService";
import ServicesGrid from "@/components/ServicesPageComponents/ServiceGrid";
import { ServiceHeroAnimation } from "@/components/ServicesPageComponents/ServiceHeroAnimation";
import React from "react";

const Services = () => {
  return (
    <>
      <ServiceHeroAnimation />
      <ServicesIconCloud />
      <ServicesGrid />
      <Clients />
      <CompanyLogoService />
      <CallToActionService />

    </>
  );
};

export default Services;
