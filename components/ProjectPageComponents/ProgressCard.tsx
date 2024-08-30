"use client";
import React, { useState, useEffect } from "react";

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const data = [
    {
      title: "Hat",
      description: "To wear on the top",
      label: "Something | Flag",
      image: "https://picsum.photos/300/400?random=1",
    },
    {
      title: "Gloves",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ducimus, incidunt molestiae iure nesciunt beatae vero exercitationem similique perspiciatis accusantium molestias?",
      label: "Something | Winter",
      image: "https://picsum.photos/300/400?random=2",
    },
    {
      title: "Pack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ducimus, incidunt molestiae iure nesciunt beatae vero exercitationem similique perspiciatis accusantium molestias?",
      label: "Something | Footwear",
      image: "https://picsum.photos/300/400?random=3",
    },
    {
      title: "Hands",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ducimus, incidunt molestiae iure nesciunt beatae vero exercitationem similique perspiciatis accusantium molestias?",
      label: "Something | Footwear",
      image: "https://picsum.photos/300/400?random=4",
    },
    {
      title: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ducimus, incidunt molestiae iure nesciunt beatae vero exercitationem similique perspiciatis accusantium molestias?",
      label: "Something | Footwear",
      image: "https://picsum.photos/300/400?random=5",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
          return 0;
        }
        return prevProgress + 2; // Increase progress by 2% every 100ms
      });
    }, 100); // Update progress every 100ms

    return () => clearInterval(interval);
  }, [data.length]);

  const handleProgressBarClick = (index: number) => {
    setCurrentIndex(index);
    setProgress(0); // Reset the progress when clicking on a specific bar
  };

  return (
    <div className="w-full max-w-3xl h-96 border rounded-lg p-4 shadow-lg relative">
      <img
        src={data[currentIndex].image}
        alt={data[currentIndex].title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-4">{data[currentIndex].title}</h2>
      <span className="text-sm text-gray-500">{data[currentIndex].label}</span>
      <p className="text-gray-700 mt-2">{data[currentIndex].description}</p>
      {/* Progress Bars */}
      <div className="absolute mx-4 bottom-4 left-0 right-0 flex justify-center gap-2">
        {data.map((_, index) => (
          <div
            key={index}
            className="w-full h-2 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
            onClick={() => handleProgressBarClick(index)}
          >
            <div
              className={`h-full bg-blue-500 transition-all duration-100 ease-linear ${
                index === currentIndex ? "w-full" : "w-0"
              }`}
              style={{
                width: index === currentIndex ? `${progress}%` : "0%",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
