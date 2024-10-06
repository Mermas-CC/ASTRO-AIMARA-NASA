// src/components/MissionsSection.js
import React from 'react';

const MissionsSection = () => {
  return (
    <section id="missions" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Datos interesantes sobre Exoplanetas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Kepler-186f</h3>
            <p>
              Este es el primer exoplaneta del tamaño de la Tierra encontrado en la zona habitable de su estrella. 
              Está a unos 500 años luz de distancia en la constelación de Cygnus.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">TRAPPIST-1</h3>
            <p>
              Este sistema tiene siete exoplanetas del tamaño de la Tierra, tres de los cuales están en la zona habitable 
              de la estrella enana ultrafría TRAPPIST-1, a 40 años luz de distancia.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;
