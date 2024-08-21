"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Cool Shit We Made",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-lime-200 to-lime-300">
          <p className="text-black">Cool Shit We Made</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "SEO",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-lime-200 to-lime-300">
          <p>SEO Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "iT",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-lime-200 to-lime-300">
          <p className="text-black">iT</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Social",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-lime-200 to-lime-300">
          <p className="text-black">SOCIAL</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Growth Hacking",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-lime-200 to-lime-300s">
          <p className="text-black">Growth Hacking</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[15rem] p-3 md:h-[20rem] lg:h-[40rem] [perspective:1000px] relative flex flex-col max-w-full lg:max-w-5xl mx-auto w-full items-start justify-start my-20 md:my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
