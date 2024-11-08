import React from 'react';
import { FaRocket, FaBolt, FaMobileAlt, FaCode } from 'react-icons/fa';

const HeroSection = () => (
  <section className="hero bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20 px-8 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r text-white text-transparent bg-clip-text">
        Hi, I’m Uvaan from Durban, South Africa
      </h1>
      <p className="text-xl sm:text-2xl text-gray-300 mb-6">
        An Application Developer with 5 years of experience in creating high-performance web and mobile apps.
      </p>
    </div>
    <div className="flex justify-center gap-8 mt-10">
      <Feature icon={<FaRocket />} title="Quick Turnaround" description="Apps in 14 days" />
      <Feature icon={<FaBolt />} title="High Performance" description="90%+ rating" />
      <Feature icon={<FaMobileAlt />} title="Mobile & Web" description="Optimized for all devices" />
      <Feature icon={<FaCode />} title="Next.js Expertise" description="Modern, scalable solutions" />
    </div>
    <a
      href="#contact"
      className="
        inline-block mt-12 px-8 py-4 text-lg font-semibold rounded-lg
        bg-gradient-to-r from-purple-500 to-pink-600
        text-white
        transition duration-300 ease-in-out
        shadow-lg hover:shadow-xl transform
      "
    >
      Let’s Build Your App Together
    </a>
  </section>
);

// Feature component with simpler prop types
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-white">
    <div className="text-4xl mb-3">{icon}</div>
    <p className="font-semibold">{title}</p>
    <span className="text-gray-300 text-sm">{description}</span>
  </div>
);

export default HeroSection;
