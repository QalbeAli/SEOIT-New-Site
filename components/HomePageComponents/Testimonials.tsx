import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className=" p-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold">OUR CLIENT SAY</h1>
          <p className="text-white mt-2">
            Creative Fuels Design Fuels Creativity, Be Here For More, Are You In Love with A Creative?
          </p>
        </div>
     
        <div className="mt-8 flex flex-col md:flex-row items-center md:space-x-8">
          <div className="w-full md:w-1/3">
            <Image 
              src="/client.png" 
              alt="Stephen Fanous" 
              width={500} 
              height={500} 
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3 mt-8 md:mt-0">
            <div className="flex items-center">
              <div className="text-6xl text-gray-400 mr-4">“</div>
              <p className="text-white text-xl">
                This Is Probably The Most Underrated Website & SEO Agency In The World. The Quality Of My New Website&apos;s Design & Functionality Are Incredible!
              </p>
            </div>
            <div className="mt-4 text-center md:text-left">
              <h3 className="text-xl font-bold">STEPHEN FANOUS</h3>
              <p className="white">CEO Of Marketplace Fresh</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-4 py-2 bg-white border border-black rounded">
            <span>⬅️</span>
          </button>
          <button className="px-4 py-2 bg-white border border-black rounded">
            <span>➡️</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
