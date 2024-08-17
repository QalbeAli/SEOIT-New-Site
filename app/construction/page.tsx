"use client";
// UnderConstruction.tsx
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CoolMode } from "@/components/magicui/cool-mode";

const containerVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};

export default function UnderConstruction() {
  const router = useRouter();

  const handleBackHome = () => {
    router.push("/");
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-black p-6"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
      >
        🚧 Page Under Construction 🚧
      </motion.h1>
      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.4 } }}
      >
        This page is currently being built. Please check back later.
      </motion.p>
      <CoolMode>
        <motion.button
          className="bg-lime-300 text-black py-2 px-4 rounded-md text-lg font-semibold"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleBackHome}
        >
          Back to Home
        </motion.button>
      </CoolMode>
    </motion.div>
  );
}
