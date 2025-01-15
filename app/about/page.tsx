'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';


const AboutPage = () => {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies", value: "15+" }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <><Navbar></Navbar><div className="min-h-screen bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
              <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
              >
                  <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                      About Me
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full mb-8" />

                  <motion.div
                      className="flex flex-col items-center justify-center space-y-4"
                      {...fadeInUp}
                  >
                      <h2 className="text-3xl font-semibold">Your Name</h2>
                      <p className="text-xl text-gray-400">Full Stack Developer</p>
                  </motion.div>
              </motion.div>

              <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
              >
                  {stats.map((stat, index) => (
                      <motion.div
                          key={index}
                          className="p-6 bg-gray-900/50 rounded-lg border border-gray-800 text-center hover:border-purple-500/50 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                      >
                          <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                              {stat.value}
                          </h3>
                          <p className="text-gray-400">{stat.label}</p>
                      </motion.div>
                  ))}
              </motion.div>

              <motion.div
                  className="grid md:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
              >
                  <div className="space-y-6">
                      <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                      <p className="text-gray-400 leading-relaxed">
                          A passionate developer with expertise in building modern web applications.
                          Specialized in creating scalable solutions using cutting-edge technologies.
                          Committed to writing clean, efficient code and delivering exceptional user experiences.
                      </p>
                      <div className="flex flex-col space-y-3 text-gray-400">
                          <p>📍 City, Country</p>
                          <p>💼 5 Years Experience</p>
                      </div>
                  </div>

                  <div className="space-y-6 bg-gray-900/50 p-8 rounded-lg border border-gray-800">
                      <h3 className="text-2xl font-semibold mb-4">Lets Connect</h3>
                      <div className="space-y-4">
                          <a
                              href="mailto:your.email@example.com"
                              className="block w-full p-3 text-left rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
                          >
                              ✉️ your.email@example.com
                          </a>
                          <a
                              href="https://github.com/yourusername"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full p-3 text-left rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
                          >
                              👩‍💻 github.com/yourusername
                          </a>
                          <a
                              href="https://linkedin.com/in/yourusername"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block w-full p-3 text-left rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
                          >
                              💼 linkedin.com/in/yourusername
                          </a>
                      </div>
                  </div>
              </motion.div>
          </div>
      </div></>
  );
};

export default AboutPage;