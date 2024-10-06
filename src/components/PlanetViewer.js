"use client";

import React, { useState, startTransition } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import planetData from '../data/planetas.json';
import { Apple, Battery, Wifi } from 'lucide-react';

const PlanetViewer = () => {
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
    const planet = planetData[currentPlanetIndex];

    // Cargar el modelo GLTF del planeta actual
    const model = useLoader(GLTFLoader, planet.modelo);

    // Funciones para cambiar entre planetas
    const nextPlanet = () => {
        startTransition(() => {
            setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % planetData.length);
        });
    };

    const prevPlanet = () => {
        startTransition(() => {
            setCurrentPlanetIndex((prevIndex) => (prevIndex - 1 + planetData.length) % planetData.length);
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-4 mb-8">
            <div className="w-full max-w-2xl aspect-[4/3] bg-gray-900 rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.3),inset_0_0_0_2px_rgba(255,255,255,0.1)] p-3 relative overflow-hidden">
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
                            <Wifi size={12} className="text-white" />
                            <Battery size={12} className="text-white" />
                        </div>
                    </div>

                    {/* Contenido de la pantalla */}
                    <div className="p-4 h-full overflow-hidden relative">
                    <Canvas className="w-full h-64 rounded-lg">
    {/* Luz ambiente baja */}
    <ambientLight intensity={0.2} />
    
    {/* Luz direccional simulando la luz de una estrella */}
    <directionalLight
        position={[10, 10, 10]}  // Posición más lejana para cubrir más área
        intensity={1.5}          // Ajuste de intensidad para iluminación clara
        castShadow               // Permitir sombras
        shadow-mapSize-width={2048}  // Aumentar el tamaño del mapa de sombras para más detalle
        shadow-mapSize-height={2048}
        
        // Ajustes de cámara para la sombra
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
    />

    {/* Modelo 3D del planeta */}
    <primitive object={model.scene} scale={0.5} />

    {/* Control de la cámara */}
    <OrbitControls />
</Canvas>

                    </div>
                </div>
                
                {/* Logo de la "marca" */}
                <div className="absolute bottom-6 right-6 text-gray-400 opacity-30">
                    <Apple size={36} />
                </div>
            </div>

            {/* Información del planeta */}
            <div className="w-full max-w-2xl bg-gray-700 p-6 rounded-lg shadow-md text-white mt-4">
                <h1 className="text-4xl font-bold mb-4 text-gray-100">{planet.nombre}</h1>
                <p className="text-lg mb-2"><strong>Diámetro:</strong> {planet.diametro}</p>
                <p className="text-lg mb-2"><strong>Distancia del Sol:</strong> {planet.distanciaDelSol}</p>
                <p className="text-lg mb-4"><strong>Descripción:</strong> {planet.descripcion}</p>
                <div className="flex justify-between mt-4">
                    <button onClick={prevPlanet} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">Anterior</button>
                    <button onClick={nextPlanet} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default PlanetViewer;
