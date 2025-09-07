import React from 'react';
import { motion } from 'framer-motion';

const SimpleStar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        initial={{ 
          scale: 0.2,
          x: -400,
          y: -400,
          opacity: 0,
          rotate: 0,
          width: 40,
          height: 40
        }}
        animate={{ 
          scale: 1,
          x: 0,
          y: 0,
          opacity: 1,
          rotate: 360,
          width: 160,
          height: 160
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "restart",
          repeatDelay: 1
        }}
      >
        <path
          d="M100 20
             C105 60, 140 95, 180 100
             C140 105, 105 140, 100 180
             C95 140, 60 105, 20 100
             C60 95, 95 60, 100 20Z"
          fill="white"
        />
      </motion.svg>
    </div>
  );
};

export default SimpleStar;