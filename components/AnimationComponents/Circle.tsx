import React from 'react';
import { motion } from 'framer-motion';

const Circle: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="bg-transparent flex flex-col justify-center items-center border-2 font-bold rounded-full w-96 h-96 uppercase"
        whileHover={{
          scale: 1.05,
          rotate: [0, -5, 5, -5, 5, 0], // Wiggle effect
          borderColor: ['#000000', '#FF6347', '#FFD700', '#4CAF50', '#000000'], // Color shift effect
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        }}
      >
        <img
          src="/john.webp"
          alt="johnn"
          width={96}
          height={96}
          className="rounded-full"
        />
        100% job success on upwork
      </motion.div>
    </div>
  );
};

export default Circle;
