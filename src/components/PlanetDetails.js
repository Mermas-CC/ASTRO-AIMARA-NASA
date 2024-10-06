import React from 'react';

const PlanetDetails = ({ planet }) => {
    return (
        <div className="mt-4 p-4 bg-gray-100 rounded">
            <h3 className="text-xl font-bold">{planet.pl_name}</h3>
            <p><strong>Método de descubrimiento:</strong> {planet.discoverymethod}</p>
            <p><strong>Periodo orbital (días):</strong> {planet.pl_orbper} (±{planet.pl_orbpererr1}/{-planet.pl_orbpererr2})</p>
            <p><strong>Radio (Tierra):</strong> {planet.pl_rade} (±{planet.pl_radeerr1}/{-planet.pl_radeerr2})</p>
            <p><strong>Masa (Júpiter):</strong> {planet.pl_bmassj} (±{planet.pl_bmassjerr1}/{-planet.pl_bmassjerr2})</p>
            <p><strong>Eccentricidad:</strong> {planet.pl_orbeccen} (±{planet.pl_orbeccenerr1}/{-planet.pl_orbeccenerr2})</p>
            <p><strong>Logaritmo de gravedad estelar:</strong> {planet.st_logg} (±{planet.st_loggerr1}/{-planet.st_loggerr2})</p>
            <p><strong>Distancia del sistema (pc):</strong> {planet.sy_dist} (±{planet.sy_disterr1}/{-planet.sy_disterr2})</p>
        </div>
    );
};

export default PlanetDetails;
