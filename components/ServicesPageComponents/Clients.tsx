import React from "react";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="container mx-auto flex flex-col items-center w-full p-4">
      <div className="p-4 rounded-lg overflow-hidden w-full max-w-5xl mb-8">
        <Image
          src="/clients.webp"
          alt="clients"
          layout="responsive"
          width={1200}
          height={800}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center text-center w-full max-w-5xl mx-auto md:space-x-10 md:text-left p-4">
        <div className="font-bold text-2xl md:text-3xl mb-6 md:mb-8  whitespace-nowrap space-y-2 text-sil">
          Join Our Happy Community <br /> of Clients
        </div>
        <div className="text-sm md:text-base space-y-2 md:mb-6 text-small text-lightDark">
          Our clients are more than just customers they &apos;re partners in
          innovation and growth. We pride ourselves on delivering results that
          matter, helping businesses from startups to global enterprises,
          achieve their full potential. Whether you &apos;re looking to scale your
          operations or refine your strategy, our tailored solutions are
          designed to meet your unique needs and exceed expectations.
        </div>
      </div>
    </div>
  );
};

export default Clients;
