import React from 'react';
import { motion } from 'framer-motion';
import { starTransition, starVariants } from '../varients/star-variants';

const StarLogo = () => {
  return (
    <div className="flex items-center justify-center relative z-10">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="120"
        height="120"
        variants={starVariants}
        initial="initial"
        animate="animate"
        transition={starTransition}
      >
        <defs>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        
        <circle
          cx="100"
          cy="100"
          r="30"
          fill="white"
          opacity="0.6"
          filter="url(#softGlow)"
        />

       
        <path
          d="M100 20
             C105 60, 140 95, 180 100
             C140 105, 105 140, 100 180
             C95 140, 60 105, 20 100
             C60 95, 95 60, 100 20Z"
          fill="white"
          stroke="rgba(255,255,255,0.8)"   
          strokeWidth="3"                 
          strokeLinejoin="round"
          strokeLinecap="round"         
        />
      </motion.svg>
    </div>
  );
};

export default StarLogo;
