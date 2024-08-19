const CallToActionService = () => {
  return (
    <div className="flex justify-center items-center p-2">
      <div className="relative p-[2px] max-w-7xl w-full rounded-lg bg-gradient-to-r from-[#d6fcb5] via-[#e9ffd8] to-[#a9c98a]">
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-950 p-8 rounded-lg">
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold text-white">
            Helping $1m+ Brands to Grow and Attract More Customers
            </h3>
            <p className="text-white mt-2">
            We help our clients achieve tangible, high-impact results that drive growth and customer engagement.
            </p>
          </div>
          <button className="bg-[#d6fc5b] text-black mt-6 md:mt-0 font-normal px-4 py-3 rounded-full hover:bg-lime-200">
          Book Free Growth Hacking Strategy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionService;
