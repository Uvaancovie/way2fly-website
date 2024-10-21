import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Activity, Dice1, Car } from 'lucide-react';

const projects = [
  {
    title: "Health & Wellness App",
    description: "A comprehensive platform for managing personal health and wellness goals.",
    icon: Activity,
    link: "https://health-wellness-omega.vercel.app/"
  },
  {
    title: "Roulette Game",
    description: "An interactive online roulette game with realistic gameplay.",
    icon: Dice1,
    link: "https://roulette-game-six.vercel.app/"
  },
  {
    title: "RVC Roadworthy",
    description: "A professional website for vehicle roadworthy certification services.",
    icon: Car,
    link: "https://rvc-roadworthy.vercel.app/"
  }
];

const PortfolioPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Portfolio Highlights
        </h2>
        
        <div className="relative bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 flex items-center justify-center p-8">
            {React.createElement(projects[currentIndex].icon, { 
              size: 120, 
              className: "text-blue-400"
            })}
          </div>
          
          <div className="absolute top-0 bottom-0 left-0 flex items-center">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-r-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 transition duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-0 bottom-0 right-0 flex items-center">
            <button 
              onClick={nextSlide}
              className="p-2 rounded-l-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 transition duration-300"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white p-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{projects[currentIndex].title}</h3>
            <p className="text-sm mb-3">{projects[currentIndex].description}</p>
            <a 
              href={projects[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
            >
              View Project
            </a>
          </div>
        </div>
        
        <div className="flex justify-center mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-500'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;