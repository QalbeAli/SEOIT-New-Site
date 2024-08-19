"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface RotatingImageProps {
  imageSrc: string;
  text: string;
  speed: number;
  // Add other props as needed
}

const RotatingImage: React.FC<RotatingImageProps> = ({ imageSrc, text, speed }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative">
      <Image
        src={imageSrc}
        alt="Description of the image"
        width={24}
        height={24}
        className="rounded-full" // Adjust the class for your desired image shape
      />
      {isMounted && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className={`text-lg font-bold animate-spin duration-${speed}s`}>{text}</h2>
        </div>
      )}
    </div>
  );
};

export default RotatingImage;