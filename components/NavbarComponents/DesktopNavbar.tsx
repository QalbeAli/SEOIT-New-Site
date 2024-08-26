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
        "w-full flex  justify-center items-center px-4 py-3 rounded-md  transition duration-200 bg-transparent "
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
              <button className="bg-white py-1.5 rounded-md text-black font-semibold px-2">
                I Dare You! 😈
              </button>
            </CoolMode>
            <Button
              onClick={handleContactPage}
              className="bg-greenTouch font-semibold"
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
          <div className=" ">
            <motion.nav
              initial="initial"
              exit="exit"
              variants={mobilenavbarVariant}
              animate={hamburgerMenuIsOpen ? "animate" : "exit"}
              className="fixed inset-0   z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px]"
            >
              <div className="container flex h-[3.5rem] items-center justify-between px-4">
                <Link className="text-md font-bold flex items-center" href="/">
                  <div className="w-24 mt-3 flex justify-center items-center">
                    <img src="/logo.webp" alt="logo" />
                  </div>
                </Link>

                <button className="md:hidden" onClick={toggleMenu}>
                  <span className="sr-only">Toggle menu</span>
                  {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
                </button>
              </div>
              <motion.ul
                className="flex flex-col mx-4 bg-white rounded-2xl items-start px-4 mt-4 space-y-4 uppercase md:normal-case"
                variants={containerVariants}
                initial="initial"
                animate={hamburgerMenuIsOpen ? "open" : "exit"}
              >
                <motion.li
                  variants={mobileLinkVar}
                  className="w-full  border-gray-700"
                >
                  <Link
                    href="/projects"
                    className="flex w-full py-2  items-center  text-xl   font-bold text-black"
                    onClick={handleMenuItemClick}
                  >
                    <FaHome className="mr-2 text-lime-500" /> Projects
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVar}
                  className="w-full  border-gray-700"
                >
                  <Link
                    href="/about"
                    className="flex items-center w-full py-2 text-xl  font-bold text-black"
                    onClick={handleMenuItemClick}
                  >
                    <FaInfoCircle className="mr-2 text-lime-500" /> About
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVar}
                  className="w-full  border-gray-700"
                >
                  <Link
                    href="/services"
                    className=" w-full py-2 text-xl  text-black"
                    onClick={handleMenuItemClick}
                  >
                    <div className="relative py-2 flex items-center font-bold text-black">
                      <FaServicestack className="mr-2 text-lime-500" />
                      <div className="text-xl text-black">
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
                </motion.li>
                <motion.li
                  variants={mobileLinkVar}
                  className="w-full  border-gray-700"
                >
                  <Link
                    href="/pricing"
                    className="flex items-center w-full py-2 text-xl  font-bold text-black"
                    onClick={handleMenuItemClick}
                  >
                    <FaTags className="mr-2 text-lime-500" /> Pricing
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVar}
                  className="w-full  border-gray-700"
                >
                  <Link
                    href="/blogs"
                    className="flex items-center w-full py-2 text-xl  font-bold text-black"
                    onClick={handleMenuItemClick}
                  >
                    <FaBlog className="mr-2 text-lime-500" /> Blogs
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVar}
                  className="w-full  border-gray-700"
                >
                  <Link
                    href="/reviews"
                    className="flex items-center w-full py-2 text-xl font-bold  text-black"
                    onClick={handleMenuItemClick}
                  >
                    <FaStar className="mr-2 text-lime-500" /> Reviews
                  </Link>
                </motion.li>
              </motion.ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-white mt-5 mx-4 rounded-2xl px-11 text-white"
              >
                <div className="flex justify-center items-center py-6 flex-col md:flex-row space-y-2 md:space-y-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <CoolMode>
                      <button className="bg-greenTouch py-1.5 rounded-md text-black font-semibold px-2">
                        I Dare You! 😈
                      </button>
                    </CoolMode>
                  </motion.div>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl flex justify-between items-center bg-lime-200 text-black px-3  hover:bg-lime-100 space-x-2 rounded-md font-semibold"
                    onClick={handleContactPage}
                  >
                    <div>Contact Us</div>
                    <div className="mt-1">
                      <img
                        src="/contact.gif"
                        alt="Mygif"
                        width={64}
                        height={64}
                      />
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
