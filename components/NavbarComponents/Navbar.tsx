"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/AnimationComponents/NavbarMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href="/about">
          <MenuItem
            setActive={setActive}
            active={active}
            item="About"
          ></MenuItem>
        </Link>
        <Link href="/services">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Services"
          ></MenuItem>
        </Link>
        <Link href="/pricing">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Pricing"
          ></MenuItem>
        </Link>
        <Link href="/blogs">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Blogs"
          ></MenuItem>
        </Link>
        <Link href="/reviews">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Reviews"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
