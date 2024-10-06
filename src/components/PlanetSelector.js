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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white p-8">
      <div className="w-[85%] mx-auto">
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
         <div className="mt-8 w-full max-w-[90%] bg-gray-900 rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.3),inset_0_0_0_2px_rgba(255,255,255,0.1)] p-3 relative overflow-hidden mx-auto mb-8">
       
           {/* Barra de estado superior con íconos */}
           <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-full px-4 h-8 bg-gray-900 flex items-center justify-between text-white">
             <div className="text-sm ml-8">12:45</div>
             <div className="flex space-x-2 items-center mr-8">
               <Wifi className="w-5 h-5 text-white" />
               <Battery className="w-5 h-5 text-white" />
             </div>
           </div>
       
           {/* Cámara simulada en la parte superior */}
           <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-700 rounded-full shadow-md border-[2px] border-gray-500"></div>
       
           {/* Botón inferior simulado */}
           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-700 rounded-full shadow-inner border-[2px] border-gray-500"></div>
       
           {/* Nombre del planeta */}
           <div className="flex items-center mb-4 mt-8 mx-4">
             <Globe className="w-8 h-8 text-blue-400 mr-3" />
             <h2 className="text-2xl font-bold text-blue-300">{selectedPlanet.pl_name}</h2>
           </div>
       
           {/* Div contenedor de dos columnas */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
             {/* Columna de la información con dos subcolumnas */}
             <div className="grid grid-cols-1 gap-2 mx-4"> {/* Cambié gap-4 a gap-2 para mayor compresión */}
               <PlanetInfo label="Método de Descubrimiento" value={selectedPlanet.discoverymethod} />
               <PlanetInfo label="Período Orbital" value={`${selectedPlanet.pl_orbper} días`} />
               <PlanetInfo label="Radio (Tierra)" value={selectedPlanet.pl_rade} />
               <PlanetInfo label="Masa (Júpiter)" value={selectedPlanet.pl_bmassj} />
               <PlanetInfo label="Excentricidad" value={selectedPlanet.pl_orbeccen} />
               <PlanetInfo label="Logaritmo de Gravedad" value={selectedPlanet.st_logg} />
               <PlanetInfo label="Distancia" value={`${selectedPlanet.sy_dist} parsecs`} />
             </div>
       
             {/* Columna del modelo del planeta */}
             <div className="p-4 h-[500px] overflow-hidden relative">
               <Canvas className="w-full h-full rounded-lg">
                 <ambientLight intensity={0.5} color={"#ffffff"} />
       
                 {/* Componente que maneja el modelo del planeta */}
                 {selectedPlanet.modelo && <PlanetModel modelPath={selectedPlanet.modelo} />}
       
                 <OrbitControls />
               </Canvas>
             </div>
           </div>
       
           {/* Separación del margen inferior */}
           <div className="mb-8"></div> {/* Agregado para separar el contenido del margen inferior */}
       
           {/* Icono decorativo en la esquina */}
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
