"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { FaCheck } from "react-icons/fa6";
import { TbMessageCircleFilled } from "react-icons/tb";
import { useRouter } from "next/navigation";
interface TabItem {
  key: string;
  title: string;
  items: string[];
}

const tabsData: TabItem[] = [
  {
    key: "industries",
    title: "Industries",
    items: [
      "All industries",
      "Healthcare",
      "Finance",
      "SaaS",
      "Education",
      "Information technology",
      "Other industries",
      "Have a project?",
    ],
  },
];

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(tabsData[0].key);
  const [activeItems, setActiveItems] = useState<{
    [key: string]: string | null;
  }>({
    industries: null,
    services: null,
  });
  const [height, setHeight] = useState<number | "auto">(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [activeTab]);

  const toggleTab = (tabKey: string) => {
    setActiveTab(activeTab === tabKey ? null : tabKey);
  };

  const handleItemClick = (tabKey: string, item: string) => {
    setActiveItems((prev) => ({
      ...prev,
      [tabKey]: prev[tabKey] === item ? null : item,
    }));
  };

  const router = useRouter();
  const handlelick = () => {
    router.push("/contact");
  };

  return (
    <>
      <div className="w-full border rounded-3xl shadow-md p-5">
        {tabsData.map((tab) => (
          <div key={tab.key} className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleTab(tab.key)}
            >
              <button
                className={`text-left py-2  rounded-md text-xl uppercase font-semibold relative`}
              >
                <div className="relative ">
                  {tab.title}
                  {activeItems[tab.key] && (
                    <FaCheck className="absolute top-1/2 -translate-y-1/2 -right-5 p-0.5 text-sm text-black bg-yellow-500 rounded-full" />
                  )}
                </div>
              </button>
              <FaChevronDown
                className={twMerge(
                  activeTab === tab.key ? "rotate-180" : "rotate-0",
                  "transition-all ease duration-200"
                )}
              />
            </div>
            <div
              ref={contentRef}
              className={`overflow-hidden transition-all duration-300 ease-out ${
                activeTab === tab.key ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="mt-2 rounded-md shadow-md">
                <ul className="p-0 space-y-3">
                  {tab.items.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleItemClick(tab.key, item)}
                      className={`px-4 cursor-pointer  ${
                        activeItems[tab.key] === item
                          ? "text-yellow-500 border-l-2 border-yellow-500"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        {item}
                        {activeItems[tab.key] === item && (
                          <FaCheck className="text-yellow-500" />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={handlelick}
        className="group relative text-center w-full p-2 rounded-full border-2 bg-blue-600 transition-all ease duration-200 mt-4 cursor-pointer"
      >
        Have a Project?
        <TbMessageCircleFilled
          size={35}
          className="border-4 absolute right-0.5 top-1/2 -translate-y-1/2 bg-white group-hover:text-white group-hover:bg-blue-500 text-blue-500 rounded-full p-1 transition-all ease-in duration-200"
        />
      </div>
    </>
  );
};

export default Sidebar;
