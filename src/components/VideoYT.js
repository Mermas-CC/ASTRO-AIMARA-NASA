// src/components/YouTubeVideo.js
import React from 'react';
import { motion } from 'framer-motion';

const YouTubeVideo = () => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 shadow-lg mx-auto my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=MKCdagwxjKB-jpib&controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-lg"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default YouTubeVideo;
