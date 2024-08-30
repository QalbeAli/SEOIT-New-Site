"use client";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import {
  MenuItem,
  ProductItem,
} from "@/components/AnimationComponents/NavbarMenu";
import { AlignJustify, XIcon } from "lucide-react";

import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaTags,
  FaBlog,
  FaStar,
} from "react-icons/fa";
import { CoolMode } from "@/components/magicui/cool-mode";
import { useRouter } from "next/navigation";

export const MobileNavbar = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  const handleMenuItemClick = () => {
    setActive(null);
    closeMenu();
  };

  const closeMenu = () => {
    setHamburgerMenuIsOpen(false);
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

  const toggleMenu = () => {
    setHamburgerMenuIsOpen(!hamburgerMenuIsOpen);
  };

  const [active, setActive] = useState<string | null>(null);

  const router = useRouter();
  const handleContactPage = () => {
    router.push("/contact");
    closeMenu();
  };

  return (
    <div
      className={cn(
        "flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5 transition duration-200",
        showBackground &&
          " bg-neutral-900  shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]"
      )}
    >
      <Logo />
      <IoIosMenu
        className="text-white h-6 w-6"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-start justify-start space-y-10  pt-5  text-xl text-zinc-600  transition duration-200 hover:text-zinc-800">
          <div className="flex items-center justify-between w-full px-5">
            <Logo />
            <div className="flex items-center space-x-2">
              <IoIosClose
                className="h-8 w-8 text-white"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[14px] px-8">
            <ul
              className="flex flex-col mx-4 rounded-2xl items-start px-4 mt-4 space-y-4 uppercase md:normal-case"
            >
              <li
                className="w-full  border-gray-700"
              >
                <Link
                  href="/projects"
                  className="flex w-full py-2  items-center  text-xl   font-bold text-white"
                  onClick={handleMenuItemClick}
                >
                  Projects
                </Link>
              </li>
              <li
                className="w-full  border-gray-700"
              >
                <Link
                  href="/about"
                  className="flex items-center w-full py-2 text-xl  font-bold text-white"
                  onClick={handleMenuItemClick}
                >
                  About
                </Link>
              </li>
              <li
                className="w-full  border-gray-700"
              >
                <Link
                  href="/services"
                  className=" w-full py-2 text-xl  text-white"
                  onClick={handleMenuItemClick}
                >
                  <div className="relative py-2 flex items-center font-bold text-white">
                    
                    <div className="text-xl text-white ">
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
                            description="Production ready Tailwind css components for your next project."
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
                            description="Respond to government RFPs, RFIs, and RFQs 10x faster using AI."
                          />
                        </div>
                      </MenuItem>
                    </div>
                  </div>
                </Link>
              </li>
              <motion.li
                variants={mobileLinkVar}
                className="w-full  border-gray-700"
              >
                <Link
                  href="/pricing"
                  className="flex items-center w-full py-2 text-xl  font-bold text-white"
                  onClick={handleMenuItemClick}
                >
                   Pricing
                </Link>
              </motion.li>
              <motion.li
                variants={mobileLinkVar}
                className="w-full  border-gray-700"
              >
                <Link
                  href="/blogs"
                  className="flex items-center w-full py-2 text-xl  font-bold text-white"
                  onClick={handleMenuItemClick}
                >
                   Blogs
                </Link>
              </motion.li>
              <motion.li
                variants={mobileLinkVar}
                className="w-full  border-gray-700"
              >
                <Link
                  href="/reviews"
                  className="flex items-center w-full py-2 text-xl font-bold  text-white"
                  onClick={handleMenuItemClick}
                >
                 Reviews
                </Link>
              </motion.li>
            </ul>
          </div>
          <div className="flex flex-row w-full items-start gap-2.5  px-8 py-4 ">
            <Button>Book a demo</Button>
            <Button
              variant="simple"
              as={Link}
              href="/register"
              onClick={() => {
                setOpen(false);
              }}
            >
              Register
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
