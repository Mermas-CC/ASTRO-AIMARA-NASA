import React, { useState } from 'react';

const ImageCarousel = () => {
  const images = [
    '392ee228-f966-4624-b14b-401a6f8c3fce.jpeg',
    'ed1ed47d-808f-42f5-a0b4-47916778f58f.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center" id="datos">
        <h2 className="text-4xl font-bold mb-8">Galería de Imágenes</h2>
        <p className="text-gray-300 mb-4">
          Este carrusel muestra una selección de imágenes representativas. Navega a través de ellas utilizando los botones.
        </p>
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            className="w-full h-auto transition-transform duration-500 ease-in-out transform"
          />
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-lg hover:bg-gray-700"
            onClick={prevImage}
          >
            ❮
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-lg hover:bg-gray-700"
            onClick={nextImage}
          >
            ❯
          </button>
        </div>
        <div className="flex justify-center mt-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
