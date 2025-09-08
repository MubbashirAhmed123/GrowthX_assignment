import React from 'react'
import StarLogo from './Components/StarLogo'
import LogoText from './Components/LogoText'
import { motion } from 'framer-motion';
import HalfStar from './Components/HalfStar';
import { appTransition, appVariants } from './varients/app-variants';

function App() {


  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <motion.div
        className="flex flex-col items-center justify-center"
        variants={appVariants}
        initial="initial"
        animate="animate"
        transition={appTransition}
      >
        <StarLogo />
        <HalfStar />
        <LogoText />
      </motion.div>
    </div>
  );
}

export default App