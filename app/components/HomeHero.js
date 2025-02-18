'use client';

import Image from 'next/image';
import Link from 'next/link';

const AiFutureSection = () => {
  return (
    <section className="bg-[#FFFFFF] py-12 px-4 md:px-8 lg:px-16">
      {/* Heading Section */}
      <div className="text-start max-w-9xl mx-auto mb-[25px]">
        <h1 className="text-[36px] md:text-[48px] lg:text-[115px] font-medium leading-[0.9] text-gray-900">
          FUTURE OF APPS -<span className="block mt-0">DRIVEN BY AI</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-[21px] font-normal text-gray-600 mt-4">
          AppVersal powers some of the world's largest Apps. AppVersal is
          revolutionizing the App world with AI.
        </p>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Card */}
        <div className="flex flex-col md:flex-row bg-[#E5FF9A] p-6 rounded-lg shadow-lg">
          <div className="flex-1">
            <h2 className="text-xl md:text-[39px] font-semibold text-[#000000] mb-4 leading-[1.2]">
              App Store <br />  Optimization
            </h2>
            <p className="text-gray-700 text-[16px] font-normal leading-relaxed">
              Unlock your app's potential with data-driven ASO strategies.
              Dominate search rankings, boost discoverability, and increase
              downloads across global app stores. With cutting-edge keyword
              optimization and A/B testing, your app stays ahead of the
              competition.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full">
              <Image
                src="/tab.png"
                alt="App Store Optimization"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="relative flex flex-col bg-contain bg-cover bg-no-repeat rounded-lg shadow-lg h-auto w-full p-6 md:p-6"
          style={{
            backgroundImage: `url('/arrow.png')`,
          }}
        >
          <div className="flex-1 flex justify-start items-end">
            <div className="p-4 rounded-md">
              <h2 className="text-lg md:text-[34px] font-normal text-gray-900  leading-[1.2]">
                App Growth Tools
                <br />
              </h2>
              <p className="text-sm font-normal max-w-[400px] text-gray-700">
                Supercharge your app experience with powerful growth tools.
                Integrate stories, quizzes, coachmarks, and banners seamlessly
                to boost engagement and conversion rates. Drive feature adoption
                and elevate the overall user journey effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Third Card */}
        <div
          className="flex flex-col justify-end bg-cover bg-no-repeat rounded-lg shadow-lg h-auto w-full p-6 md:p-6"
          style={{
            backgroundImage: `url('/ai.png')`,
          }}
        >
          <h2 className="text-lg md:text-[34px] font-normal text-gray-900 mb-4 leading-[1.2]">
            Future of Apps Is Powered <br /> By AI Agents
          </h2>

          <p className="text-[#0C2215] text-[13px] max-w-[250px] font-normal leading-relaxed">
            Discover the next generation of app intelligence with AI agents that
            redefine user engagement. Automate personalized interactions, drive
            higher retention, and gain real-time insights into user behavior.
            The future of apps isn't just smarter—it's intuitive, proactive, and
            built to scale. 
          </p>
        </div>

        {/* Fourth Card */}
        <div className="flex flex-col justify-between bg-[#51656D] p-6 rounded-lg shadow-lg">
          <h2 className="text-lg md:text-[34px] font-normal text-[#ffffff] leading-[1.2]">
            User Acquisition - <br />Performance Marketing
          </h2>
          <p className="text-sm font-normal text-[#ffffff] mt-4">
            Scale your app with laser-focused performance marketing campaigns.
            From user acquisition to retention, we deliver measurable results
            across every channel. Maximize ROI with precision targeting and
            advanced analytics to fuel growth.
          </p>
          <div className="flex justify-end mt-4">
            <span className="h-[38px] w-[38px]">
              <Image
                src="/flower.png"
                alt="Flower icon"
                width={38}
                height={38}
              />
            </span>
          </div>
        </div>

        {/* Fifth Card */}
        <div
          className="flex flex-col justify-between bg-[#D9D4FF] bg-cover bg-no-repeat p-6 rounded-lg shadow-lg"
          style={{
            backgroundImage: `url('/apple1.png')`,
          }}
        >
          <div>
            <h2 className="text-lg md:text-[34px] font-normal text-white">
              Apple Search Ads
            </h2>
            <p className="text-sm font-normal text-white mt-4">
              Take your app to the top with Apple Search Ads. Leverage the power
              of intent-driven marketing to capture high-value users directly
              from the App Store. Optimize ad placements, keywords, and bids for
              unmatched campaign performance.
            </p>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Image
              src="/apple2.png"
              alt="Search Ads Icon"
              width={200}
              height={200}
              className="w-1/2 h-full mr-2"
            />
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-[#152E27] text-white mt-10 p-6 md:p-8 lg:p-3 rounded-lg flex flex-col md:flex-row justify-between items-center">
        <p className="text-lg md:text-xl font-medium italic mb-4 md:mb-0">
          <span className="italic">Still unsure about </span>
          <span className="italic">what services you want?</span>
        </p>
        <Link href="/contact">
          <button className="bg-[#C4FF63] text-black px-6 py-2 md:py-2 rounded-[29px] font-semibold text-sm md:text-base shadow-md hover:bg-[#A6DB54] transition-all">
            CONTACT US
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AiFutureSection;