const LeadGeneration = () => {
  return (
    <div className="p-8 flex items-center justify-center">
      <div className="max-w-6xl rounded-lg overflow-hidden flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8 flex flex-col space-y-10 justify-center">
          <h4 className="text-white text-center md:text-left font-bold text-xl uppercase tracking-wide">
            OVER 15,000+ LEADS GENERATED
          </h4>
          <h2 className="text-3xl font-bold text-white mt-2 leading-10 text-center md:text-left">
            Get <span className="text-lime-500">More Conversions</span> With Our Services
          </h2>
          <p className="mt-4 leading-8 text-white text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur magna aliqua. Eaque ipsa quae ab illo inventore veritatis. Nemo enim ipsam voluptatem voluptas. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
          </p>
          <div className="flex justify-center">
            <button className="mt-3 px-6 py-2 bg-[#d6fc5b] text-black rounded-full font-normal hover:bg-lime-300 self-start">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full lg:w-2/5 relative">
          <div className="relative md:mt-20 rounded-2xl w-full h-full">
            <video
              src="/video3.mp4" // Ensure this path is correct
              controls
              autoPlay
              muted
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGeneration;
