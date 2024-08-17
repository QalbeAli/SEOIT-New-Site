// components/MarketingServices.tsx

import { FaEnvelope, FaFacebookF, FaGoogle, FaMobileAlt } from "react-icons/fa";
const Marketing = () => {
  const services = [
    {
      icon: <FaEnvelope className="text-black text-3xl" />,
      title: "Email Marketing",
      description:
        "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    },
    {
      icon: <FaFacebookF className="text-black text-3xl" />,
      title: "Facebook Marketing",
      description:
        "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    },
    {
      icon: <FaGoogle className="text-black text-3xl" />,
      title: "Google Adwords",
      description:
        "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    },
    {
      icon: <FaMobileAlt className="text-black text-3xl" />,
      title: "In-App Marketing",
      description:
        "Understand First. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <>
      
      <div className="p-8  flex items-center justify-center">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {services.map((service, index) => (
              <div
                key={index}
                className=" p-2 rounded-lg  flex flex-col items-center"
              >
                <div className="mb-4 p-4 rounded-full bg-[#d6fc5b]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-white mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
