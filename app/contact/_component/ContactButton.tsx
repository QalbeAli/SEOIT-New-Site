// import React, { useState } from "react";
// import AnimatedCursor from 'react-animated-cursor'; // Import the AnimatedCursor component

// interface ContactButtonProps {
//   label: string;
//   onSelect: (label: string) => void;
//   selected: boolean;
// }

// const ContactButton: React.FC<ContactButtonProps> = ({ label, onSelect, selected }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

//   const handleClick = () => {
//     onSelect(label);
//   };

//   const borderWidth = "0.1em";
//   const cubeDepth = "20px";
//   const height = "4.2em";
//   const borderSize = `calc(${cubeDepth} + ${borderWidth})`;

//   const buttonStyle: React.CSSProperties = {
//     color: selected ? "#000" : "transparent",
//     textShadow: `0 calc(-1 * var(--t, 0em)) #fff, 0 calc(${height} - var(--t, 0em)) #000`,
//     border: `solid ${selected ? '#000' : '#fff'}`,
//     overflow: "hidden",
//     borderWidth: `${borderWidth} ${borderSize} ${borderSize} ${borderWidth}`,
//     padding: '1rem 2rem',
//     background: selected
//       ? `#fff`
//       : `
//         linear-gradient(#fff 0 0) -1px 100% / 101% var(--p, 0%) no-repeat,
//         conic-gradient(from -90deg at right ${cubeDepth} bottom ${cubeDepth},
//           #0000 90deg, rgba(255, 255, 255, 0.3) 0 225deg, rgba(255, 255, 255, 0.6) 0) border-box,
//         conic-gradient(at right ${borderSize} bottom ${borderSize},
//           #fff 270deg, #0000 0) 100% 100% / calc(100% - ${borderWidth}) calc(100% - ${borderWidth}) border-box`,
//     clipPath: `
//       polygon(0% 0%,
//         calc(100% - ${cubeDepth}) 0%,
//         calc(100% - ${cubeDepth}) 0%,
//         calc(100% - ${cubeDepth}) calc(100% - ${cubeDepth}),
//         0 calc(100% - ${cubeDepth}),
//         0 calc(100% - ${cubeDepth}))`,
//     transition: "0.5s",
//     transform: isHovered ? "translate(0, 0)" : "none",
//     "--t": isHovered ? height : "0em",
//     "--p": isHovered ? "105%" : "0%",
//   };

//   return (
//     <div>
//       <button
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onClick={handleClick}
//         style={buttonStyle}
//         className="text-4xl whitespace-nowrap transition-transform duration-500"
//       >
//         {label}
//       </button>
//     </div>
//   );
// };

// export default ContactButton;




interface ContactButtonProps {
  label: string;
  onSelect: (label: string) => void;
  selected: boolean;
}


import React, { useState } from 'react';
import classNames from 'classnames'
const ContactButton: React.FC<ContactButtonProps> = ({ label, onSelect, selected }) => {
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    onSelect(label);
  };

  return (
    <button
      className={classNames("relative inline-block cursor-pointer overflow-hidden border-2 border-white text-center px-4 py-2 rounded-full text-4xl",
        { "bg-white text-black": selected }
      )

      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <span
        className={`absolute transition-transform duration-300 ${hover ? 'translate-y-[-3rem] opacity-30' : 'translate-y-0 opacity-100'
          }`}
      >
        {label}
      </span>
      <span
        className={`absolute transition-transform duration-300 ${hover ? 'translate-y-0 opacity-30' : 'translate-y-[3rem] opacity-100'
          }`}
      >
        {label}
      </span>
      <span
        className={`transition-opacity duration-1000 ${hover ? 'opacity-100' : 'opacity-0'
          }`}
      >
        {label}
      </span>
    </button>
  );
};

export default ContactButton;
