import React from "react";
import img1 from "../assets/appversal.png";

const SectionComponent = () => {
  return (
    <section className="flex flex-col lg:flex-row items-stretch gap-6 px-4 lg:px-12 py-8 lg:py-16">
      {/* Left Box */}

      {/* Left Section */}
      <div className="bg-gradient-to-b from-[#121212] to-[#191D10] text-white lg:w-1/2 p-8 lg:p-12 relative overflow-hidden shadow-md rounded-lg">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-serif italic font-medium mb-6">
          Who are we?
        </h2>

        {/* Paragraphs */}
        <p className="text-lg lg:text-xl mb-6 leading-relaxed">
          AppVersal is an award-winning, app-first company, running for over a
          decade, doing all the heavy lifting required to push the world’s
          biggest app brands to reach their intended goal and beyond.
        </p>
        <p className="text-lg lg:text-xl mb-8 leading-relaxed">
          Our mixed team of designers, engineers, writers, and data analysts
          help companies and clients across borders optimize app visibility
          while boosting downloads and returns, interchangeably growing their
          business faster than ever!
        </p>

        {/* Button */}
        <button className="bg-[#c9ff56] hover:bg-[#a7db3f] text-black font-semibold py-3 px-6 rounded-full transition-colors mb-12">
          LEARN MORE
        </button>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold">4,200+</h3>
            <p className="text-sm lg:text-base text-gray-400 uppercase">
              Projects Delivered
            </p>
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold">2,500+</h3>
            <p className="text-sm lg:text-base text-gray-400 uppercase">
              Clients Served
            </p>
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold">23+</h3>
            <p className="text-sm lg:text-base text-gray-400 uppercase">
              Countries Served
            </p>
          </div>
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold">200+</h3>
            <p className="text-sm lg:text-base text-gray-400 uppercase">
              5-Star Reviews
            </p>
          </div>
        </div>
      </div>

      {/* Right Box */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Upper Box */}
        <div className="flex-1 bg-gray-200 rounded-xl overflow-hidden">
          <img
            src={img1}
            alt="Example"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lower Box */}
        <div className=" flex-1 bg-gray-900 text-white rounded-xl flex items-center justify-center">
          <h3 className="text-3xl lg:text-7xl font-normal text-center">
            Small Team, <br />
            Big Results
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SectionComponent;
