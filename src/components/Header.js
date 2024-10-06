// src/components/Header.js
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the background color based on scrolling
  const getBackgroundColor = () => {
    const maxScroll = 300; // Adjust this value as needed
    const percent = Math.min(scrollY / maxScroll, 1); // Normalize the value between 0 and 1
    
    // Initial and final colors in RGB format
    const startColor = { r: 0, g: 0, b: 0 }; // Black
    const endColor = { r: 31, g: 41, b: 55 }; // bg-gray-900 (RGB: 31, 41, 55)

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * percent);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * percent);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * percent);

    return `rgb(${r}, ${g}, ${b})`;
  };

  // Functions to handle scrolling to the sections
  const scrollToVideo = () => {
    const videoSection = document.getElementById('video');
    videoSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPlanets = () => {
    const planetsSection = document.getElementById('planetas');
    planetsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToData = () => {
    const dataSection = document.getElementById('datos');
    dataSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-500 z-50`}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <nav className="container mx-auto p-4 flex justify-between">
        <h1 className="text-white text-2xl">ASTRO AIMARA</h1>
        <nav className="hidden md:flex space-x-6">
          <button 
            onClick={scrollToVideo} 
            className="text-white hover:text-blue-400 transition-colors"
          >
            Video
          </button>
          <button 
            onClick={scrollToPlanets} // Added click handler for Exoplanets
            className="text-white hover:text-blue-400 transition-colors"
          >
            Exoplanets
          </button>
          <button className="text-white hover:text-blue-400 transition-colors">Path</button>
          <button 
            onClick={scrollToData} // Added click handler for Interesting Facts
            className="text-white hover:text-blue-400 transition-colors"
          >
            Interesting Facts
          </button>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
