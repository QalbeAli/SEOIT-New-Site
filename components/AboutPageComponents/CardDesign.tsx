import React from "react";
import { IconType } from 'react-icons';
type CardProps = {
    icon: IconType;
    title: string;
    description: string;
  };

const CardDesign = ({ icon:Icon, title, description }: CardProps) => {
  return (
    <>
      <div className="bg-[#333333] p-6 rounded-lg shadow-xl text-center ">
        <div className="mb-4">
        <Icon className="w-12 h-12 mx-auto text-greenTouch" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white mt-2 font-normal">{description}</p>
      </div>
    </>
  );
};

export default CardDesign;
