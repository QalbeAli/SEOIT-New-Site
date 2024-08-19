import Image from "next/image";
import React from "react";
import { Cover } from "@/components/AnimationComponents/SparkleCover";

const AboutStory = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col py-10">
        <div>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Discover the SEO IT Social Story
          </h1>
        </div>
        <div className="font-normal text-center text-xl my-8 text-white">
          We have generated over $50m+ in the last 7 years, now it’s your turn!
        </div>
        <p className="max-w-5xl text-center w-full mb-8">
          SEO IT Social was born just 6 months ago when three passionate
          founders, each with 7 years of experience in their respective fields,
          came together to solve a common problem—existing online platforms were
          just not cutting it. Frustrated by the limitations and inefficiencies
          we encountered, we decided to create a platform that would break the
          mold.
        </p>
        <div className="mx-4">
          <Image src="/hero.webp" alt="HeroImage" width={1000} height={600} />
        </div>
      </div>
    </>
  );
};

export default AboutStory;
