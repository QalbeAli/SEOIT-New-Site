"use client";
import React, { ReactNode } from "react";
import { DesktopNavbar } from "./DesktopNavbar";
import { motion } from "framer-motion";

const Wrapper = () => {
  const navItems = [
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "About",
      link: "/about",
    },

    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
    {
      title: "Reviews",
      link: "/reviews",
    },
  ];

  return (
    <>
      <motion.nav
        initial={{
          y: -80,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          ease: [0.6, 0.05, 0.1, 0.9],
          duration: 0.8,
        }}
        className="  fixed top-4 flex justify-center items-center  mx-auto inset-x-0 z-50 w-full"
      >
        <DesktopNavbar navItems={navItems} />
      </motion.nav>
    </>
  );
};

export default Wrapper;
