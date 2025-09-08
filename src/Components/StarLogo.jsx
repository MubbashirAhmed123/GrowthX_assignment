import React from 'react';
import { motion } from 'framer-motion';
import { starTransition, starVariants } from '../varients/star-variants';

const StarLogo = () => {


  return (
    <div className="flex items-center justify-center shadow">
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

export default StarLogo;