import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";

type FaqType = {
  question: string;
  answer: string;
};

type FaqCategoryType = {
  title: string;
  faqs: FaqType[];
};

const FaqItem = ({ question, answer }: FaqType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto w-full bg-[#333333] max-w-4xl rounded-2xl shadow-md p-4 my-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          <FiFileText className="text-white mr-2" size={24} />
          <h3 className="font-normal text-lg">{question}</h3>
        </div>
        <div>
          {isOpen ? <FiChevronUp className="text-white" size={24} /> : <FiChevronDown className="text-white" size={24} />}
        </div>
      </div>
      {isOpen && <p className="mt-4 text-white">{answer}</p>}
    </div>
  );
};

const FaqCategory = ({ title, faqs }: FaqCategoryType) => (
  <div className="w-full max-w-4xl mx-auto my-8">
    <h2 className="text-white font-bold text-2xl  mb-6">{title}</h2>
    {faqs.map((faq, index) => (
      <FaqItem key={index} question={faq.question} answer={faq.answer} />
    ))}
  </div>
);

const FaqDropdown = () => {
  const faqCategories: FaqCategoryType[] = [
    {
      title: "Growth Hacking",
      faqs: [
        {
          question: "What is Growth Hacking, and how can it benefit my business?",
          answer:
            "Growth Hacking is a data-driven approach that focuses on rapid experimentation across marketing channels and product development to identify the most effective ways to grow your business. By leveraging unconventional strategies and insights, we help you achieve exponential growth in a cost-efficient manner.",
        },
        {
          question: "How do you determine which growth hacking strategies will work for my business?",
          answer:
            "We begin with an in-depth analysis of your business, target audience, and current market trends. Based on this, we develop customized experiments and strategies designed to drive quick wins and long-term growth. We continuously monitor and optimize these strategies to ensure the best possible results.",
        },
      ],
    },
    {
      title: "SEO",
      faqs: [
        {
          question: "What SEO services do you offer?",
          answer:
            "We provide a comprehensive range of SEO services, including on-page optimization, keyword research, link building, technical SEO, and content creation. Our goal is to improve your website's visibility on search engines, driving organic traffic and increasing your online presence.",
        },
        {
          question: "How long does it take to see results from SEO?",
          answer:
            "SEO is a long-term strategy, and results typically start to show within 3 to 6 months, depending on your industry and competition. However, our team works to implement quick wins early on, such as optimizing existing content and fixing technical issues, to boost your site’s performance while we build for sustainable growth.",
        },
      ],
    },
    {
      title: "IT Solutions",
      faqs: [
        {
          question: "What IT services do you provide?",
          answer:
            "We offer a wide range of IT services, including custom software development, cloud solutions, cybersecurity, IT infrastructure management, and technical support. Our IT services are designed to enhance your digital capabilities, ensuring your business operates smoothly and securely.",
        },
        {
          question: "Can you integrate your IT solutions with our existing systems?",
          answer:
            "Absolutely! Our IT experts are experienced in working with various platforms and technologies. We assess your current systems and create seamless integrations that enhance functionality without disrupting your operations.",
        },
      ],
    },
    {
      title: "Social Media",
      faqs: [
        {
          question: "How do you approach social media marketing?",
          answer:
            "We develop customized social media strategies that align with your brand’s goals. From content creation to paid advertising, our approach focuses on building community engagement, increasing brand visibility, and driving conversions. We tailor our strategies to fit each platform’s unique strengths.",
        },
        {
          question: "Which social media platforms do you specialize in?",
          answer:
            "We specialize in all major social media platforms, including Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube. Our team stays updated with the latest trends and algorithm changes to ensure your social media presence is always optimized.",
        },
      ],
    },
    {
      title: "Services & Pricing",
      faqs: [
        {
          question: "What is included in your high-ticket pricing plans?",
          answer:
            "Our high-ticket plans are designed for businesses seeking comprehensive growth solutions. They include personalized growth strategies, advanced SEO and SEM management, custom IT solutions, full-service social media campaigns, and 24/7 support. Each plan is tailored to meet the unique needs of your business.",
        },
        {
          question: "How do you determine the cost of your services?",
          answer:
            "Our pricing is based on the scope of work, the complexity of the project, and the level of customization required. We offer different pricing tiers to suit businesses of various sizes, with transparent pricing and no hidden fees. For custom-tailored solutions, we provide a detailed proposal outlining the costs and deliverables.",
        },
        {
          question: "Can I upgrade or downgrade my plan at any time?",
          answer:
            "Yes, our services are flexible, and you can upgrade or downgrade your plan as your business needs evolve. We recommend discussing your changing requirements with our team so we can adjust the strategy accordingly and ensure a smooth transition.",
        },
        {
          question: "What is your refund policy?",
          answer:
            "We stand behind the quality of our services. If you're not satisfied with the results, we offer a money-back guarantee within the first 30 days of service for specific plans. For high-ticket or custom solutions, we work closely with you to ensure that our services meet your expectations, and any concerns are addressed promptly.",
        },
      ],
    },
  ];

  return (
    <div className="my-20 mx-3">
      <div className="flex justify-center items-center flex-col space-y-6">
        <div className="text-white font-bold text-xl">
          We Are Here To Help You
        </div>
        <div className="text-white text-center font-bold text-4xl">
          Frequently Asked Questions
        </div>
        <div className="text-white font-normal text-center text-xl">
          Your Questions Answered About Our Services and Pricing
        </div>
      </div>
      <div className="my-20 text-greenTouch">
        {faqCategories.map((category, index) => (
          <FaqCategory
            key={index}
            title={category.title}
            faqs={category.faqs}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqDropdown;
