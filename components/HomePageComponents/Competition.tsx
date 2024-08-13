import React from "react";
import { FaChartPie, FaHeadset, FaInfinity, FaLightbulb } from "react-icons/fa";

const Competition = () => {
  return (
    <>
      <div className="flex flex-col mt-20 justify-center items-center ">
        <div className="space-y-6">
          <div className="font-bold text-xl text-white text-center ">
            Get access to unlimited resources
          </div>
          <div className="mb-10 text-white font-bold white text-center text-3xl">
            Why Choose Us Over Competition?{" "}
          </div>
        </div>
        <div>
          <div className="p-8  flex items-center justify-center">
            <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-8  rounded-xl p-8 shadow-lg">
              <div className=" border-b sm:border-b-0 sm:border-r border-gray-200 pb-6 sm:pb-0 sm:pr-6">
                <div className="flex items-center space-x-3 ">
                  <div className="  bg-[#d6fc5b] rounded-md text-[#a8a3a8] ">
                    <FaChartPie className="w-12 h-12 p-1 text-black " />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Advanced Analytics
                  </h3>
                </div>
                <div className="pt-4">
                  <p className="text-white">
                    At vero eos et accusamus et. Tempor incididunt ut labore et
                    dolore magna aliqua consectetur magna aliqua.
                  </p>
                </div>
              </div>
              <div className="  border-gray-200 pb-6 sm:pb-0 sm:pr-6">
                <div className="flex items-center space-x-3 ">
                  <div className="  bg-[#d6fc5b] rounded-md text-[#a8a3a8]">
                    <FaHeadset className="w-12 h-12 p-1 text-black " />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                  Lifetime Access
                  </h3>
                </div>
                <div className="pt-4">
                  <p className="text-white">
                    At vero eos et accusamus et. Tempor incididunt ut labore et
                    dolore magna aliqua consectetur magna aliqua.
                  </p>
                </div>
              </div>

              <div className="flex items-center border-b sm:border-b-0 sm:border-r border-gray-200 pt-6 sm:pt-0 sm:pb-6 sm:pr-6">
                <div className="  border-gray-200 pb-6 sm:pb-0 sm:pr-6">
                  <div className="flex items-center space-x-3 ">
                    <div className="  bg-[#d6fc5b] rounded-md text-[#a8a3a8]">
                      <FaInfinity className="w-12 h-12 p-1 text-black " />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                    Expert Support
                    </h3>
                  </div>
                  <div className="pt-4">
                    <p className="text-white">
                      At vero eos et accusamus et. Tempor incididunt ut labore
                      et dolore magna aliqua consectetur magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center pt-6 sm:pt-0 sm:pb-6 sm:pr-6">
                <div className="  border-gray-200 pb-6 sm:pb-0 sm:pr-6">
                  <div className="flex items-center space-x-3 ">
                    <div className="  bg-[#d6fc5b] rounded-md text-[#a8a3a8]">
                      <FaLightbulb className="w-12 h-12 p-1 text-black " />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                    Creative Solutions
                    </h3>
                  </div>
                  <div className="pt-4">
                    <p className="text-white">
                      At vero eos et accusamus et. Tempor incididunt ut labore
                      et dolore magna aliqua consectetur magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Competition;
