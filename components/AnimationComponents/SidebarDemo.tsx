"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FcMoneyTransfer } from "react-icons/fc";
import { GrTechnology } from "react-icons/gr";
import { LiaIndustrySolid } from "react-icons/lia";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
export function SidebarDemo() {
  const links = [
    {
      label: "SaaS",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Health",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Education",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Finance",
      href: "#",
      icon: (
        <FcMoneyTransfer className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "iT",
      href: "#",
      icon: (
        <GrTechnology className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Other Industries",
      href: "#",
      icon: (
        <LiaIndustrySolid className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
   
  ];

  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("SaaS");

  const renderContent = () => {
    switch (selectedTab) {
      case "SaaS":
        return <ProjectCards title="SaaS Projects" />;
      case "Health":
        return <ProjectCards title="Health Projects" />;
      case "Education":
        return <ProjectCards title="Education Projects" />;
        case "Finance":
        return <ProjectCards title="Finance Projects" />;
        case "iT":
        return <ProjectCards title="iT" />;
        case "Other Industries":
        return <ProjectCards title="Other Industries" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row my-10  bg-black w-full flex-1 mx-auto border max-w-7xl border-greenTouch overflow-hidden",
         // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 h-full">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  onClick={() => setSelectedTab(link.label)}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex-1 p-4">{renderContent()}</div>
    </div>
  );
}

const ProjectCards = ({ title }:any) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <CardHoverEffectDemo />
    </div>
  );
};

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        SEOIT PROJECTS
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
