'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, transparent 0%, #4f46e5 50%, transparent 100%)',
              'radial-gradient(circle at 100% 100%, transparent 0%, #4f46e5 50%, transparent 100%)',
              'radial-gradient(circle at 0% 0%, transparent 0%, #4f46e5 50%, transparent 100%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Mesh gradient pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Content Area */}
          <div className="space-y-8 text-center">
            {/* Hero Title */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-nunito text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                Rent Anything,
              </span>
              <br />
              <span className="text-white font-nunito">
                Anytime, Anywhere
              </span>
            </motion.h1>

            {/* Hero Description */}
            <motion.p 
              className="font-serif text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join the future of sharing economy. Discover, rent, and list items in your community. 
              From tools to tech, make renting seamless and sustainable.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300">
                Start Renting
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400/10 transform hover:-translate-y-1 transition-all duration-300">
                List Your Items
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;