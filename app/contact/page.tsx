import React from "react";
import ContactPage from "./_component/ContactPage";
import AnimatedCursor from "react-animated-cursor";
import RotatingImage from "@/components/AnimationComponents/ContactRotating";
import { ScrollBasedVelocity } from "@/components/AnimationComponents/ScrollBasedVelocity";
import MovingLinks from "@/components/AnimationComponents/MovingLinks";
import AddressComponent from "@/components/ContactPageComponents/AddressComponent";

const page = () => {
  return (
    <div>
      <AnimatedCursor
        color="255, 255, 255" // Cursor color in RGB format
        innerSize={8} // Size of the inner cursor
        outerSize={0} // Size of the outer cursor
        outerAlpha={0.3} // Opacity of the outer cursor
        innerScale={10} // Scale of the inner cursor
        outerScale={10} // Scale of the outer cursor
        clickables={["button", "a"]} // Elements that trigger cursor animations
      />
      <ContactPage />
      <ScrollBasedVelocity />
      <MovingLinks />
      <AddressComponent />
    </div>
  );
};

export default page;
