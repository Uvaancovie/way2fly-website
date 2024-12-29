import React from 'react';
import { FaDatabase, FaReact,  } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPrisma, SiMongodb, SiMicrosoftazure, SiDotnet } from 'react-icons/si';

const ExpertiseSection = () => {
  const technologies = [
    {
      icon: <SiMongodb className="w-12 h-12" />,
      title: "MongoDB",
      description: "NoSQL database for scalable, high-performance applications",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <FaDatabase className="w-12 h-12" />,
      title: "SQL",
      description: "Relational database expertise in data modeling and management",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <SiNextdotjs className="w-12 h-12" />,
      title: "Next.js",
      description: "Server-rendered React framework for optimized web applications",
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: <SiDotnet className="w-12 h-12" />,
      title: "ASP.NET Core",
      description: "Cross-platform framework for building secure, scalable apps",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <SiMicrosoftazure className="w-12 h-12" />,
      title: "Azure Cloud",
      description: "Cloud services for hosting, managing, and scaling applications",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <SiPrisma className="w-12 h-12" />,
      title: "Prisma ORM",
      description: "Database toolkit for type-safe SQL management in JavaScript",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: <FaReact className="w-12 h-12" />,
      title: "React",
      description: "Component-based UI library for interactive user interfaces",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      icon: <SiTypescript className="w-12 h-12" />,
      title: "TypeScript",
      description: "Typed superset of JavaScript for robust application development",
      color: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Technologies I Specialize In
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Leveraging modern technologies to build robust, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard key={tech.title} {...tech} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TechnologyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const TechnologyCard = ({ icon, title, description, color, delay }: TechnologyCardProps) => (
  <div 
    className="group relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700
      hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-1
      hover:shadow-lg hover:shadow-purple-500/10"
    style={{
      animation: `fadeInUp 0.5s ease-out forwards ${delay * 0.1}s`,
      opacity: 0,
    }}
  >
    <div className="relative z-10">
      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${color} rounded-lg p-3
        text-white group-hover:scale-110 transform transition-transform duration-300
        shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 
      rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

export default ExpertiseSection;