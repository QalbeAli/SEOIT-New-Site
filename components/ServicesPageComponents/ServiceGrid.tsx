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
        "As a comprehensive internet marketing strategy, our SEO approach delves deep into understanding how search engines function. We harness advanced algorithms and data-driven tactics to enhance your visibility and ensure your business stands out in the competitive digital landscape.",
    },
    {
      icon: <ClipboardListIcon className="h-10 w-10 text-greenTouch" />,
      title: "Application design & development",
      description:
        "From concept to execution, our application design and development services are tailored to meet the unique needs of your business. We create intuitive, user-friendly applications that enhance your digital presence and drive engagement across all platforms.",
    },
    {
      icon: <MailIcon className="h-10 w-10 text-greenTouch" />,
      title: "Customer experience strategy",
      description:
        "Delivering a seamless and impactful customer experience is at the heart of what we do. Our content marketing strategies focus on creating, publishing, and distributing high-quality content that resonates with your target audience and drives meaningful interactions.",
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10 text-greenTouch" />,
      title: "Branding & marketing solutions",
      description:
        "Building a strong, recognizable brand is essential for long-term success. Our branding and marketing solutions are designed to promote your product or service across social media and other digital platforms, increasing visibility and fostering brand loyalty.",
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
