"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import planetData from '../data/csvjson.json';

export default function PlanetSelector() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetSelect = (event) => {
    const selectedName = event.target.value;
    const planet = planetData.find(planet => planet.pl_name === selectedName);
    setSelectedPlanet(planet);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-300">
          Explorador de Exoplanetas
        </h1>
        
        <div className="mb-8 relative">
          <label htmlFor="planet-select" className="block text-lg font-semibold mb-2 text-blue-200">
            Selecciona un Planeta
          </label>
          <div className="relative">
            <select
              id="planet-select"
              onChange={handlePlanetSelect}
              className="w-full bg-gray-800 text-white p-3 pr-10 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecciona un planeta...</option>
              {planetData.map((planet) => (
                <option key={planet.pl_name} value={planet.pl_name}>
                  {planet.pl_name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
          </div>
        </div>

        {selectedPlanet && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-blue-300">{selectedPlanet.pl_name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PlanetInfo label="Método de Descubrimiento" value={selectedPlanet.discoverymethod} />
              <PlanetInfo label="Período Orbital" value={`${selectedPlanet.pl_orbper} días`} />
              <PlanetInfo label="Radio (Tierra)" value={selectedPlanet.pl_rade} />
              <PlanetInfo label="Masa (Júpiter)" value={selectedPlanet.pl_bmassj} />
              <PlanetInfo label="Excentricidad" value={selectedPlanet.pl_orbeccen} />
              <PlanetInfo label="Logaritmo de Gravedad" value={selectedPlanet.st_logg} />
              <PlanetInfo label="Distancia" value={`${selectedPlanet.sy_dist} parsecs`} />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function PlanetInfo({ label, value }) {
  return (
    <div className="bg-gray-700 p-3 rounded-md">
      <p className="text-sm text-blue-200 mb-1">{label}</p>
      <p className="font-semibold">{value || 'No disponible'}</p>
    </div>
  );
}