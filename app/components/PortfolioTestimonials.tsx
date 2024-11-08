import React from 'react';
import Image from 'next/image';

const PortfolioTestimonials = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Portfolio & Testimonials
        </h2>

        {/* Portfolio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>

        {/* Testimonials Section */}
        <h3 className="text-3xl font-semibold mb-8 text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
          What Our Clients Say
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({ item }: { item: PortfolioItem }) => (
  <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
    <Image
      src={item.image}
      alt={item.title}
      width={400}
      height={300}
      className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-300 mb-4">{item.description}</p>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-2 rounded-full text-white hover:shadow-md"
      >
        Visit Site
      </a>
    </div>
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 text-center">
    <p className="text-gray-300 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
    <h4 className="text-lg font-semibold mb-1">{testimonial.name}</h4>
    <span className="text-gray-500 text-sm">{testimonial.company}</span>
  </div>
);

export default PortfolioTestimonials;

// Sample data (replace with your actual data)
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

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Flare Frenzi',
    description: 'An innovative platform for pyrotechnics and decor hire.',
    link: 'flare-frenzi.vercel.app',
    image: '/images/flare-frenzi.jpg', // replace with actual image paths
  },
  {
    title: 'RVC Roadworthy',
    description: 'A roadworthy certification center.',
    link: 'rvc-roadworthy.vercel.app',
    image: '/images/rvc-roadworthy.jpg',
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
  // Add more testimonials as needed
];
