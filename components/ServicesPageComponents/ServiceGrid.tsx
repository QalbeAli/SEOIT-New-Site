import { FC } from "react";
import {
  PhoneIcon,
  MailIcon,
  ClipboardListIcon,
  ShieldCheckIcon,
} from "@heroicons/react/solid";
import ServiceCard from "./ServiceCard";

const ServicesGrid: FC = () => {
  const services = [
    {
      icon: <PhoneIcon className="h-10 w-10 text-greenTouch" />,
      title: "Marketing solutions for IT business",
      description:
        "As an Internet marketing strategy, SEO considers how search engines work, the computer-programmed algorithms that dictate search engine behavior.",
    },
    {
      icon: <ClipboardListIcon className="h-10 w-10 text-greenTouch" />,
      title: "Application design & development",
      description:
        "Social media marketing is the use of social media platforms and websites to promote a product or service and is becoming more popular.",
    },
    {
      icon: <MailIcon className="h-10 w-10 text-greenTouch" />,
      title: "Customer experience strategy",
      description:
        "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online.",
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10 text-greenTouch" />,
      title: "Branding & marketing solutions",
      description:
        "Social media marketing is the use of social media platforms and websites to promote a product or service and is becoming more popular.",
    },
  ];

  return (
    <div className="relative  flex items-center justify-center p-4 mt-10 md:mt-0 ">
      <div className="max-w-4xl w-full mx-auto transform -translate-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
