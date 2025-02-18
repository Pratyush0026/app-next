import React, { useState } from 'react';
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

const ContactHero = () => {
  const [openSection, setOpenSection] = useState('india');

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <section className="bg-[#0C2114] min-h-screen w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left Content */}
        <div className="space-y-16">
          {/* Heading */}
          <div className="space-y-0">
            <h1 className="text-4xl md:text-5xl lg:text-[48px] text-white font-normal leading-tight">
              Let's build something
            </h1>
            <p className="text-4xl md:text-5xl lg:text-[48px] text-white font-serif italic leading-tight">
              great together
            </p>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-4">
            {/* India Section */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => toggleSection('india')}
                className="w-full text-left py-4 flex items-center justify-between text-white"
              >
                <span className="text-lg">India</span>
                <span className="text-2xl">{openSection === 'india' ? '−' : '+'}</span>
              </button>
              {openSection === 'india' && (
                <div className="pb-4 space-y-4">
                  <p className="text-gray-300">Tapasya Corp Heights, Sector 126, Noida</p>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>✉</span>
                    <a href="mailto:support@appversal.com" className="hover:text-white transition-colors">
                      support@appversal.com
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* USA Section */}
            <div className="border-b border-gray-700">
              <button
                onClick={() => toggleSection('usa')}
                className="w-full text-left py-4 flex items-center justify-between text-white"
              >
                <span className="text-lg">United State Of America</span>
                <span className="text-2xl">{openSection === 'usa' ? '−' : '+'}</span>
              </button>
              {openSection === 'usa' && (
                <div className="pb-4 space-y-4">
                  <p className="text-gray-300">Address details here</p>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>✉</span>
                    <a href="mailto:us.support@appversal.com" className="hover:text-white transition-colors">
                      us.support@appversal.com
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-10">
            <p className="text-white">Follow Us</p>
            <div className="flex gap-6">
              <Facebook className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
              <Linkedin className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
              <Twitter className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
              <Youtube className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
              <Instagram className="w-6 h-6 text-white cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-lg p-8 lg:p-12">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">FULL NAME*</label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">EMAIL ADDRESS*</label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* <div>
              <label className="block text-sm font-medium mb-2">PHONE NUMBER*</label>
              <div className="flex gap-2">
                <select className="w-20 p-3 border border-gray-300 rounded-lg">
                  <option>+91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  className="flex-1 p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">I AM INTERESTED IN*</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-600">
                <option>Select a service</option>
              </select>
            </div> */}

            <div>
              <label className="block text-sm font-medium mb-2">ADDITIONAL MESSAGE</label>
              <textarea
                rows={3}
                placeholder="Please provide any additional details about your request"
                className="w-full p-3 border border-gray-300 rounded-lg resize-none"
              />
            </div>

            <div className="text-sm text-gray-600">
              {/* By submitting this form, you agree to our{' '} */}
              <a href="#" className="underline hover:text-black">privacy policy</a> and{' '}
              <a href="#" className="underline hover:text-black">terms and conditions</a>.
            </div>

            <button 
              type="submit"
              className="bg-[#D2F34C] text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors text-sm font-medium"
            >
              SUBMIT FORM
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;