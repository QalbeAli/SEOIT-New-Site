import { sortBlogs } from "@/utils";
import React from "react";
import FollowingPointer from "../AnimationComponents/FollowingPointer";
// import { FollowingPointer } from "@/components/AnimationComponents/FollowingPointer";

const   RecentPosts = () => {
  return (
    <section className="w-full mt-24 text-white py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center">
        <h2 className="font-bold capitalize text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white dark:text-light text-center">
          BLOGS
        </h2>
      </div>

      <article className="mt-8 w-full flex justify-center">
        <FollowingPointer />
      </article>
    </section>
  );
};

export default RecentPosts;
