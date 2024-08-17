import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

export async function AnimatedGradientTextDemo() {
  return (
    <div className="z-10 flex pt-32 items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#e9ffd8] via-[#d6fcb5] to-[#a9c98a] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Introducing SEOIT
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}
