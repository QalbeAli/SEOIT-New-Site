// components/MarketingServices.tsx

import { FaEnvelope, FaFacebookF, FaGoogle, FaMobileAlt } from "react-icons/fa";
const Marketing = () => {
  const services = [
    {
      icon: <FaEnvelope className="text-black text-3xl" />,
      title: "Email Marketing",
      description:
        "Harness the power of personalised communication to drive engagement and conversions. Our targeted email marketing strategies ensure your message reaches the right audience at the right time, delivering measurable results.",
    },
    {
      icon: <FaFacebookF className="text-black text-3xl" />,
      title: "Facebook Marketing",
      description:
        "Maximize your brand’s presence on the world’s largest social network. Our expert Facebook marketing services are designed to build your community, engage your followers, and turn likes into leads.",
    },
    {
      icon: <FaGoogle className="text-black text-3xl" />,
      title: "Google Ads",
      description:
        "Reach your customers at the exact moment they’re searching for your products or services. Our Google Ads campaigns are meticulously crafted to ensure optimal performance and return on investment.",
    },
    {
      icon: <FaMobileAlt className="text-black text-3xl" />,
      title: "TikTok Ads",
      description:
        "Leverage the explosive growth of TikTok to reach a highly engaged audience with creative, impactful ads. Our TikTok ad strategies are designed to resonate with users, driving both brand awareness and conversions where your target audience is most active.",
    },
  ];

  return (
    <>
      <div className="p-16 rounded-xl w-full max-w-6xl mx-auto border-4 shadow-xl mt-10 ">
        <div className="mb-16">
          <h3 className=" text-4xl font-bold mb-3">
            Designed for business teams like yours
          </h3>
          <p>
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-2 rounded-lg">
              <div className="mb-4 p-4 rounded-full w-fit bg-[#d6fc5b]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Marketing;
