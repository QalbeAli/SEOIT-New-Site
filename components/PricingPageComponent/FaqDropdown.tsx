"use client";
import React, { useState } from "react";
import Accordion from "@/components/accordion";
import { Heading } from "@/components/ui/heading";

// const questions = [
//   {
//     id: 1,
//     title: "What is Proactic?",
//     description:
//       "Proactic is a social media marketing automation tool designed to help businesses streamline their social media efforts.",
//   },
//   {
//     id: 2,
//     title: "How does Proactic work?",
//     description:
//       "Proactic automates the process of scheduling, posting, and analyzing social media content across multiple platforms.",
//   },
//   {
//     id: 3,
//     title: "Which social media platforms does Proactic support?",
//     description:
//       "Proactic supports popular social media platforms such as Facebook, Twitter, Instagram, LinkedIn, and more.",
//   },
//   {
//     id: 4,
//     title: "Can I schedule posts in advance with Proactic?",
//     description:
//       "Yes, Proactic allows you to schedule posts in advance, ensuring your content is published at the optimal times.",
//   },
//   {
//     id: 5,
//     title: "Does Proactic provide analytics?",
//     description:
//       "Proactic offers detailed analytics to help you track the performance of your social media campaigns and make data-driven decisions.",
//   },
//   {
//     id: 6,
//     title: "Is Proactic suitable for small businesses?",
//     description:
//       "Yes, Proactic is designed to be user-friendly and scalable, making it suitable for businesses of all sizes.",
//   },
//   {
//     id: 7,
//     title: "Can I collaborate with my team on Proactic?",
//     description:
//       "Proactic includes collaboration features that allow team members to work together on social media campaigns.",
//   },
//   {
//     id: 8,
//     title: "Does Proactic offer customer support?",
//     description:
//       "Yes, Proactic provides customer support to assist you with any questions or issues you may encounter.",
//   },
//   {
//     id: 9,
//     title: "Is there a free trial available for Proactic?",
//     description:
//       "Proactic offers a free trial so you can explore its features and see how it can benefit your social media marketing efforts.",
//   },
//   {
//     id: 10,
//     title: "How can I get started with Proactic?",
//     description:
//       "To get started with Proactic, simply sign up on our website and follow the onboarding process to set up your account.",
//   },
// ];

const faqCategories = [
  {
    title: "Growth Hacking",
    faqs: [
      {
        question: "What is Growth Hacking, and how can it benefit my business?",
        answer:
          "Growth Hacking is a data-driven approach that focuses on rapid experimentation across marketing channels and product development to identify the most effective ways to grow your business. By leveraging unconventional strategies and insights, we help you achieve exponential growth in a cost-efficient manner.",
      },
      {
        question:
          "How do you determine which growth hacking strategies will work for my business?",
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
        question:
          "Can you integrate your IT solutions with our existing systems?",
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

export const FaqDropdown = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-3xl mx-auto py-20 px-8">
      <Heading className="pt-4">Frequently Asked Questions</Heading>
      <div className="grid gap-10 pt-20">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-xl font-semibold mb-6">{category.title}</h2>
            {category.faqs.map((faq, faqIndex) => (
              <Accordion
              
                key={faqIndex}
                i={`${categoryIndex}-${faqIndex}`}
                expanded={expanded}
                setExpanded={setExpanded}
                title={faq.question}
                description={faq.answer}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
