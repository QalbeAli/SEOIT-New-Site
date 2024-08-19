"use client";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

interface SocialLink {
  name: string;
  icon: string; // Replace with actual icon path
}

const socialLinks: SocialLink[] = [
  { name: "Instagram", icon: "/instagram-icon.svg" },
  { name: "LinkedIn", icon: "/linkedin-icon.svg" },
  { name: "Dribbble", icon: "/dribbble-icon.svg" },
  { name: "GitHub", icon: "/github-icon.svg" },
];

const MovingLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {socialLinks.map((link, index) => (
        <div
          key={link.name}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative border-t border-b border-white text-white group"
        >
          <div className="flex justify-between items-center mx-12 py-12">
            <div className="font-semibold text-3xl">{link.name}</div>
            <div className="text-5xl">
              <MdArrowOutward />
            </div>
          </div>
          <div className="absolute top-1/2 h-0 group-hover:h-full w-full flex justify-center items-center bg-white text-black -translate-y-1/2 transition-all ease-in duration-200">
            {hoveredIndex === index && (
              <VelocityScroll
                text={`${link.name} ↗ `}
                default_velocity={3}
                className="font-display  text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-black md:text-2xl md:leading-[8rem]"
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default MovingLinks;
