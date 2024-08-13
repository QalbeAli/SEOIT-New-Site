import Image from "next/image";
import React from "react";
import { ImPaypal } from "react-icons/im";
interface CustomerReviewProps {
  imageSrc: string;
  review: string;
  name: string;
  title: string;
  companyLogo: string;
}

const CustomerReview: React.FC<CustomerReviewProps> = ({
  imageSrc,
  review,
  name,
  title,
  companyLogo,
}) => {
  return (
    <>
      <main className="m-10 md:m-20">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-20">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-80 bg-white rounded-lg shadow-md flex items-center justify-center">
            <Image
              className="rounded-xl object-cover"
              src={`/${imageSrc}`}
              alt={name}
              width={250}
              height={250}
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className=" font-bold mb-10 text-white text-2xl ">
              Customer Story
            </h3>
            <p className="text-2xl text-white font-semibold mb-10">
              Excellent customer service, <br className="hidden md:block" /> You
              guys are the best!
            </p>
            <p className="text-white mb-4">
              Sed commodo, est quis maximus <br className="hidden md:block" />{" "}
              fermentum, massa ipsum euismod neque,
              <br className="hidden md:block" /> in varius risus tellus quis
              lacus. Sed ac <br className="hidden md:block" /> bibendum odio.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
              {/* <img
                className="w-6 h-6 mr-2"
                src={companyLogo}
                alt={`${name}'s company logo`}
              /> */}
              <ImPaypal className="w-8 h-8 mr-3" />
              <div>
                <p className="text-white">{name}</p>
                <p className="text-white">Marketing Manager - Paypal</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CustomerReview;
