"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import InputButton from "../HomePageComponents/InputButton";
import { HoverBorderGradient } from "../AnimationComponents/HoverBorderGradient";
import SplineComponent from "../AnimationComponents/SplineComponent";
import { AnimatedGradientTextDemo } from "../AnimationComponents/AnimatedGradientTextDemo";
import InputWithButton from "../HomePageComponents/InputWithButton";

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
    >
     
      <h1 className="bg-gradient-to-br dark:from-white from-black from-0% dark:to-white/40 to-black/40 bg-clip-text py-6 text-3xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        All Your Growth Hacking Deliverables
        <br className="hidden md:block" /> in 1 Platform
      </h1>
      <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        SEO, IT Custom Websites, Social Media, 3D Design & Growth Hacking
        Services
        <br className="hidden md:block" /> For Businesses over $1M+ a year
      </p>
      
      <div className="flex justify-center items-center">
        <InputWithButton placeholder="Website URL" buttonText="Audit Now" onClick={() => {}} />
      </div>
      <div
        ref={ref}
        className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
      >
        <div
          className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-four),var(--color-four),transparent_40%)] ${
            inView ? "before:animate-image-glow" : ""
          }`}
        >
          <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom="var(--color-four)"
            colorTo="var(--color-four)"
          />

          <img
            src="/hero-dark.png"
            alt="Hero Image"
            className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block"
          />
          <img
            src="/hero-light.png"
            alt="Hero Image"
            className="block relative w-full h-full  rounded-[inherit] border object-contain dark:hidden"
          />
        </div>
      </div>
    </section>
  );
}
