"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { Scrollbar } from "smooth-scrollbar-react";
import ContactPageButton from "./ContactButton";
import FlipText from "@/components/magicui/flip-text";
const ContactPage = () => {
  const [selectedPets, setSelectedPets] = useState<string[]>([]);

  const handleSelect = (label: string) => {
    setSelectedPets((prevSelectedPets) =>
      prevSelectedPets.includes(label)
        ? prevSelectedPets.filter((pet) => pet !== label)
        : [...prevSelectedPets, label]
    );
  };

  const pets = [
    "Site from Scratch",
    "UX/UI design",
    "Production design",
    "No-code site",
    "Motion design",
    "Branding",
    "Mobile development",
  ];

  return (
    <Scrollbar
      damping={0.08}
      thumbMinSize={60}
      alwaysShowTracks
      continuousScrolling
      className="w-full max-w-7xl mx-auto my-40 h-[300vh]"
    >
      <div className="">
        <div className=" ">
          <h1 className="text-[100px] inline">
            Hey!{" "}
            <FlipText
              className="text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
              word="Tell us all the things 👋"
            />
          </h1>

          <div className="mt-32 space-y-6">
            <p className="text-3xl">I'm interested in...</p>
            <div>
              <div className="flex flex-wrap gap-4">
                {pets.map((pet) => (
                  <ContactPageButton
                    key={pet}
                    label={pet}
                    selected={selectedPets.includes(pet)}
                    onSelect={handleSelect}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatedCursor
        color="255, 255, 255 , 0.3" // Cursor color in RGB format
        innerSize={8} // Size of the inner cursor
        outerSize={0} // Size of the outer cursor
        outerAlpha={0.3} // Opacity of the outer cursor
        innerScale={10} // Scale of the inner cursor
        outerScale={10} // Scale of the outer cursor
        innerStyle={{}}
        clickables={["button", "a", "h1"]} // Elements that trigger cursor animations
      />
    </Scrollbar>
  );
};

export default ContactPage;
