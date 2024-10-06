// src/components/HeroSection.js
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  // Function to handle scrolling to the video
  const scrollToVideo = () => {
    const videoSection = document.getElementById('video');
    videoSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center relative"
      style={{ opacity, scale, y }}
    >
      <Rocket className="w-24 h-24 text-blue-400 mb-8" />
      <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>ASTRO AIMARA</h1>
      
      {/* Button that scrolls to the video */}
      <button 
        onClick={scrollToVideo} 
        className="mt-4 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Play Now
      </button>
      <motion.div
        className="absolute bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
