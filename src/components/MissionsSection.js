// components/MissionsSection.js
import React from 'react';
import planetData from '../data/planetas.json'; // Asegúrate de que la ruta sea correcta

const MissionsSection = ({ onPlanetSelect }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Selecciona un Planeta</h2>
            <ul className="space-y-2">
                {planetData.map((planet) => (
                    <li
                        key={planet.pl_name}
                        onClick={() => onPlanetSelect(planet)} // Llama a la función cuando se hace clic
                        className="cursor-pointer hover:text-blue-500"
                    >
                        {planet.pl_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MissionsSection;
