"use client";
import { useState } from "react";
import FolderWrapper from "../FolderLayout/FolderCardContainer";
import ProjectCard from "../ProjectCard";
import Sidebar from "./SideBar";
import TextReveal from "@/components/magicui/text-reveal";
const SecondSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="flex items-start flex-col md:flex-row justify-between mt-40 gap-12 lg:gap-12">
      <div className=" w-full max-w-md md:h-screen md:sticky md:top-[10%] p-4 shadow-md">
        <Sidebar />
      </div>

      <div>
        <TextReveal
          className="text-white"
          text="We've helped over 350 firms reach their full potential, and we're happy to do the same for you! Find out how our skills can contribute to your success."
        />

        <div className="grid !grid-cols-1 md:!grid-cols-2 !gap-y-20">
          {Array.from({ length: 10 }).map((_, index) => {
            return (
              <ProjectCard
                key={index}
                index={index}
                hoveredIndex={hoveredIndex}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
                image="https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66bc83769af253c52bbc682e_Preview.webp"
                flagContent={
                  <span className="text-gray-500">
                    web3 | <strong>flag</strong>
                  </span>
                }
                description={
                  <>
                    <p className="font-bold text-xl">
                      Voluptas aut in modi impedit recusandae soluta repellat
                      corporis ad nam qui maxime, hic quo blanditiis ipsum
                      dolorum.
                    </p>
                  </>
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
