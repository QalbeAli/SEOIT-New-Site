import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function ServicesIconCloud() {
  return (
    <div className="relative flex flex-col h-full w-full  items-center justify-center overflow-hidden rounded-lg  bg-background py-10 px-20 pb-20  ">
      <div className="font-bold text-2xl md:text-6xl">
        Our Tech Stack
      </div>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
