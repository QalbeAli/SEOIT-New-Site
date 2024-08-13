import React from "react";

const Motto = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center my-20 space-y-6 md:space-y-0 md:space-x-20 leading-6 mb-40 text-center md:text-left">
        <div className="space-y-6">
          <div className="font-bold text-3xl text-white">Our Motto</div>
          <div className="text-white">Lorem ipsum dolor sit amet <br className="hidden md:block" /> pri cu etiam iudicabit.</div>
        </div>
        <p className="text-white mt-2 max-w-lg">
          Docendi deleniti eos ad. His enim tractatos ea, evertitur <br className="hidden md:block" /> dissentiunt
          nec ut, Mel tota quidam senserit et ut tritani <br className="hidden md:block" /> platonem est. In a
          professional context it often happens that <br className="hidden md:block" /> private or corporate
          clients order a publication to be made <br className="hidden md:block" /> and presented with the actual
          content still not being ready.
        </p>
      </div>
    </>
  );
};

export default Motto;
