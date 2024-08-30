"use client";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  Card,
} from "@/components/AnimationComponents/AppleCardCarouselMain";
import { SparklesCore } from "../ui/sparkles";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export function ProjectCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-10">
      <div className="relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
        <section className=" py-12 md:py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white my-4">
              Our Projects
            </h1>
          </div>
        </section>
      </div>

      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <>
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  The first rule of Apple club is that you boast about Apple
                  club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take
                amazing class notes. Want to convert those notes to text? No
                problem. Langotiya jeetu ka mara hua yaar is ready to capture
                every thought.
              </p>
              <Image
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          </>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/project1.png",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/project2.png",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/project3.png",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
