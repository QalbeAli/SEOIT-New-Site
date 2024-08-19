"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/AnimationComponents/NavbarMenu";
import { cn } from "@/lib/utils";
import ConsultationModal from "@/components/NavbarComponents/ConsultationModal";
import { CoolMode } from "../magicui/cool-mode";
import { Button } from "../ui/button";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}
// Home | About | Servies | Pricing | Blogs | Reviews | Contact US
function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "md:fixed md:top-10 inset-x-0 mt-5 md:mt-0 w-full max-w-5xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div>
          <Link href="/">
            <div className="w-24 flex justify-center items-center">
              <img src="/logo.webp" alt="logo" />
            </div>
          </Link>
        </div>

        <div className="flex gap-5 items-center md:space-x-3 flex-wrap md:justify-center justify-around">
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Home</HoveredLink>
              <HoveredLink href="/construction">Interface Design</HoveredLink>
              <HoveredLink href="/construction">SEO</HoveredLink>
              <HoveredLink href="/construction">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="  text-sm grid md:grid-cols-2 grid-cols-1 gap-10 p-4">
              <ProductItem
                title="About Page"
                href="/about"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="/construction"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="/construction"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="/construction"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/services">Services</HoveredLink>
              <HoveredLink href="/construction">Individual</HoveredLink>
              <HoveredLink href="/construction">Team</HoveredLink>
              <HoveredLink href="/construction">Enterprise</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/pricing">Pricing</HoveredLink>
              <HoveredLink href="/construction">Interface Design</HoveredLink>
              <HoveredLink href="/construction">
                Search Engine Optimization
              </HoveredLink>
              <HoveredLink href="/construction">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Blogs">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/blogs">Blogs</HoveredLink>
              <HoveredLink href="/construction">Interface Design</HoveredLink>
              <HoveredLink href="/construction">
                Search Engine Optimization
              </HoveredLink>
              <HoveredLink href="/construction">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Reviews">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/reviews">Reviews</HoveredLink>
              <HoveredLink href="/construction">Interface Design</HoveredLink>
              <HoveredLink href="/construction">
                Search Engine Optimization
              </HoveredLink>
              <HoveredLink href="/construction">Branding</HoveredLink>
            </div>
          </MenuItem>
        </div>

        <div className="flex justify-center items-center space-x-2 flex-col md:flex-row space-y-2 md:space-y-0">
          <CoolMode>
            <Button>Click Me! I Will Dare You!</Button>
          </CoolMode>
          <button
            className={cn(
              "text-2xl, bg-greenTouch text-black  px-3 rounded-md font-bold"
            )}
            onClick={() => {
              closeMenu();
              setIsModalOpen(true);
            }}
          >
            Contact Us
          </button>
        </div>
      </Menu>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
