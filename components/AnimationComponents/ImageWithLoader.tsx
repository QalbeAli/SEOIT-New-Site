"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ImageWithLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // Mocking a loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <motion.img
          src="/project1.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}
    </motion.div>
  );
};

export default ImageWithLoader;
