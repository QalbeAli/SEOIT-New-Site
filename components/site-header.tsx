"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ConsultationModal from "@/components/NavbarComponents/ConsultationModal";

const menuItem = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "/about",
  },
  {
    id: 3,
    label: "Services",
    href: "/services",
  },
  {
    id: 4,
    label: "Pricing",
    href: "/pricing",
  },
  {
    id: 4,
    label: "Blogs",
    href: "/blogs",
  },
  {
    id: 4,
    label: "Reviews",
    href: "/reviews",
  },
];

export function SiteHeader() {
  const mobilenavbarVariant = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const mobileLinkVar = {
    initial: {
      y: "-20px",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-[12px]">
        <div className="container flex h-[3.5rem] items-center justify-between px-4 md:px-8">
          <Link className="text-md font-bold flex items-center" href="/">
            <Image src="/logo.png" alt="MainLogo" width={48} height={48} className="text-white invert" />
            SEOIT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-auto items-center">
            <Link className="mr-6 text-lg" href="/">
              Home
            </Link>
            <Link className="mr-6 text-lg" href="/about">
              About
            </Link>
            <Link className="mr-6 text-lg" href="/services">
              Services
            </Link>
            <Link className="mr-6 text-lg" href="/pricing">
              Pricing
            </Link>
            <Link className="mr-6 text-lg" href="/blogs">
              Blogs
            </Link>
            <Link className="mr-6 text-lg" href="/reviews">
              Reviews
            </Link>
            <button
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "text-lg"
              )}
              onClick={() => {
                closeMenu(); 
                setIsModalOpen(true);
              }}
            >
              Contact Us
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="ml-auto md:hidden"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {hamburgerMenuIsOpen && (
          <motion.nav
            initial="initial"
            exit="exit"
            variants={mobilenavbarVariant}
            animate={hamburgerMenuIsOpen ? "animate" : "exit"}
            className="fixed inset-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px]"
          >
            <div className="container flex h-[3.5rem] items-center justify-between px-4">
              <Link className="text-md font-bold flex items-center" href="/">
                SEOIT
              </Link>

              <button
                className="md:hidden"
                onClick={() => setHamburgerMenuIsOpen((open) => !open)}
              >
                <span className="sr-only">Toggle menu</span>
                {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
              </button>
            </div>

            <motion.ul
              className="flex flex-col items-start px-4 mt-4 space-y-4 uppercase md:normal-case"
              variants={containerVariants}
              initial="initial"
              animate={hamburgerMenuIsOpen ? "open" : "exit"}
            >
              {menuItem.map((item) => (
                <motion.li
                  variants={mobileLinkVar}
                  key={item.id}
                  className="w-full border-b border-gray-700"
                >
                  <Link
                    className="block w-full py-2 text-xl text-gray-200 hover:text-white"
                    href={item.href}
                    onClick={() => setHamburgerMenuIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
