import React from "react";
import { IconType } from "react-icons";
import ShineBorder from "../magicui/shine-border";

type CardProps = {
  icon: IconType;
  title: string;
  description: string;
};

const CardDesign = ({ icon: Icon, title, description }: CardProps) => {
  return (
    <>
      <ShineBorder
        className=" flex  w-full flex-col items-center justify-center overflow-hidden rounded-3xl border bg-background md:shadow-xl"
        color={["#e9ffd8", "#d6fcb5", "#a9c98a"]}
      >
        <div className="bg-[#333333] p-6 rounded-lg shadow-xl text-center ">
          <div className="mb-4">
            <Icon className="w-12 h-12 mx-auto text-greenTouch" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-white mt-2 font-normal">{description}</p>
        </div>
      </ShineBorder>
    </>
  );
};

export default CardDesign;
