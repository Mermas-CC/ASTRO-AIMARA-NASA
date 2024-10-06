import React from 'react';
import HeroSection from './components/HeroSection';
import MissionsSection from './components/MissionsSection';

import Footer from './components/Footer';
import Header from './components/Header';
import './index.css'; // Asegúrate de que la ruta sea correcta
import PlanetSelector from './components/PlanetSelector';
import ImageCarousel from './components/ImageCarousel';
import VideoYT from './components/VideoYT';


const App = () => {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <HeroSection />
      <div className="min-h-screen bg-gray-900 relative z-10">
        <MissionsSection />

        <PlanetSelector />
        <ImageCarousel />
        <VideoYT />

        <Footer />
      </div>
    </div>
    );
};

export default App;
