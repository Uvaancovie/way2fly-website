import React from 'react';
import { FaDatabase, FaCode, FaLaptopCode, FaCloud } from 'react-icons/fa'; // Example icons, customize as needed

const ExpertiseSection = () => (
  <section className="py-16 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Technologies I Use
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TechnologyCard
          icon={<FaDatabase className="text-5xl text-purple-400 mb-4" />}
          title="MongoDB"
          description="NoSQL database for scalable, high-performance applications."
        />
        <TechnologyCard
          icon={<FaDatabase className="text-5xl text-purple-400 mb-4" />}
          title="SQL"
          description="Relational database expertise in data modeling and management."
        />
        <TechnologyCard
          icon={<FaCode className="text-5xl text-purple-400 mb-4" />}
          title="Next.js"
          description="Server-rendered React framework for optimized web applications."
        />
        <TechnologyCard
          icon={<FaLaptopCode className="text-5xl text-purple-400 mb-4" />}
          title="ASP.NET Core"
          description="Cross-platform framework for building secure, scalable apps."
        />
        <TechnologyCard
          icon={<FaCloud className="text-5xl text-purple-400 mb-4" />}
          title="Azure Cloud"
          description="Cloud services for hosting, managing, and scaling applications."
        />
        <TechnologyCard
          icon={<FaLaptopCode className="text-5xl text-purple-400 mb-4" />}
          title="Prisma ORM"
          description="Database toolkit for type-safe SQL management in JavaScript."
        />
        <TechnologyCard
          icon={<FaCode className="text-5xl text-purple-400 mb-4" />}
          title="React"
          description="Component-based UI library for interactive user interfaces."
        />
        <TechnologyCard
          icon={<FaCode className="text-5xl text-purple-400 mb-4" />}
          title="TypeScript"
          description="Typed superset of JavaScript for robust application development."
        />
      </div>
    </div>
  </section>
);

const TechnologyCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="flex justify-center items-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default ExpertiseSection;
