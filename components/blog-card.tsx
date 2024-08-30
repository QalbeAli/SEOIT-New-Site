import { Link } from "next-view-transitions";
import React from "react";
import { BlurImage } from "./blur-image";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Post } from "@/lib/blog";
import { truncate } from "@/lib/utils";
import { FollowerPointerCard } from "./BlogPageComponents/FollowingPointerCard";

export const BlogCard = ({ blog }: { blog: Post }) => {
  return (
    <>
      <FollowerPointerCard
        title={<TitleComponent title="JEZ KEZ" avatar="/Its Joker" />
        
        }
      >
        <Link
          className="shadow-derek cursor-none rounded-3xl group border border-transparent hover:border-neutral-800 w-full hover:bg-neutral-900  overflow-hidden  hover:scale-[1.02] transition duration-200"
          href={`../blog/${blog.slug}/${blog.id}`}
        >
          {blog.coverPhoto[0]?.url ? (
            <BlurImage
              src={blog.coverPhoto[0]?.url || ""}
              alt={blog.title}
              height="800"
              width="800"
              className="h-72 object-cover object-top w-full rounded-3xl"
            />
          ) : (
            <div className="h-72 flex items-center justify-center group-hover:bg-neutral-900">
              Azam
            </div>
          )}
          <div className="p-4 md:p-8 group-hover:bg-neutral-900">
            <p className="text-lg font-bold mb-4">
              <Balancer>{blog.title}</Balancer>
            </p>
            <p className="text-left text-sm mt-2 text-white text-muted">
              {truncate(blog.description, 100)}
            </p>
            <div className="flex space-x-2 items-center  mt-6">
              <Image
                src={blog.coverPhoto[0]?.url}
                alt={blog.title}
                width={20}
                height={20}
                className="rounded-full h-5 w-5"
              />
              <p className="text-sm font-normal text-white text-muted">
                {blog.title}
              </p>
            </div>
          </div>
        </Link>
      </FollowerPointerCard>
    </>
  );
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src="/john.webp"
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
