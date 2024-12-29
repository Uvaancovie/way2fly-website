import React from 'react';

const ExpertiseSection = () => {
  const technologies = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8"/>
          <path d="M9 9a3 3 0 0 1 6 0c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12" y2="17"/>
        </svg>
      ),
      title: "MongoDB",
      description: "NoSQL database for scalable, high-performance applications",
      color: "from-green-400 to-green-600"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      title: "SQL",
      description: "Relational database expertise in data modeling and management",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Next.js",
      description: "Server-rendered React framework for optimized web applications",
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-4v4h4v-4z"/>
          <path d="M22 10h-4v4h4v-4z"/>
          <path d="M6 10H2v4h4v-4z"/>
          <path d="M10 10H6v4h4v-4z"/>
          <path d="M14 10h-4v4h4v-4z"/>
        </svg>
      ),
      title: "ASP.NET Core",
      description: "Cross-platform framework for building secure, scalable apps",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Azure Cloud",
      description: "Cloud services for hosting, managing, and scaling applications",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: "Prisma ORM",
      description: "Database toolkit for type-safe SQL management in JavaScript",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"/>
        </svg>
      ),
      title: "React",
      description: "Component-based UI library for interactive user interfaces",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
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