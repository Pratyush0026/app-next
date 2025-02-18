import React from 'react';
import img1 from '../assets/partner.png'

const PartnershipImpact = () => {
  const stats = [
    {
      number: "4,200+",
      label: "PROJECTS DELIVERED"
    },
    {
      number: "2,500+",
      label: "CLIENTS SERVED"
    },
    {
      number: "23+",
      label: "COUNTRIES SERVED"
    },
    {
      number: "200+",
      label: "5-STAR REVIEWS"
    }
  ];

  return (
    <div className="relative h-[471px] w-full bg-gradient-to-r from-black to-[#002E1D] overflow-hidden">
      {/* Background image container */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // The actual background image should be set via CSS or inline style
          backgroundImage: `url(${img1})`
        }}
      />

      {/* Content container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-normal mb-4">
            Our Partnership Impact
          </h2>
          <p className="text-gray-300">
            We believe in quantity with quality services.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[52px] sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-3">
                {stat.number}
              </span>
              <span className="text-[14px] sm:text-sm font-medium text-gray-300 tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipImpact;