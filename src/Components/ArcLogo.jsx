import React from 'react';
import { motion } from 'framer-motion';

const SimpleT = () => {
  // Wider T-shape path
  const tPath = "M60,50 L240,50 C210,80 150,120 150,150 C150,120 90,80 60,50 Z";

  return (
    <div className=" bg-black flex items-center justify-center">
      <svg width="300" height="200" viewBox="0 0 300 200">
        <motion.path
          d={tPath}
          fill="white"
          stroke="white"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        />
      </svg>
    </div>
  );
};

export default SimpleT;