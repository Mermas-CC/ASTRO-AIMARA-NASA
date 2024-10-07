import React from 'react';
import HeroSection from './components/HeroSection';
import MissionsSection from './components/MissionsSection';
import Footer from './components/Footer';
import Header from './components/Header';
import PlanetSelector from './components/PlanetSelector';
import ImageCarousel from './components/ImageCarousel';
import VideoYT from './components/VideoYT';
import PlanetInfoPage from './components/PlanetInfoPage'; // Tu nueva página
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import './index.css'; // Asegúrate de que la ruta sea correcta

const App = () => {
  // Hook para obtener la ruta actual
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Renderiza el Header solo si no estás en la página /planet-info */}
      {location.pathname !== '/planet-info' && <Header />}
      
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={
          <>
            <HeroSection />
            <VideoYT />
            <PlanetSelector />
            <ImageCarousel />
            <Footer />
          </>
        } />

        {/* Nueva página /planet-info */}
        <Route path="/planet-info" element={<PlanetInfoPage />} />
      </Routes>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
