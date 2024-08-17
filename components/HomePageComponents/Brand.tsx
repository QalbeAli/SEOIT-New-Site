import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
const Brand = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center  relative">
        {/* Background and Shooting Stars */}
        <div className="h-[20rem] rounded-md bg-black flex flex-col items-center justify-center w-full relative">
          <ShootingStars className="absolute inset-0 z-10" />
          <StarsBackground className="absolute inset-0 z-0" />
        </div>

        {/* Content on Top */}
        <div className="absolute text-center space-y-6 z-20 ">
          <div className="text-white font-bold text-3xl">Build Your Brand</div>
          <div className="text-white">
            We help our clients achieve tangible, high-impact results
          </div>
          <div className="text-white">
            Tempor incididunt ut labore et dolore magna aliqua
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
