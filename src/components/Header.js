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

  // Calcular el color de fondo basado en el desplazamiento
  const getBackgroundColor = () => {
    const maxScroll = 300; // Ajusta este valor según tus necesidades
    const percent = Math.min(scrollY / maxScroll, 1); // Normaliza el valor entre 0 y 1
    
    // Colores inicial y final en formato RGB
    const startColor = { r: 0, g: 0, b: 0 }; // Negro
    const endColor = { r: 31, g: 41, b: 55 }; // bg-gray-900 (RGB: 31, 41, 55)

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * percent);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * percent);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * percent);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-500 z-50`}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <nav className="container mx-auto p-4 flex justify-between">
        <h1 className="text-white text-2xl">ASTRO AIMARA</h1>
        <nav className="hidden md:flex space-x-6">
          <button className="text-white hover:text-blue-400 transition-colors">Video</button>
          <button className="text-white hover:text-blue-400 transition-colors">Exoplanetas</button>
          <button className="text-white hover:text-blue-400 transition-colors">Trayecto</button>
          <button className="text-white hover:text-blue-400 transition-colors">Datos curiosos</button>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
