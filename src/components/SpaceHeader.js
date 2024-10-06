"use client";

import { useState, useEffect } from 'react';
import { Rocket, Menu } from 'lucide-react';

export default function SpaceHeader() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle navigation
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <header className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* Background with stars */}
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')]"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>

      {/* Planet */}
      <div 
        className="absolute right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-2xl"
        style={{ 
          transform: `translate(${50 + scrollY * 0.1}%, ${-50 + scrollY * 0.1}%)`,
          background: 'radial-gradient(circle, #4299e1 0%, #3182ce 100%)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavigation('/')} 
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Rocket className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              ASTRO AIMARA
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => handleNavigation('/missions')} className="hover:text-blue-400 transition-colors">
              Missions
            </button>
            <button onClick={() => handleNavigation('/gallery')} className="hover:text-blue-400 transition-colors">
              Data
            </button>
            <button onClick={() => handleNavigation('/about')} className="hover:text-blue-400 transition-colors">
              Our Team
            </button>
            <button onClick={() => handleNavigation('/contact')} className="hover:text-blue-400 transition-colors">
              Explore Planets
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </header>
  );
}
