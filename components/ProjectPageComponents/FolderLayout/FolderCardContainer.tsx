const FolderWrapper = ({ ...props }: React.ComponentProps<"svg">) => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <div
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/63fc977c14aaea404dce4439/66bc83769af253c52bbc682e_Preview.webp')",
        }}
        className="bg-cover h-full w-full bg-no-repeat bg-center absolute inset-0 z-1 "
      />
      <div className="absolute inset-0 border-b border-r border-[#02021E] " />
      <svg
        viewBox="0 0 896 556"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative "
        {...props}
      >
        <path
          d="M0 27.4503C2.869 9.85041 11 1.99638 29 0L0 8.48723e-05V27.4503Z"
          fill="#02021E"
        />
        <path
          d="M896 527.584C893.131 545.184 885 553.088 867 555.084H896V527.584Z"
          fill="#02021E"
        />
        <path
          d="M0 527.45C2.869 545.05 11 553.088 29 555.084H0V527.45Z"
          fill="#02021E"
        />
        <path
          d="M326.916 12.2261C318.958 4.39955 307.166 2.17484 293 0H896V73.8662C888.96 48.7805 880.5 37.4322 854.603 31.5842C852 28.4485 378.867 34.8906 359.834 31.5842C340.801 28.2777 337.48 23.2975 326.916 12.2261Z"
          fill="#02021E"
        />
      </svg>
    </div>
  );
};

export default FolderWrapper;
