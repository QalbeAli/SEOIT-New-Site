"use client";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";
import { NavBarItem } from "@/components/NavbarComponents/navbar-item";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import { useRouter } from "next/navigation";
import { CoolMode } from "@/components/magicui/cool-mode";
import { AlignJustify, XIcon } from "lucide-react";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaTags,
  FaBlog,
  FaStar,
} from "react-icons/fa";

import {
  MenuItem,
  ProductItem,
} from "@/components/AnimationComponents/NavbarMenu";

// Upper Are Imports

type Props = {
  navItems: {
    link: string;
    title: string;
    target?: "_blank";
  }[];
};

export const DesktopNavbar = ({ navItems }: Props) => {
  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

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
    router.push("/contact");
    closeMenu();
  };

  return (
    <motion.div
      className={cn(
        "w-full flex  justify-center items-center px-4 py-3 rounded-full  transition duration-200 bg-transparent "
      )}
      animate={{
        width: showBackground ? "70%" : "100%",
        background: showBackground ? "var(--neutral-900)" : "transparent",
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <AnimatePresence>
        {showBackground && (
          <motion.div
            key={String(showBackground)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className=""
          />
        )}
      </AnimatePresence>
      {/* {navItems.map((item) => (
            <NavBarItem href={item.link} key={item.title} target={item.target}>
              {item.title}
            </NavBarItem>
          ))} */}
      <div className="flex gap-6 justify-between items-center w-full max-w-7xl">
        <Link className="text-md font-bold flex items-center" href="/">
          <div className="w-24 mt-1.5 flex justify-center items-center">
            <img src="/logo.webp" alt="logo" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center ">
          <Link className="mr-6 text-xl" href="/projects">
            Projects
          </Link>
          <Link className="mr-6 text-xl" href="/about">
            About
          </Link>
          <div className="mr-6 text-xl">
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="text-sm grid md:grid-cols-2 grid-cols-1 gap-10 p-4">
                <ProductItem
                  onClick={handleMenuItemClick}
                  title="Growth Hacking"
                  href="/services"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="We deploy data-driven strategies and innovative tactics to accelerate your business growth."
                />
                <ProductItem
                  onClick={handleMenuItemClick}
                  title="SEO"
                  href="/services"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Our SEO strategies are built to dominate search engines."
                />
                <ProductItem
                  onClick={handleMenuItemClick}
                  title="IT Solutions"
                  href="/services"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Our IT expertise ensures your digital infrastructure is robust, secure, and scalable."
                />
                <ProductItem
                  onClick={handleMenuItemClick}
                  title="Social Media"
                  href="/services"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="We craft social media strategies that build community, engagement, and brand loyalty."
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
          <div className="flex justify-center items-center space-x-3 flex-col md:flex-row space-y-2 md:space-y-0">
            {/* <CoolMode>
                    <button className="bg-white">Touch me, I dare you!</button>
                  </CoolMode> */}
            <CoolMode>
              <button className="bg-white py-1.5 rounded-full text-black font-semibold px-3">
                Touch me!
              </button>
            </CoolMode>
            <Button
              onClick={handleContactPage}
              className="bg-greenTouch rounded-full font-semibold"
            >
              Contact Us
            </Button>
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

      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      <AnimatePresence>
        {hamburgerMenuIsOpen && (
          <motion.nav
            initial="initial"
            exit="exit"
            variants={mobilenavbarVariant}
            animate={hamburgerMenuIsOpen ? "animate" : "exit"}
            className="fixed inset-0 z-50 h-screen w-full overflow-auto bg-black "
          >
            <div className="container flex h-[3.5rem] items-center justify-between px-4">
              <Link className="text-md font-bold flex items-center" href="/">
                <div className="w-24 mt-1.5 flex justify-center items-center">
                  <img src="/logo.webp" alt="logo" />
                </div>
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
                className="w-full relative border-b border-gray-700"
              >
                <Link
                  href="/services"
                  className="block relative w-full py-2 text-xl text-gray-200 hover:text-white"
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
                <div className="flex justify-center items-center py-6  flex-col md:flex-row space-y-2 md:space-y-0">
                  <CoolMode>
                    <button className="text-lg bg-black border-2 border-white text-lime-200 px-3 py-0.5 rounded-full w-full font-semibold">
                      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        Touch me!
                      </AnimatedShinyText>
                    </button>
                  </CoolMode>
                  <button
                    className={cn(
                      "text-2xl bg-black w-full border-2  border-lime-200 text-white px-3 py-0.5 rounded-full font-semibold"
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
    </motion.div>
  );
};
