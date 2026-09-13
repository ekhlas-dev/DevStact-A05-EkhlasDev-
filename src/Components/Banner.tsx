import React from "react";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[500px] max-w-[1340px] items-center justify-between px-6 py-12 lg:px-0">
        {/* Left Content */}
        <div className="max-w-[680px]">
          <h1 className="text-[52px] font-extrabold leading-[1.05] tracking-[-2px] text-[#111827] md:text-[60px]">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-8 max-w-[650px] text-[20px] leading-[1.6] text-[#64748b]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center gap-3">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-3 text-[16px] font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-lg">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-200 bg-white px-12 py-3 text-[16px] font-medium text-gray-600 transition duration-300 hover:border-gray-300 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden shrink-0 lg:block">
          <img
            src="/public/banner-stack.png"
            alt="Technology Stack"
            className="h-[380px] w-[380px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
