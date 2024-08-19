"use client"
import React, { useState } from 'react';
import CustomerReview from './CustomerReview';
import { FaDotCircle } from "react-icons/fa";
const reviews = [
  {
    imageSrc: 'john.webp',
    review: 'Excellent customer service, You guys are the best!',
    name: 'Stephen Fanous',
    title: 'CEO - Marketplace Fresh',
    companyLogo: 'https://via.placeholder.com/50'
  },
  {
    imageSrc: 'john.webp',
    review: 'Great experience, will recommend to others!',
    name: 'Stephen Fanous',
    title: 'CEO - Marketplace Fresh',
    companyLogo: 'https://via.placeholder.com/50'
  },
  {
    imageSrc: 'john.webp',
    review: 'Top-notch service and support!',
    name: 'Stephen Fanous',
    title: 'CEO - Marketplace Fresh',
    companyLogo: 'https://via.placeholder.com/50'
  }
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="flex flex-col items-center">
      <CustomerReview {...reviews[currentIndex]} />
      <div className="flex space-x-2 mt-4">
        <button
          className={` ${currentIndex === 0 ? 'text-lime-400' : 'text-gray-300'}`}
          onClick={() => setCurrentIndex(0)}
        ><FaDotCircle/></button>
         <button
          className={` ${currentIndex === 1 ? 'text-lime-400' : 'text-gray-300'}`}
          onClick={() => setCurrentIndex(1)}
        ><FaDotCircle/></button>
       <button
          className={` ${currentIndex === 2 ? 'text-lime-400' : 'text-gray-300'}`}
          onClick={() => setCurrentIndex(2)}
        ><FaDotCircle/></button>
      </div>
    
    </div>
  );
};

export default Reviews;
