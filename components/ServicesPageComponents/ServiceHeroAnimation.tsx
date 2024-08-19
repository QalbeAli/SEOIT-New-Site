"use client";
import React from "react";
import { ContainerScroll } from "@/components/AnimationComponents/ContainerScrollAnimation";
import Image from "next/image";
import Meteors from "@/components/magicui/meteors";
export function ServiceHeroAnimation() {
  return (
    <div className="flex flex-col overflow-hidden">
        
      <ContainerScroll
        titleComponent={
          <div className="mt-24 leading-snug">
            <h1 className="text-4xl font-semibold text-white ">
            We change the way you
            build  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-normal">
              Gatsby Sites
              </span>
            </h1>
          </div>
        }
      >
        <Image
          src={`/test2.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
