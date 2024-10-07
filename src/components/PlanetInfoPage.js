// src/components/PlanetInfoPage.js

import React from 'react';
import PlanetSelector from './PlanetSelector';  // Adjust the import path as needed

const PlanetInfoPage = () => {
  return (
    <div>
      <h1>Planet Information</h1>
      <PlanetSelector />  {/* Use the component you already have */}
    </div>
  );
};

export default PlanetInfoPage;
