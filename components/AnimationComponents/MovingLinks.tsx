"use client";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Link from "next/link";

interface SocialLink {
  name: string;
  link: string; // Replace with actual icon path
}

const socialLinks: SocialLink[] = [
  { name: "Instagram", link: "https://instagram.com/" },
  { name: "LinkedIn", link: "https://linkedin.com/" },
  { name: "Dribbble", link: "https://dribble.com/" },
  { name: "GitHub", link: "https://github.com/" },
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
          <Link href={link.link} target="_blank">
            <div className="absolute top-1/2 h-0 group-hover:h-full w-full flex justify-center items-center bg-white text-black -translate-y-1/2 transition-all ease-in duration-200">
              {hoveredIndex === index && (
                <VelocityScroll
                  text={`${link.name} ↗ `}
                  default_velocity={3}
                  className="font-display  text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-black md:text-2xl md:leading-[8rem]"
                />
              )}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovingLinks;
