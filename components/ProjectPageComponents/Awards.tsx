import React from "react";
import { motion } from "framer-motion";
const Awards = () => {
  const circlesData = [
    { id: 1, image: "/one.svg", text: "Top 100 Companies Worldwide by Clutch" },
    { id: 2, image: "/two.svg", text: "17 Honourable Mentions Awwwards" },
    { id: 3, image: "/three.svg", text: "100% job success on upwork" },
    { id: 4, image: "/one.svg", text: "Top 20 Digital Design Company by Clutch" },
    { id: 5, image: "/five.svg", text: "17 features on Behance platform" },
    { id: 6, image: "/five.svg", text: "#1 Team on Dribbble platform" },
    { id: 7, image: "/six.svg", text: "14 Special Kudos Design Award" },
    { id: 8, image: "/seven.svg", text: "Other awards and recognitions" },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full max-w-7xl mx-auto justify-items-center items-center my-20 space-y-10">
        {circlesData.map((circle) => (
          <div
            key={circle.id}
            className="bg-transparent flex flex-col justify-center items-center border-2 font-bold rounded-full w-64 h-56 md:w-64 md:h-64  uppercase
               hover:animate-colorShift transition-transform"
          >
            <img
              src={circle.image}
              alt={`circle-${circle.id}`}
              width={96}
              height={96}
              className="rounded-full"
            />
            <span className="text-center text-xs md:text-sm lg:text-base mt-6">
              {circle.text}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Awards;
