"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei'; 
import planetData from '../data/data_with_model.json'; // Asegúrate de que este JSON contenga la ruta del modelo.

const PlanetSelector = () => {
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

            {/* Aquí va el modelo 3D del planeta */}
            <div className="mt-8 w-full max-w-2xl aspect-[4/3] bg-gray-900 rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.3),inset_0_0_0_2px_rgba(255,255,255,0.1)] p-3 relative overflow-hidden mx-auto"> {/* Añadido mx-auto para centrar */}
              {/* Cámara frontal y flash LED */}
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                <div className="w-3 h-3 bg-black rounded-full">
                  <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20"></div>
                  <div className="absolute inset-[3px] bg-gray-800 rounded-full"></div>
                </div>
                <div className="w-2 h-2 bg-yellow-200 rounded-full shadow-[0_0_5px_rgba(255,255,0,0.5)]"></div>
              </div>
              
              {/* Botón de inicio */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-800 rounded-full border-[6px] border-gray-700 shadow-inner overflow-hidden">
                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-700 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Pantalla */}
              <div className="w-full h-full rounded-[40px] overflow-hidden shadow-inner relative">
                {/* Efecto de reflejo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-20 pointer-events-none"></div>
                
                {/* Barra de estado */}
                <div className="absolute top-0 inset-x-0 h-6 bg-transparent flex items-center justify-between px-4">
                  <div className="text-xs font-semibold text-white pl-4 mr-4">12:30</div>
                  <div className="flex items-center space-x-1">
                    <div className="text-white">🌐</div>
                    <div className="text-white">🔋</div>
                  </div>
                </div>

                {/* Contenido de la pantalla */}
                <div className="p-4 h-full overflow-hidden relative">
                  <Canvas className="w-full h-full rounded-lg">
                    {/* Luz ambiente baja */}
                    <ambientLight intensity={0.5} />
                    
                    {/* Luz direccional simulando la luz de una estrella */}
                    <directionalLight
                      position={[10, 10, 10]}  // Posición más lejana para cubrir más área
                      intensity={1.5}          // Ajuste de intensidad para iluminación clara
                      castShadow               // Permitir sombras
                      shadow-mapSize-width={2048}  // Aumentar el tamaño del mapa de sombras para más detalle
                      shadow-mapSize-height={2048}
                      shadow-camera-left={-20}
                      shadow-camera-right={20}
                      shadow-camera-top={20}
                      shadow-camera-bottom={-20}
                    />

                    {/* Modelo 3D del planeta */}
                    {selectedPlanet.modelo && <PlanetModel modelPath={selectedPlanet.modelo} />}
                    {/* Control de la cámara */}
                    <OrbitControls />
                  </Canvas>
                </div>
              </div>

              {/* Logo de la "marca" */}
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
      <p className="font-semibold">{value || 'No disponible'}</p>
    </div>
  );
}

function PlanetModel({ modelPath }) {
  const model = useLoader(GLTFLoader, modelPath);

  return (
    <primitive object={model.scene} scale={0.5} />
  );
}

export default PlanetSelector;
