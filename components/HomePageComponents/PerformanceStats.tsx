import NumberTicker from "@/components/magicui/number-ticker";
import { NeonGradientCard } from "../magicui/neon-gradient-card";
import Meteors from "../magicui/meteors";

const PerformanceStats = () => {
  return (
    <>
      <div className="pointer-events-none whitespace-pre-wrap  p-2 w-full max-w-5xl mx-auto  bg-clip-text text-center text-8xl font-semibold leading-none text-transparent ">
        <NeonGradientCard>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 h-full w-full">
              <Meteors number={30} />
            </div>
            <div className="relative z-10 w-full  rounded-lg space-y-8 sm:space-y-12 shadow-2xl overflow-hidden p-6 sm:p-12 lg:p-20 text-center">
              <h4 className="text-white font-bold text-lg sm:text-xl uppercase tracking-wide">
                Proven Results for High-Growth Businesses
              </h4>
              <h2 className="text-2xl sm:text-3xl font-bold leading-relaxed text-white mt-4">
                Growth Hacking Strategies That Drive Revenue and Scale Your
                Business
              </h2>
              <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-0 sm:space-x-12 flex flex-col sm:flex-row justify-center sm:justify-between">
                <div className="flex flex-col items-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-greenTouch">
                    <NumberTicker value={20000} />
                  </span>
                  <p className="text-white mt-2 text-sm sm:text-base">
                    High-Quality Leads Generated
                  </p>
                </div>
                <div className="flex flex-col items-center mt-8 sm:mt-0">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-greenTouch">
                    <NumberTicker value={500} />
                  </span>
                  <p className="text-white mt-2 text-sm sm:text-base">
                    Successful Marketing Campaigns Executed
                  </p>
                </div>
                <div className="flex flex-col items-center mt-8 sm:mt-0">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-greenTouch">
                    <NumberTicker value={10000000} />
                  </span>
                  <p className="text-white mt-2 text-sm sm:text-base">
                    Revenue Generated for Our Clients
                  </p>
                </div>
                <div className="flex flex-col items-center mt-8 sm:mt-0">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold ">
                    <NumberTicker value={20} />
                  </span>
                  <p className="text-white mt-2 text-sm sm:text-base">
                    Satisfied Clients Across Multiple Industries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </NeonGradientCard>
      </div>
    </>
  );
};

export default PerformanceStats;
