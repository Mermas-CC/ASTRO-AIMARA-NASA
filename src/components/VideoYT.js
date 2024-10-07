// src/components/YouTubeVideo.js
import React from 'react';
import { motion } from 'framer-motion';

const YouTubeVideo = () => {
  return (
    <motion.div
      className="bg-gray-800 p-6 shadow-lg mx-auto my-8" // Contenedor con fondo oscuro
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%' }} // Ancho del contenedor 100%
    >
      <div className="relative w-full" id="video" style={{ maxWidth: '60%', margin: '0 auto' }}> {/* Ancho del video 60% y centrado */}
        <iframe
          src="https://www.youtube.com/embed/4-jz3o6VFaE?si=mF7exzXbUAhrrnuD"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-auto" // Ajusta el ancho al 100% y la altura automáticamente
          style={{ aspectRatio: '16 / 9' }} // Mantiene la relación de aspecto 16:9
        ></iframe>
      </div>
    </motion.div>
  );
};

export default YouTubeVideo;
