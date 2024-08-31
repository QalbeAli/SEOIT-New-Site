// components/MarketingServices.tsx

import Image from "next/image";
import { FaEnvelope, FaFacebookF, FaGoogle, FaMobileAlt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Marketing = () => {
  const services = [
    {
      icon: <FaEnvelope className="text-green-800 text-3xl" />,
      title: "Email Marketing",
      color: "text-green-900",
      bgColor: "bg-green-300",
      description:
        "Harness the power of personalised communication to drive engagement and conversions. Our targeted email marketing strategies ensure your message reaches the right audience at the right time, delivering measurable results.",
    },
    {
      icon: <FaFacebookF className="text-purple-800 text-3xl" />,
      title: "Facebook Marketing",
      color: "text-purple-900",
      bgColor: "bg-purple-300",

      description:
        "Maximize your brand’s presence on the world’s largest social network. Our expert Facebook marketing services are designed to build your community, engage your followers, and turn likes into leads.",
    },
    {
      icon: <FaGoogle className="text-cyan-800 text-3xl" />,
      title: "Google Ads",
      color: "text-cyan-900",
      bgColor: "bg-cyan-300",
      description:
        "Reach your customers at the exact moment they’re searching for your products or services. Our Google Ads campaigns are meticulously crafted to ensure optimal performance and return on investment.",
    },
    {
      icon: <FaMobileAlt className="text-blue-800 text-3xl" />,
      title: "TikTok Ads",
      color: "text-blue-900",
      bgColor: "bg-blue-300",

      description:
        "Leverage the explosive growth of TikTok to reach a highly engaged audience with creative, impactful ads. Our TikTok ad strategies are designed to resonate with users, driving both brand awareness and conversions where your target audience is most active.",
    },
  ];

  return (
    <div className="mx-3">
      <div className="p-5 md:p-16 rounded-xl w-full max-w-7xl mx-auto border-4 shadow-xl mt-10 ">
        <div className="mb-16 gap-10 grid md:grid-cols-2 items-center">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-long.png"
            className=" h-[70%] rounded-xl shadow bg-cover bg-center bg-no-repeat"
            alt="social"
          />
          <div>
            <div>
              <h3 className=" text-4xl font-bold mb-3">
                Designed for business teams like yours
              </h3>
              <p>
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
            </div>
            {services.map((service, index) => (
              <div key={index} className="p-2 rounded-lg mt-5">
                <div
                  className={`mb-4 p-4 rounded-full w-fit ${service.bgColor}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-300">{service.description}</p>
                <span
                  className={`${service.color} group flex items-center cursor pointer font-bold mt-3 cursor-pointer`}
                >
                  Learn More{" "}
                  <MdKeyboardArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-all ease-in duration-150 "
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
