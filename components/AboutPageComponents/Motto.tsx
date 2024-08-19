import React from "react";

const Motto = () => {
  return (
    <>

      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center my-20 space-y-6 md:space-y-0 md:space-x-20 leading-6 mb-40 text-center md:text-left">
        <div className="space-y-6">
          <div className="font-bold text-3xl text-white">Our Motto</div>
          <div className="text-white">We want to build cool shit that works </div>
        </div>
        <p className="text-white mt-2 max-w-lg">
        From our humble beginnings, we&apos;ve rapidly grown, attracting a diverse range of clients with annual revenues spanning from $1 million to over $150 million. Our commitment to delivering tangible results has set us apart, making SEO iT Social a trusted partner for high-revenue businesses looking to scale.
        </p>
      </div>
    </>
  );
};

export default Motto;
