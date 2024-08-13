import Image from "next/image";
import { FaChartLine, FaEnvelope } from "react-icons/fa";

const MarketingService = () => {
  return (
    <div className="p-8 flex items-center justify-center">
      <div className="max-w-6xl flex justify-center items-center flex-col lg:flex-row">
        <div className=" w-full lg:w-2/5  p-8 ">
        <video
            src="/video2.mp4" // Ensure this path is correct
            controls
            autoPlay
            muted
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-8 space-y-5 lg:mt-0">
          <h4 className="text-white uppercase text-center lg:text-left tracking-wide font-bold text-xl">
            Grow Your Business
          </h4>
          <h2 className="text-3xl font-bold text-center lg:text-left text-white mt-2">
            Best Marketing Service for <br />{" "}
            <span className="text-greenTouch">Technological Era</span>
          </h2>
          <p className="mt-4 text-white text-center lg:text-left">
            Target your audience based on their interests. Lorem ipsum dolor sit
            amet, consectetur magna.
          </p>
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <FaChartLine className="w-10 h-10 bg-greenTouch rounded-md p-1 text-black" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">
                  Automatic interest detection
                </h3>
                <p className="text-white">
                  Tempor incididunt ut labore et dolore magna aliqua consectetur
                  magna.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="w-10 h-10 bg-greenTouch rounded-md p-1 text-black" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">
                  Daily email reports
                </h3>
                <p className="text-white">
                  Tempor incididunt ut labore et dolore magna aliqua consectetur
                  magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingService;
