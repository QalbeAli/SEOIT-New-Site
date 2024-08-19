import React, { useState } from "react";
import classNames from "classnames";

interface ContactButtonProps {
  label: string;
  onSelect: (label: string) => void;
  selected: boolean;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  label,
  onSelect,
  selected,
}) => {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    onSelect(label);
  };

  return (
    <button
      type="button" // Prevents form submission when this button is clicked
      className={classNames(
        "relative inline-block cursor-pointer overflow-hidden border-2 border-white text-center px-4 py-2 rounded-full text-3xl",
        { "bg-white text-black": selected }
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <span
        className={`absolute transition-transform duration-300 ${
          hover ? "translate-y-[-3rem] opacity-30" : "translate-y-0 opacity-100"
        }`}
      >
        {label}
      </span>
      <span
        className={`absolute transition-transform duration-300 ${
          hover ? "translate-y-0 opacity-30" : "translate-y-[3rem] opacity-100"
        }`}
      >
        {label}
      </span>
      <span
        className={`transition-opacity duration-1000 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default ContactButton;
