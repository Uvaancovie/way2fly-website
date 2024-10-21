import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Elevate Your Web Development with Next.js Expertise
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-gray-300">
          Unlock the full potential of your web projects with cutting-edge Next.js solutions and expert consultation.
        </p>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            Exclusive Offer: Boost Your Next.js Skills
          </h2>
          <p className="text-gray-300 mb-4">
            Get 20% off on my comprehensive Next.js mastery course. Limited time offer for serious developers!
          </p>
        </div>
        
        <a 
          href="#contact" 
          className="
            inline-block px-8 py-4 text-lg font-semibold rounded-lg
            bg-gradient-to-r from-blue-500 to-purple-600
            text-white
            transition duration-300 ease-in-out
            transform hover:-translate-y-1 hover:scale-105
            shadow-lg hover:shadow-xl
          "
        >
          Start Your Next.js Journey
        </a>
      </div>
    </section>
  );
};

export default HeroSection;