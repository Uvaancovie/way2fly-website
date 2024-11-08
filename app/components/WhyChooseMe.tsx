import React from 'react';
import { FaClock, FaCheckCircle, FaRocket, FaUserShield } from 'react-icons/fa';

const WhyChooseMe = () => (
  <section className="py-16 bg-gray-900 text-white text-center">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Why Build a Website with Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<FaRocket className="text-4xl text-purple-500" />}
          title="Fast Delivery"
          description="Launch your website within 14 days, optimized and ready."
        />
        <FeatureCard
          icon={<FaClock className="text-4xl text-purple-500" />}
          title="Always On-Time"
          description="Reliable timelines with updates throughout the process."
        />
        <FeatureCard
          icon={<FaCheckCircle className="text-4xl text-purple-500" />}
          title="High Quality"
          description="Code that’s built to last with 90%+ performance ratings."
        />
        <FeatureCard
          icon={<FaUserShield className="text-4xl text-purple-500" />}
          title="Client Focused"
          description="Personalized service to bring your unique vision to life."
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default WhyChooseMe;
