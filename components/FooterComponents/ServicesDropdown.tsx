"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    category: "DESIGN",
    items: [
      "Web Design",
      "Saas Website Design",
      "UI/UX Design",
      "Mobile App Design",
      "Healthcare Web Design",
      "Responsive Web Design",
      "E-Commerce Web Design",
      "Branding for Startups",
      "Landing Website Design",
    ],
  },
  {
    category: "DEVELOPMENT",
    items: [
      "Back-end Development",
      "CMS Development",
      "Web Development",
      "Front-end Development",
      "Node JS Development",
      "Software Product Development",
      "Prismic CMS Development",
      "Gatsby Development",
      "Next JS Development",
      "Vue JS Development",
      "Webflow Development",
      "React JS Development",
      "Sanity Development",
    ],
  },
  {
    category: "MARKETING",
    items: [
      "Search Engine Optimisation",
      "Social Media Design",
      "SEO Audit",
      "Pitch Deck Design",
      "Technical SEO",
      "Conversion Rate Optimization",
      "Technical Audit",
      "SEO Audit",
      "Local SEO",
    ],
  },
];

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto px-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 px-6 text-white border-t border-b border-gray-700 rounded-md focus:outline-none"
      >
        <span>Show all services</span>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="mt-2 text-white rounded-md shadow-lg">
          <div className="p-6 space-y-8">
            {services.map((service, index) => (
              <div key={index}>
                <h3 className="text-2xl md:text-left text-center font-semibold mb-4 tracking-wider">
                  {service.category}
                </h3>
                <div className="grid md:text-left text-center sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {service.items.map((item, idx) => (
                    <div key={idx}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesDropdown;
