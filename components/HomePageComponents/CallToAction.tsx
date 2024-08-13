const CallToAction = () => {
  return (
    <div className="m-4 flex flex-col md:flex-row items-center justify-between bg-gray-950 p-8 rounded-lg shadow-md max-w-6xl mx-auto my-8 space-y-4 md:space-y-0 md:space-x-4">
      <div className="text-center md:text-left">
        <h3 className="text-lg md:text-xl font-bold text-white">Understand First. Lorem ipsum dolor sit amet.</h3>
        <p className="text-white mt-2">We help our clients achieve tangible, high-impact results.</p>
      </div>
      <button className="bg-greenTouch text-black font-normal px-4 py-3 rounded-full hover:bg-lime-400">
        Download our Free Cheat Sheet
      </button>
    </div>
  );
};

export default CallToAction;
