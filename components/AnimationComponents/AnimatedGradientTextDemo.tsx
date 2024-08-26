import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { useEffect, useState } from "react";
import { getUserLocation } from "@/utils/getUserLocation";
import WorldFlag from 'react-world-flags';
import CountryFlag from "../HomePageComponents/CountryFlag";

export async function AnimatedGradientTextDemo() {


  return (
    <div className="z-10 flex pt-36 items-center px-2 justify-center">
      <AnimatedGradientText>
        <div
          className={cn(
            "group rounded-full  bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200  dark:bg-transparent dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <CountryFlag /> <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" /> Top
            Growing Agency SEO iT Social
          </AnimatedShinyText>
        </div>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}
