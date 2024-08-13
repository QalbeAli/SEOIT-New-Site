const CallToActionService = () => {
  return (
    <div className="m-4 my-10 flex flex-col md:flex-row items-center justify-between bg-gray-950 p-8 rounded-lg shadow-md max-w-6xl mx-auto  space-y-4 md:space-y-0 md:space-x-4">
      <div className="text-center md:text-left">
        <h3 className="text-lg md:text-xl font-bold text-white">
          Helping brands to grow and attract more customers
        </h3>
        <p className="text-white mt-2">
          We help our clients achieve tangible, high-impact results.
        </p>
      </div>
      <button className="bg-[#d6fc5b] text-black font-normal px-4 py-3 rounded-full hover:bg-lime-200">
        Contact Us Now
      </button>
    </div>
  );
};

export default CallToActionService;
