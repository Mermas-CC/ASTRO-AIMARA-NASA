"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Globe, Wifi, Battery } from 'lucide-react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei'; 
import planetData from '../data/data_with_model.json';

const PlanetSelector = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetSelect = (event) => {
    const selectedName = event.target.value;
    const planet = planetData.find(planet => planet.pl_name === selectedName);
    setSelectedPlanet(planet);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white p-8" id="planetas">
      <div className="w-[85%] mx-auto">
      <div className="bg-gradient-to-b from-gray-900 to-black p-10 rounded-lg shadow-lg">
  <h1 className="text-6xl font-extrabold mb-6 text-center text-blue-400 drop-shadow-lg tracking-tight leading-tight">
    Unlock the Full Interface of the Game
  </h1>
  <p className="text-xl text-center text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
    Experience a sneak peek of the fully unlocked main interface after completing all missions and discovering every planet. Get ready for an immersive journey!
  </p>

</div>

<div className="mb-8 relative">
  <label htmlFor="planet-select" className="block text-lg font-semibold mb-2 text-blue-300">
    Select a Planet
  </label>
  <div className="relative">
    <select
      id="planet-select"
      onChange={handlePlanetSelect}
      className="w-full bg-gray-900 text-white p-4 pr-12 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg transition ease-in-out duration-200 hover:bg-gray-800"
    >
      <option value="">Choose a planet...</option>
      {planetData.map((planet) => (
        <option key={planet.pl_name} value={planet.pl_name}>
          {planet.pl_name}
        </option>
      ))}
    </select>
    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400 pointer-events-none" />
  </div>
</div>


        {selectedPlanet && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <div className="mt-8 w-full max-w-[90%] bg-gray-900 rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.3),inset_0_0_0_2px_rgba(255,255,255,0.1)] p-3 relative overflow-hidden mx-auto mb-8">
       
              {/* Top status bar with icons */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-full px-4 h-8 bg-gray-900 flex items-center justify-between text-white">
                <div className="text-sm ml-8">12:45</div>
                <div className="flex space-x-2 items-center mr-8">
                  <Wifi className="w-5 h-5 text-white" />
                  <Battery className="w-5 h-5 text-white" />
                </div>
              </div>
       
              {/* Simulated camera at the top */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-700 rounded-full shadow-md border-[2px] border-gray-500"></div>
       
              {/* Simulated bottom button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-700 rounded-full shadow-inner border-[2px] border-gray-500"></div>
       
              {/* Planet name */}
              <div className="flex items-center mb-4 mt-8 mx-4">
                <Globe className="w-8 h-8 text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-blue-300">{selectedPlanet.pl_name}</h2>
              </div>
       
              {/* Two-column container */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
                {/* Information column with two sub-columns */}
                <div className="grid grid-cols-1 gap-2 mx-4"> {/* Changed gap-4 to gap-2 for more compression */}
                  <PlanetInfo label="Discovery Method" value={selectedPlanet.discoverymethod} />
                  <PlanetInfo label="Orbital Period" value={`${selectedPlanet.pl_orbper} days`} />
                  <PlanetInfo label="Radius (Earth)" value={selectedPlanet.pl_rade} />
                  <PlanetInfo label="Mass (Jupiter)" value={selectedPlanet.pl_bmassj} />
                  <PlanetInfo label="Eccentricity" value={selectedPlanet.pl_orbeccen} />
                  <PlanetInfo label="Logarithm of Gravity" value={selectedPlanet.st_logg} />
                  <PlanetInfo label="Distance" value={`${selectedPlanet.sy_dist} parsecs`} />
                </div>
       
                {/* Planet model column */}
                <div className="p-4 h-[500px] overflow-hidden relative">
                  <Canvas className="w-full h-full rounded-lg">
                    <ambientLight intensity={0.5} color={"#ffffff"} />
       
                    {/* Component that handles the planet model */}
                    {selectedPlanet.modelo && <PlanetModel modelPath={selectedPlanet.modelo} />}
       
                    <OrbitControls />
                  </Canvas>
                </div>
              </div>
       
              {/* Bottom margin separation */}
              <div className="mb-8"></div> {/* Added to separate content from the bottom margin */}
       
              {/* Decorative icon in the corner */}
              <div className="absolute bottom-6 right-6 text-gray-400 opacity-30">
                <div className="w-10 h-10">🍏</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

function PlanetInfo({ label, value }) {
  return (
    <div className="bg-gray-700 p-3 rounded-md">
      <p className="text-sm text-blue-200 mb-1">{label}</p>
      <p className="font-semibold">{value || 'Not available'}</p>
    </div>
  );
}

function PlanetModel({ modelPath }) {
  const model = useLoader(GLTFLoader, modelPath);
  
  return (
    <>
      <primitive object={model.scene} scale={1.5} />
      <pointLight
        position={[1, 0, 0]} 
        intensity={1.5} 
        distance={50} 
        decay={2} 
        color={"#ffffff"} 
      />
    </>
  );
}

export default PlanetSelector;
