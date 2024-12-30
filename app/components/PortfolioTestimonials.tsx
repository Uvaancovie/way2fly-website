'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

// Types
interface PortfolioItem {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface Testimonial {
  text: string;
  name: string;
  company: string;
}

const PortfolioTestimonials = () => {
  // Sample data
  const portfolioItems: PortfolioItem[] = [
    {
      title: 'Flare Frenzi',
      description: 'An innovative platform for pyrotechnics and decor hire.',
      link: 'flare-frenzi.vercel.app',
      image: '/images/flare-frenzi.jpg',
    },
    {
      title: 'RVC Roadworthy',
      description: 'A roadworthy certification center.',
      link: 'rvc-roadworthy.vercel.app',
      image: '/vehicle-roadworthy.png',
    },
    {
      title: 'Health Wellness',
      description: 'Health and wellness e-commerce platform.',
      link: 'health-wellness.vercel.app',
      image: '/images/health-wellness.jpg',
    },
    {
      title: 'Roulette Game',
      description: 'An interactive online casino game.',
      link: 'roulette-game.vercel.app',
      image: '/images/roulette-game.jpg',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      text: 'Working with Uvaan was fantastic! He delivered a high-quality app on time.',
      name: 'John Doe',
      company: 'Motorsport Financing Canada',
    },
    {
      text: 'The project went smoothly, and we saw immediate results with our new website!',
      name: 'Jane Smith',
      company: 'Dopeboys Digital',
    },
    {
      text: 'Our new CRM has streamlined our operations incredibly.',
      name: 'Sam Wilson',
      company: 'Umhlanga Funerals',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          Portfolio & Testimonials
        </motion.h2>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <PortfolioCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold text-center mb-8 text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text"
        >
          What Our Clients Say
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({ item }: { item: PortfolioItem }) => (
  <div className="group relative rounded-xl overflow-hidden bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
    <div className="relative h-48">
      <img
        src="/api/placeholder/400/300"
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-gray-300 mb-4 text-sm">
        {item.description}
      </p>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
      >
        Visit Site
        <ExternalLink className="ml-2 w-4 h-4" />
      </a>
    </div>
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
    <div className="flex justify-center mb-4">
      <Star className="w-6 h-6 text-yellow-400" />
      <Star className="w-6 h-6 text-yellow-400" />
      <Star className="w-6 h-6 text-yellow-400" />
      <Star className="w-6 h-6 text-yellow-400" />
      <Star className="w-6 h-6 text-yellow-400" />
    </div>
    <p className="text-gray-300 mb-6 italic">
      &ldquo;{testimonial.text}&rdquo;
    </p>
    <div className="text-center">
      <h4 className="text-lg font-semibold mb-1 text-purple-400">
        {testimonial.name}
      </h4>
      <span className="text-gray-500 text-sm">
        {testimonial.company}
      </span>
    </div>
  </div>
);

export default PortfolioTestimonials;