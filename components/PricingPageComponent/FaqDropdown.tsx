"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";

type PropsType = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" mx-auto w-full bg-gray-950 max-w-4xl rounded-2xl shadow-md p-4 my-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="flex items-center">
            <FiFileText className="text-blue-500 mr-2" size={24} />
            <h3 className="font-normal text-lg">{question}</h3>
          </div>
          <div>
            {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
          </div>
        </div>
        {isOpen && <p className="mt-4 text-white">{answer}</p>}
      </div>
    </>
  );
};

const FaqDropdown = () => {
  const faqs = [
    {
      question: "What do you mean by item and end product in license terms?",
      answer:
        "Social media marketing is the use of social media platforms and websites to promote a product or service and is becoming more popular.",
    },
    {
      question: "How can I reset my password?",
      answer:
        'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions to reset your password.',
    },
    {
      question: "Where can I find my purchase history?",
      answer:
        'You can find your purchase history in the "My Account" section under "Order History".',
    },
    {
      question: "How do I contact customer support?",
      answer:
        'You can contact customer support via the "Contact Us" page on our website or by calling our support hotline.',
    },
  ];

  return (
    <>
      <div className="my-20 mx-3">
        <div className="flex justify-center items-center flex-col space-y-6">
          <div className="text-white font-bold text-xl">We Are Here To Help You</div>
          <div className="text-white text-center font-bold text-4xl">Frequently Asked Questions</div>
          <div className="text-white font-normal text-center text-xl">We help startups, corporations and nonprofits.</div>
        </div>
        <div className="my-20 text-white "> 
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FaqDropdown;

