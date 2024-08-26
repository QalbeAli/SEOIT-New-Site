import { LampDemo } from "@/components/AnimationComponents/LampDemo";
import ReviewPage from "@/components/ReviewPageComponents/ReviewPage";
import React from "react";
import Meteors from "@/components/magicui/meteors";
import { Testimonials } from "@/components/ReviewPageComponents/Testimonials";
const Reviews = () => {
  return (
    <div className="py-32 bg-slate-950">
      <LampDemo />
      {/* <ReviewPage /> */}
      <Testimonials />
    </div>
  );
};

export default Reviews;
