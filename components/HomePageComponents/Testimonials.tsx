import React from "react";
import Image from "next/image";
import { SparklesCore } from "../ui/sparkles";
import { InfiniteMovingCardsDemo } from "../AnimationComponents/InfiniteMovingCardsDemo";
import { FlipWords } from "../ui/flip-words";
const Testimonials = () => {
  const words = ["Perfect", "Good", "Best", "Modern"];
  return (
    <>
      <div className="text-center">
        <div className=" pt-16 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className=" text-5xl py-2 font-bold text-center text-white relative z-20">
            Our Client Says <FlipWords words={words} /> <br />  
          </h1>
         
        </div>
      </div>
      <InfiniteMovingCardsDemo />
    </>
  );
};

export default Testimonials;

// {/* <div className=" p-8">
//   <div className="container mx-auto max-w-5xl">
//     <div className="text-center">
//       <div className=" pt-12 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//         <h1 className=" text-5xl py-4 font-bold text-center text-white relative z-20">
//           Our Client Says
//         </h1>
//         <div className="w-[40rem] h-40 relative">
//           {/* Gradients */}
//           <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//           <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//           <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//           <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//           {/* Core component */}
//           <SparklesCore
//             background="transparent"
//             minSize={0.4}
//             maxSize={2}
//             particleDensity={1200}
//             className="w-full h-full"
//             particleColor="#FFFFFF"
//           />

//           {/* Radial Gradient to prevent sharp edges */}
//           <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//         </div>
//       </div>
//     </div>

//     <div className="mt-8 flex flex-col md:flex-row items-center md:space-x-8">
//       <div className="w-full md:w-1/3">
//         <Image
//           src="/client.png"
//           alt="Stephen Fanous"
//           width={500}
//           height={500}
//           className="rounded-lg"
//         />
//       </div>
//       <div className="w-full md:w-2/3 mt-8 md:mt-0">
//         <div className="flex items-center">
//           <div className="text-6xl text-gray-400 mr-4">“</div>
//           <p className="text-white text-xl">
//             This Is Probably The Most Underrated Website & SEO Agency In The
//             World. The Quality Of My New Website&apos;s Design & Functionality
//             Are Incredible!
//           </p>
//         </div>
//         <div className="mt-4 text-center md:text-left">
//           <h3 className="text-xl font-bold">STEPHEN FANOUS</h3>
//           <p className="white">CEO Of Marketplace Fresh</p>
//         </div>
//       </div>
//     </div>
//     <div className="mt-8 flex justify-center space-x-4">
//       <button className="px-4 py-2 bg-white border border-black rounded">
//         <span>⬅️</span>
//       </button>
//       <button className="px-4 py-2 bg-white border border-black rounded">
//         <span>➡️</span>
//       </button>
//     </div>
//   </div>
// </div>; */}
