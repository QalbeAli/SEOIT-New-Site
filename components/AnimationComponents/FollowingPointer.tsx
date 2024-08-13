import Image from "next/image";
import { FollowerPointerCard } from "@/components/BlogPageComponents/FollowingPointerCard";
import Link from "next/link";
import BlogCard from "@/components/BlogPageComponents/BlogCard";

export function FollowingPointer() {
  return (
    <div className="mx-auto w-full">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
        <Link href="/blog">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 my-8 md:my-12 lg:my-16 cursor-none">
            <BlogCard
              title="The Power of JavaScript Frameworks: Angular vs. React vs. Vue.js"
              date="28th March, 2023"
              description="Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcss grid and React."
              imageSrc="/test.png"
              altText="JavaScript Frameworks"
              link="/post/angular-react-vue"
            />
            <BlogCard
              title="Mastering CSS Grid Layout: A Comprehensive Guide"
              date="28th March, 2023"
              description="Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcss grid and React."
              imageSrc="/test.png"
              altText="CSS Grid Layout"
              link="/post/css-grid-layout"
            />
            <BlogCard
              title="The Rise of Progressive Web Apps (PWAs): A Game Changer in Web Development"
              date="28th March, 2023"
              description="Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcss grid and React."
              imageSrc="/test.png"
              altText="Progressive Web Apps"
              link="/post/pwa"
            />
          </div>
        </Link>
      </FollowerPointerCard>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Jez Kez",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcss grid and React.",
  image: "test.png",
  authorAvatar: "/john.webp",
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
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p className="text-sm md:text-base lg:text-lg">{title}</p>
  </div>
);
