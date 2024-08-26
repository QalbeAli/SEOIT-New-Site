"use client";
import { useEffect, useState } from "react";
import Carousal from "../ProgressCard";

const FolderCarousalWrapper = ({
  // children,
  ...props
}: React.ComponentProps<"svg">) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const data = [
    {
      description: "To wear on the top",
      label: "Something | Flag",
      image: "https://picsum.photos/1600/400?random=1",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ducimus, incidunt molestiae iure nesciunt beatae vero exercitationem similique perspiciatis accusantium molestias?",
      label: "Something | Winter",
      image: "https://picsum.photos/1600/400?random=2",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ducimus, incidunt molestiae iure nesciunt beatae vero exercitationem similique perspiciatis accusantium molestias?",
      label: "Something | Footwear",
      image: "https://picsum.photos/1600/400?random=3",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ducimus, incidunt molestiae iure nesciunt beatae vero exercitationem similique perspiciatis accusantium molestias?",
      label: "Something | Footwear",
      image: "https://picsum.photos/1600/400?random=4",
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
    <div className=" w-full h-full">
      <div className="relative w-full h-full p-[1px] overflow-hidden">
        {/* Background Image */}
        <div
          style={{
            backgroundImage:
              // "url('https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66bc83769af253c52bbc682e_Preview.webp')",
              `url(${data[currentIndex].image})`,
          }}
          className="bg-cover h-full w-full bg-no-repeat bg-center absolute inset-0 z-1 "
        />
        <div className="absolute inset-0 border-2 border-[#02021E] " />
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1280 1128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative overflow-hidden "
          {...props}
        >
          <path
            d="M0 45.5C5.8095 16.536 16.5223 6.509 45.7436 0.00549451L0 0V45.5Z"
            fill="#02021E"
          />
          ``
          <path
            d="M45.5 1128C16.536 1122.19 6.50887 1111.22 0.00536908 1082L0 1128L45.5 1128Z"
            fill="#02021E"
          />
          ``
          <path
            d="M1280 0L382 0.5C397.542 2.04873 403.5 5 415.5 15.5C415.5 15.5 427.5 27 441.5 42C455.5 57 466.53 63.8237 484 64.5C484 64.5 1205 64 1231.5 64.5C1258 65 1273.29 77.5959 1280 109.5V0Z"
            fill="#02021E"
          />
          <path
            d="M1280 1082C1274.19 1110.96 1263.22 1121.5 1234 1128L1280 1128L1280 1082Z"
            fill="#02021E"
          />
          ``
          <foreignObject
            x="0"
            y="0"
            width="100%"
            height="100%"
            className="relative"
          >
            <div className="h-96 border rounded-b-[50px] p-4 shadow-lg absolute bottom-0 w-full bg-white px-20">
              {/* <img
              src={data[currentIndex].image}
              alt={data[currentIndex].title}
              className="w-full h-48 object-cover rounded-lg"
            /> */}

              <span className="text-[50px]  text-black">
                {data[currentIndex].label}
              </span>
              <p className="text-gray text-[70px] text-black font-bold leading-none mt-5 truncate">
                {data[currentIndex].description}
              </p>

              {/* Progress Bars */}
              <div className="absolute bottom-10 max-w-5xl hidden mx-auto w-full left-0 right-0 md:flex justify-center gap-2 mt-20">
                {data.map((_, index) => (
                  <div
                    key={index}
                    className="w-full h-4 bg-gray-200 rounded-full overflow-hidden cursor-pointer"
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
          </foreignObject>
        </svg>
      </div>
      <div className=" md:hidden mx-auto w-full max-w-xl left-0 right-0 flex justify-center gap-2 mt-5">
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

export default FolderCarousalWrapper;
