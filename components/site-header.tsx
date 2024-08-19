"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ConsultationModal from "@/components/NavbarComponents/ConsultationModal";
import { ContactUsModal } from "@/components/NavbarComponents/ContactUsModal";
import { CoolMode } from "@/components/magicui/cool-mode";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
  MenuItem,
  ProductItem,
} from "@/components/AnimationComponents/NavbarMenu";

const menuItem = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Services", href: "/services" },
  { id: 4, label: "Pricing", href: "/pricing" },
  { id: 5, label: "Blogs", href: "/blogs" },
  { id: 6, label: "Reviews", href: "/reviews" },
];

export function SiteHeader() {
  const mobilenavbarVariant = {
    initial: { opacity: 0, scale: 1 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, delay: 0.2, ease: "easeOut" },
    },
  };

  const mobileLinkVar = {
    initial: { y: "-20px", opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const containerVariants = {
    open: { transition: { staggerChildren: 0.06 } },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
  };

  const closeMenu = () => {
    setHamburgerMenuIsOpen(false);
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

  const [active, setActive] = useState<string | null>(null);

  const handleMenuItemClick = () => {
    setActive(null);
    closeMenu();
  };
  const router = useRouter();

  const handleContactPage = () => {
    console.log("Button clicked");
    router.push("/contact");
    closeMenu();
    
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <header className="fixed top-4 z-50 w-full max-w-6xl md:border rounded-full md:backdrop-blur-[12px]">
          <div className="container flex h-[6rem] items-center justify-between px-4 md:px-8">
            <Link className="text-md font-bold flex items-center" href="/">
              <div className="w-24 mt-1.5 flex justify-center items-center">
                <img src="/logo.webp" alt="logo" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center ">
              <Link className="mr-6 text-xl" href="/">
                Home
              </Link>
              <Link className="mr-6 text-xl" href="/about">
                About
              </Link>
              <div className="mr-6 text-xl">
                <MenuItem setActive={setActive} active={active} item="Services">
                  <div className="text-sm grid md:grid-cols-2 grid-cols-1 gap-10 p-4">
                    <ProductItem
                      onClick={handleMenuItemClick}
                      title="About Page"
                      href="/services"
                      src="https://assets.aceternity.com/demos/algochurn.webp"
                      description="Prepare for tech interviews like never before."
                    />
                    <ProductItem
                      onClick={handleMenuItemClick}
                      title="Tailwind Master Kit"
                      href="/services"
                      src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                      description="Production ready Tailwind css components for your next project"
                    />
                    <ProductItem
                      onClick={handleMenuItemClick}
                      title="Moonbeam"
                      href="/services"
                      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                      description="Never write from scratch again. Go from idea to blog in minutes."
                    />
                    <ProductItem
                      onClick={handleMenuItemClick}
                      title="Rogue"
                      href="/services"
                      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                      description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                    />
                  </div>
                </MenuItem>
              </div>
              <Link className="mr-6 text-xl" href="/pricing">
                Pricing
              </Link>
              <Link className="mr-6 text-xl" href="/blogs">
                Blogs
              </Link>
              <Link className="mr-6 text-xl" href="/reviews">
                Reviews
              </Link>
              <div className="flex justify-center items-center mr-12 space-x-3 flex-col md:flex-row space-y-2 md:space-y-0">
                <CoolMode>
                  <Button>Click Me! I Will Dare You!</Button>
                </CoolMode>
                <button
                  className={cn(
                    "text-2xl, bg-greenTouch text-black px-3 py-0.5 rounded-md font-bold"
                  )}
                  onClick={handleContactPage}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="ml-auto md:hidden text-greenTouch"
              onClick={toggleMenu}
            >
              <span className="sr-only ">Toggle menu</span>
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

                <button className="md:hidden" onClick={toggleMenu}>
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
                <motion.li
                  variants={mobileLinkVar}
                  className="w-full border-b border-gray-700"
                >
                  <Link
                    href="/"
                    className="block w-full py-2 text-xl text-gray-200 hover:text-white"
                    onClick={handleMenuItemClick}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVar}
                  className="w-full border-b border-gray-700"
                >
                  <Link
                    href="/about"
                    className="block w-full py-2 text-xl text-gray-200 hover:text-white"
                    onClick={handleMenuItemClick}
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVar}
                  className="w-full border-b border-gray-700"
                >
                  <Link
                    href="/services"
                    className="block w-full py-2 text-xl text-gray-200 hover:text-white"
                    onClick={handleMenuItemClick}
                  >
                    <div className="text-xl">
                      <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Services"
                      >
                        <div className="text-sm grid md:grid-cols-2 grid-cols-1 gap-10 p-4">
                          <ProductItem
                            onClick={handleMenuItemClick}
                            title="About Page"
                            href="/services"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Prepare for tech interviews like never before."
                          />
                          <ProductItem
                            onClick={handleMenuItemClick}
                            title="Tailwind Master Kit"
                            href="/services"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Production ready Tailwind css components for your next project"
                          />
                          <ProductItem
                            onClick={handleMenuItemClick}
                            title="Moonbeam"
                            href="/services"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                          />
                          <ProductItem
                            onClick={handleMenuItemClick}
                            title="Rogue"
                            href="/services"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs, and RFQs 10x faster using AI"
                          />
                        </div>
                      </MenuItem>
                    </div>
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVar}
                  className="w-full border-b border-gray-700"
                >
                  <Link
                    href="/pricing"
                    className="block w-full py-2 text-xl text-gray-200 hover:text-white"
                    onClick={handleMenuItemClick}
                  >
                    Pricing
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVar}
                  className="w-full border-b border-gray-700"
                >
                  <Link
                    href="/blogs"
                    className="block w-full py-2 text-xl text-gray-200 hover:text-white"
                    onClick={handleMenuItemClick}
                  >
                    Blogs
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVar}
                  className="w-full border-b border-gray-700"
                >
                  <Link
                    href="/reviews"
                    className="block w-full py-2 text-xl text-gray-200 hover:text-white"
                    onClick={handleMenuItemClick}
                  >
                    Reviews
                  </Link>
                </motion.li>

                <motion.li
                  variants={mobileLinkVar}
                  className="w-full border-b border-gray-700"
                >
                  <div className="flex justify-center items-center py-6 space-x-3 flex-col md:flex-row space-y-2 md:space-y-0">
                    <CoolMode>
                      <Button>Click Me! I Will Dare You!</Button>
                    </CoolMode>
                    <button
                      className={cn(
                        "text-2xl bg-greenTouch text-black px-3 py-0.5 rounded-md font-bold"
                      )}
                      onClick={handleContactPage}
                    >
                      Contact Us
                    </button>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
