import React from 'react';
import PlanetViewer from './components/PlanetViewer'; // Asegúrate de que esta ruta sea correcta
import HeroSection from './components/HeroSection';
import MissionsSection from './components/MissionsSection';

import Footer from './components/Footer';
import Header from './components/Header';
import './index.css'; // Asegúrate de que la ruta sea correcta


const App = () => {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <HeroSection />
      <div className="min-h-screen bg-gray-900 relative z-10">
        <MissionsSection />
        <PlanetViewer />
        <Footer />
      </div>
    </div>
    );
};

export default App;
