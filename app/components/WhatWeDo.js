import React from 'react';
import Image from 'next/image';

const WhatWeDoSection = () => {
  const cards = [
    {
      title: "Conversational AI & Chatbots",
      description: "From intelligent chatbots to AI-driven virtual assistants, we create seamless conversational experiences that elevate user interactions.",
      color: "bg-[#F8F7FF]",
      iconPosition: "left",
      className: "shadow-md"
    },
    {
      title: "AI-Powered App Development & Marketing",
      description: "We integrate AI into app development, app store optimization (ASO), and performance marketing to drive unmatched engagement and growth.",
      color: "bg-[#0B6B5D]",
      iconPosition: "right",
      textColor: "text-white"
    },
    {
      title: "Custom AI Solutions for Enterprises",
      description: "We design and develop AI-powered solutions tailored to your business needs—enhancing automation, efficiency, and customer engagement.",
      color: "bg-[#E8FFBA]",
      iconPosition: "left"
    },
    {
      title: "Generative AI for Content & Creativity",
      description: "We harness Generative AI for automated content generation, image synthesis, video creation, and more, helping businesses scale effortlessly.",
      color: "bg-[#0B6B5D]",
      iconPosition: "left",
      textColor: "text-white"
    },
    {
      title: "Internal AI-Driven Innovation",
      description: "Beyond client solutions, we are revolutionizing our own products and services with AI—enhancing efficiency, automation, and decision-making.",
      color: "bg-[#F8F7FF]",
      iconPosition: "right",
      className: "shadow-md"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column - Cards */}
        <div className="w-full lg:w-[45%] space-y-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-7 ${card.color} ${card.className || ''} transition-transform hover:scale-[1.02]`}
            >
              {/* Icon */}
              <div className={`${card.iconPosition === 'left' ? 'left-7' : 'right-7'} top-7 absolute`}>
                <div className="w-6 h-6 rounded-full bg-[#0B6B5D] bg-opacity-10 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/16/16" 
                    alt="icon" 
                    className="w-4 h-4"
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className={`text-xl font-semibold mb-3 ${card.textColor || 'text-gray-800'}`}>
                  {card.title}
                </h3>
                <p className={`text-sm leading-relaxed ${card.textColor ? 'text-gray-100' : 'text-gray-600'}`}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Content and Image */}
        <div className="w-full lg:w-[75%] pt-8 lg:pt-16">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">
              What <span className="italic">We Do</span>
            </h2>
            <p className="text-gray-600">
              Transforming Businesses with Generative AI & Conversational AI
            </p>
          </div>
          
          {/* AI Image */}
          <div className="relative w-full max-w-lg mx-auto">
            <Image 
              src="/ain.png" // Replace with your actual image path
              alt="AI Circuit Diagram"
              width={500}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;