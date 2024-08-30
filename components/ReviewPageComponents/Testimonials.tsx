"use client";
import React from "react";
import { TestimonialsSlider } from "@/components/ReviewPageComponents/testimonials/slider";
import { FeatureIconContainer } from "@/components/Features/feature-icon-container";
import { Heading } from "@/components/ui/heading";
import { Subheading } from "@/components/ui/subheading";
import { TbLocationBolt } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { testimonials } from "@/constants/page-testimonials";
import Image from "next/image";
import { TestimonialsGrid } from "@/components/ReviewPageComponents/testimonials/grid";
import { AmbientColor } from "@/components/ui/ambient-color";

export const NewTestimonials = () => {
  return (
    <div className="relative">
      <AmbientColor />
      <div className="pb-20">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <TbLocationBolt className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading className="pt-4">Used by entreprenurs</Heading>
        <Subheading>
          Proactiv is used by serial entrepreneurs and overachievers.
        </Subheading>
      </div>

      <div className="py-60 relative">
        <div className="absolute inset-0 h-full w-full bg-charcoal opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_90%)]">
          <TestimonialsGrid />
        </div>
        <TestimonialsSlider />
      </div>
      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-charcoal to-transparent"></div>
    </div>
  );
};
