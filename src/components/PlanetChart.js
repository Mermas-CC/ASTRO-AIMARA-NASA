import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import planetData from '../data/planetas.json'; // Asegúrate de que esta ruta sea correcta

const PlanetChart = ({ selectedPlanet }) => {
    const planetInfo = planetData.find(planet => planet.nombre === selectedPlanet);

    if (!planetInfo) return null; // Si no hay información del planeta seleccionado, no renderiza nada

    // Aquí puedes agregar los datos que quieras mostrar en el gráfico
    const chartData = [
        { name: 'Eccentricity', value: planetInfo.pl_orbeccen },
        { name: 'Mass', value: planetInfo.pl_bmasse },
        { name: 'Radius', value: planetInfo.pl_rade }
    ];

    return (
        <div className="w-full max-w-2xl mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Gráfico de {selectedPlanet}</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PlanetChart
