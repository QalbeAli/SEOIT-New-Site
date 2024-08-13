import React from "react";
import Image from "next/image";

const MarketingSection = () => {
  return (
    <div className=" py-8">
      <div className="container text-white mx-auto flex justify-around items-center flex-wrap">
        <div className="w-full lg:w-1/3 p-4 text-center md:text-right">
          <div className="space-y-6">
            <div className="space-y-4 ">
              <h3 className="font-bold text-xl">Targeted SEO</h3>
              <p>
                As an Internet marketing strategy, SEO <br /> considers tempor
                incididunt ut labore et.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-xl">Marketing outline</h3>
              <p>
                Social media marketing is the use of social <br /> media tempor
                incididunt ut labore et.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-xl">Content Writing</h3>
              <p>
                Content marketing is a form of marketing <br /> focused tempor
                incididunt ut labore et.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-4 flex justify-center">
          <div className="relative h-96 w-5/6 shadow-lg">
          <video
              src="/video1.mp4" // Update the path to your video
              controls
              autoPlay
              muted
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-4 text-center md:text-left">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-bold text-xl">Market Analysis</h3>
              <p>
                Content marketing is a form of marketing <br /> focused tempor
                incididunt ut labore et.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-xl">Innovative Solutions</h3>
              <p>
                Content marketing is a form of marketing <br /> focused tempor
                incididunt ut labore et.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-xl">Optimal Choice</h3>
              <p>
                Content marketing is a form of marketing <br /> focused tempor
                incididunt ut labore et.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;
