import { type Metadata } from "next";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { BlogCard } from "@/components/blog-card";
import { FeatureIconContainer } from "@/components/features/feature-icon-container";
import { IconClipboardText } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { truncate } from "@/lib/utils";
import { format } from "date-fns";
import { fetchPosts, revalidatePosts } from "@/app/api/BlogCms/route";
import { FollowerPointerCard } from "../BlogPageComponents/FollowingPointerCard";

export const metadata: Metadata = {
  title: "Blog | Proactiv | Aceternity Templates",
  description:
    "Everything AI is a platform that provides a wide range of AI tools and services to help you stay on top of your business. Generate images, text and everything else that you need to get your business off the ground.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default async function FollowingPointer() {
  revalidatePosts();
  const { posts } = await fetchPosts();
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <FollowerPointerCard
        title={<TitleComponent title="Im missing YOu" avatar="/Its Joker" />}
      >
        <Container className="flex flex-col items-center justify-between pb-20">
          <div className="relative z-20 py-10 md:pt-40">
            <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
              <IconClipboardText className="h-6 w-6 text-cyan-500" />
            </FeatureIconContainer>
            <Heading as="h1" className="mt-4">
              Blog
            </Heading>
            <Subheading className="text-center">
              Discover insightful resources and expert advice from our seasoned
              team to elevate your knowledge.
            </Subheading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full relative z-20">
            {posts.map((blog, index) => (
              <BlogCard blog={blog} key={blog.title + index} />
            ))}
          </div>

          <div className="w-full py-20">
            <p className="text-2xl font-bold text-white mb-10">More Posts</p>

            <div className="divide-y divide-neutral-800">
              {posts.map((blog, index) => (
                <Link
                  href={`/blog/${blog.slug}`}
                  key={blog.slug + index}
                  className="flex md:flex-row flex-col items-start justify-between md:items-center group py-4"
                >
                  <div>
                    <p className="text-neutral-300 text-lg font-medium group-hover:text-white transition duration-200">
                      {blog.title}
                    </p>
                    <p className="text-neutral-300 text-sm mt-2 max-w-xl group-hover:text-white transition duration-200">
                      {truncate(blog.description, 80)}
                    </p>

                    <p className="text-neutral-300 text-sm mt-2 max-w-xl group-hover:text-white transition duration-200">
                      {format(new Date(blog.datePublished), "MMMM dd, yyyy")}
                    </p>
                  </div>
                  <Image
                    src={blog.coverPhoto[0]?.url}
                    alt={blog.title}
                    width={40}
                    height={40}
                    className="rounded-full md:h-10 md:w-10 h-6 w-6 mt-4 md:mt-0 object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </FollowerPointerCard>
    </div>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
