"use client"
import React from "react";
import { usePathname } from "next/navigation";
import AnimatedCursor from "react-animated-cursor";
interface ContactPageLayoutProps {
  children: React.ReactNode;
}

const ContactPageLayout = ({ children }: ContactPageLayoutProps) => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  return (
    <>
      <div>
        {isContactPage && (
          <AnimatedCursor
            color="255, 255, 255" // Cursor color in RGB format
            innerSize={8} // Size of the inner cursor
            outerSize={0} // Size of the outer cursor
            outerAlpha={0.3} // Opacity of the outer cursor
            innerScale={10} // Scale of the inner cursor
            outerScale={10} // Scale of the outer cursor
            clickables={["button", "a"]} // Elements that trigger cursor animations
          />
        )}
        {children}
      </div>
    </>
  );
};

export default ContactPageLayout;
