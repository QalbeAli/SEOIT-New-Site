import React from "react";
import {
  FaAirbnb,
  FaAws,
  FaShopify,
  FaConfluence,
  FaLinkedin,
} from "react-icons/fa";
import Marquee from "@/components/magicui/marquee";

const CompanyLogoService = () => {
  return (
    <div className=" py-8 ">
      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="container mx-auto flex justify-around items-center max-w-6xl">
          <div className="w-1/5 p-2 flex justify-center">
            <FaAirbnb size={50} className="text-gray-500" />
          </div>
          <div className="w-1/5 p-2 flex justify-center">
            <FaAws size={50} className="text-gray-500" />
          </div>
          <div className="w-1/5 p-2 flex justify-center">
            <FaShopify size={50} className="text-gray-500" />
          </div>
          <div className="w-1/5 p-2 flex justify-center">
            <FaConfluence size={50} className="text-gray-500" />
          </div>
          <div className="w-1/5 p-2 flex justify-center">
            <FaLinkedin size={50} className="text-gray-500" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default CompanyLogoService;
