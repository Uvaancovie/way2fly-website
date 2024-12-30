import React from "react";
import { Database, Server, Code, Globe, Box, Layers, Binary, Cable } from "lucide-react";

const ExpertiseSection = () => {
  const technologies = [
    { icon: Database, title: "MongoDB", description: "NoSQL database for scalable, high-performance applications", color: "text-emerald-400" },
    { icon: Server, title: "SQL", description: "Relational database expertise in data modeling and management", color: "text-blue-400" },
    { icon: Globe, title: "Next.js", description: "Server-rendered React framework for optimized web applications", color: "text-purple-400" },
    { icon: Code, title: "ASP.NET Core", description: "Cross-platform framework for building secure, scalable apps", color: "text-indigo-400" },
    { icon: Box, title: "Azure Cloud", description: "Cloud services for hosting, managing, and scaling applications", color: "text-sky-400" },
    { icon: Layers, title: "Prisma ORM", description: "Database toolkit for type-safe SQL management in JavaScript", color: "text-violet-400" },
    { icon: Binary, title: "React", description: "Component-based UI library for interactive user interfaces", color: "text-cyan-400" },
    { icon: Cable, title: "TypeScript", description: "Typed superset of JavaScript for robust application development", color: "text-blue-400" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Technologies I Specialize In
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Leveraging modern technologies to build robust, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TechnologyCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
}

const TechnologyCard = ({ icon: Icon, title, description, color }: TechnologyCardProps) => (
  <div
    className="group relative p-6 rounded-xl border border-white/10 hover:border-white/20
      transition-all duration-300 hover:transform hover:-translate-y-1 bg-black/50"
  >
    <div className="flex items-start space-x-4">
      <div className={`${color} p-2 rounded-lg`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export default ExpertiseSection;
