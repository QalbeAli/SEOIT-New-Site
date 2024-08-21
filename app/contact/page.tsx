import React from "react";
import ContactPage from "./_component/ContactPage";
import { ScrollBasedVelocity } from "@/components/AnimationComponents/ScrollBasedVelocity";
import MovingLinks from "@/components/AnimationComponents/MovingLinks";
import AddressComponent from "@/components/ContactPageComponents/AddressComponent";

const page = () => {
  return (
    <div>
      <ContactPage />
      <ScrollBasedVelocity />
      <MovingLinks />
      <AddressComponent />
    </div>
  );
};

export default page;
