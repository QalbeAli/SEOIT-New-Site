import React from "react";
import { CiBasketball } from "react-icons/ci";
import { MarqueeDemo } from "./Marquee";
const ThirdSection = () => {
  return (
    <>
      <div className="w-full max-w-screen-2xl my-40">
        <div className="card__container">
          <div className="columns mod--card-head">
            <div className="columns__col is-1-old mod--heading-works">
              <h2 className="heading-1">
                #1 ON
                <br />
                Dribbble
              </h2>
            </div>
            <div className="columns__col is-2-old mod--works-heading">
              <p className="works__subheading hide-tablet">
                Our company offers personalized design and development solutions
                that prioritize user experience.
              </p>
              <div className="works__more mod--ondribble w-inline-block">
                Get <br /> Inspired
              </div>
            </div>
          </div>
          <div
            className="columns mod--projects-dribble"
            style={{ justifyContent: "start" }}
          >
            <div className="columns__col is-1-old mod--projects-dribble">
              <div className="dribble-card__border">
                <div className="bg-blue-950 rounded-full px-3 py-2 w-fit">
                  <div className=" flex items-center text-white">
                    <CiBasketball size={50} className="text-white pr-2" />
                    <div className="border-l pl-2 uppercase">
                      7M view Monthly
                    </div>
                  </div>
                </div>
                <div className="dribble-card__advant">
                  <div className="text-size-80 text-weight-medium">1000+</div>
                  <div className="heading-6 text-size-tablet-16">
                    Impressive Dribbble shots, showcasing our design expertise
                    and prowess
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="columns__col is-1-old mod--projects-dribble !w-full md:!w-[60%]">
              <div className="dribble-card__border overflow-hidden">
                <div className=" rotate-45">
                  <MarqueeDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
