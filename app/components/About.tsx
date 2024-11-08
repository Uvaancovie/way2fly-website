import React from 'react';
import Image from 'next/image';

const About = () => (
  <section className="py-16 bg-black text-white">
    <div className="max-w-6xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <Image
          src="/uvaan-covenden.jpg" // Simplified path to image in public folder
          alt="Uvaan Covenden"
          width={300}
          height={300}
          className="rounded-full mx-auto mb-6 md:mb-0"
        />
      </div>
      <div className="md:w-1/2 md:pl-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="text-gray-300 mb-4">
          Hi, I&apos;m Uvaan from Durban, South Africa. With 5 years of experience in web and mobile application development, I specialize in creating high-performance, full-stack applications using Next.js, ASP.NET Core, and modern databases like MongoDB and SQL Server.
        </p>
        <p className="text-gray-300 mb-4">
          I studied application development at Varsity College and hold a Bachelor of Application Development as well as a higher certificate in mobile application development. My passion lies in building intuitive and engaging digital experiences that drive results.
        </p>
        <a href="#contact" className="text-purple-500 mt-4 block font-semibold hover:underline">
          Let’s Work Together!
        </a>
      </div>
    </div>
  </section>
);

export default About;
