"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LuSquareDot } from "react-icons/lu";

const PricingCard: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);

  useEffect(() => {
    if (selectedPrice > 0 && selectedPlan) {
      router.push(`/checkout?plan=${selectedPlan}&price=${selectedPrice}`);
    } else if (selectedPrice <= 0) {
      console.error("You have to refresh the page");
    }
  }, [selectedPlan, selectedPrice, router]);

  const getCheckout = (plan: string, price: number) => {
    setSelectedPlan(plan);
    setSelectedPrice(price);
  };

  return (
    <section className="flex flex-col items-center justify-center pt-4 ">
      <div className="mb-8 flex items-center w-full max-w-md p-4">
        <button
          className={`flex-1 px-4 py-2 sm:px-6 sm:py-3.5 text-xs sm:text-sm md:text-base rounded-l-full text-black ${
            isMonthly ? "bg-[#d6fc5b] text-black" : "bg-gray-200"
          }`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={`flex-1 px-4 py-2 sm:px-6 sm:py-3.5 text-xs sm:text-sm md:text-base text-black rounded-r-full ${
            !isMonthly ? "bg-[#d6fc5b] text-black" : "bg-gray-200"
          }`}
          onClick={() => setIsMonthly(false)}
        >
          Annually (Save 10%)
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mx-3">
        {/* Starter Plan */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col w-full sm:w-80 md:w-64 lg:w-80">
          <div className="flex space-x-4">
            <div className="flex justify-center items-center ">
              <LuSquareDot className="w-16 h-16 text-black bg-greenTouch rounded-lg " />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Starter</h3>
              <div className="mt-2 text-4xl flex font-bold text-white">
                ${isMonthly ? "29" : "261"}
                <p className="text-sm flex items-center font-thin text-[#718096] justify-center mx-2">
                  /month
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-500 my-4 w-full"></div>
          <p className="mt-2 text-gray-500">
            For up to 10 customers and 1 agent
          </p>
          <ul className="mt-4 space-y-2.5 text-gray-600">
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 mt-1 text-gray-400" /> 10
              Customers
            </li>
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 mt-1 text-gray-400" /> 1 Agent
            </li>
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 mt-1 text-gray-400" /> Deal
              Pipeline
            </li>
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 mt-1 text-gray-400" /> Meeting
              Scheduling
            </li>
          </ul>
          <button
            onClick={() => {
              getCheckout("Starter", isMonthly ? 29 : 261);
            }}
            className="px-6 py-3 mt-auto  w-full text-black bg-[#d6fc5b] rounded-full"
          >
            Choose Starter
          </button>
        </div>

        {/* Professional Plan */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col w-full sm:w-80 md:w-64 lg:w-80 text-white">
          <div className="flex space-x-4">
            <div className="flex justify-center items-center ">
              <LuSquareDot className="w-16 h-16 text-black bg-greenTouch rounded-lg " />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Starter</h3>
              <div className="mt-2 text-4xl flex font-bold text-white">
                ${isMonthly ? "49" : "441"}
                <p className="text-sm flex items-center font-thin text-[#718096] justify-center mx-2">
                  /month
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-500 my-4 w-full"></div>
          <p className="mt-2">For up to 100 customers and 10 agents</p>
          <ul className="mt-4 space-y-2.5">
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 h-5 w-5 text-gray-400" /> 10
              Customers
            </li>
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 h-5 w-5 text-gray-400" /> 10
              Agents
            </li>
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 h-5 w-5 text-gray-400" /> Sale
              Analytics
            </li>
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 h-5 w-5 text-gray-400" /> Smart
              Send Times
            </li>
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 h-5 w-5 text-gray-400" /> 1:1
              video creation
            </li>
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 h-5 w-5 text-gray-400" /> Single
              sign-on
            </li>
          </ul>
          <button
            onClick={() => {
              getCheckout("Starter", isMonthly ? 49 : 441);
            }}
            className="px-6 py-3 mt-8 w-full text-white bg-orange-600 rounded-full"
          >
            Choose Professional
          </button>
        </div>

        {/* Organization Plan */}
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg flex flex-col w-full sm:w-80 md:w-64 lg:w-80">
          <div className="flex space-x-4">
            <div className="flex justify-center items-center ">
              <LuSquareDot className="w-16 h-16 text-black bg-greenTouch rounded-lg " />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Starter</h3>
              <div className="mt-2 text-4xl flex font-bold text-white">
                ${isMonthly ? "99" : "891"}
                <p className="text-sm flex items-center font-thin text-[#718096] justify-center mx-2">
                  /month
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-500 my-4 w-full"></div>
          <p className="mt-2 text-gray-500">Unlimited customers and agents</p>
          <ul className="mt-4 space-y-2.5 text-gray-600">
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 mt-1 text-gray-400" /> Unlimited
              Customers
            </li>
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 mt-1 text-gray-400" /> Unlimited
              Agents
            </li>
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 mt-1 text-gray-400" />{" "}
              Predictive Lead Scoring
            </li>
            <li className="flex font-semibold text-sm text-white">
              <IoCheckmarkSharp className="mx-2 mt-1 text-gray-400" /> User
              Roles
            </li>
          </ul>
          <button
            onClick={() => {
              getCheckout("Organization", isMonthly ? 99 : 891);
            }}
            className="px-6 py-3 mt-auto w-full text-black bg-[#d6fc5b] rounded-full"
          >
            Choose Organization
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
