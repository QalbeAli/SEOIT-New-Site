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
      <div className="flex flex-col md:flex-row items-center text-center md:space-x-10 md:text-left p-4">
        <div className="font-bold text-2xl md:text-3xl mb-6 md:mb-8 space-y-2 text-sil">
          Join our happy <br className="hidden md:block"/> community of clients
        </div>
        <div className="text-sm md:text-base space-y-2 md:mb-6 text-small text-lightDark">
          Mel tota quidam senserit et ut tritani platonem est. In a professional
          context it <br className="hidden md:block"/> often happens that private or corporate clients order a
          publication to be made <br className="hidden md:block"/> and presented with the actual content still not
          being ready.
        </div>
      </div>
    </div>
  );
};

export default Clients;
