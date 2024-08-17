import React from "react";
import { HoverBorderGradient } from "@/components/AnimationComponents/HoverBorderGradient";
import { AnimatedModalWorking } from "../AnimationComponents/AnimatedModalWorking";
interface InputWithButtonProps {
  placeholder?: string;
  buttonText: string;
  onClick: () => void;
}

const InputWithButton: React.FC<InputWithButtonProps> = ({
  placeholder = "Website URL",
  buttonText,
  onClick,
}) => {


  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pr-32 py-2.5 pl-3 border border-lime-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-lime-300"
      />
      <div className="absolute right-0 top-0">
        <HoverBorderGradient
          containerClassName="rounded-sm"
          as="button"
          className="dark:bg-black bg-white text-white dark:text-white flex items-center  space-x-2"
        >
          <span className="text-white"><AnimatedModalWorking /></span>
           
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default InputWithButton;

//
