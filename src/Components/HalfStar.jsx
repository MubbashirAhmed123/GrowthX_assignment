import { motion } from "framer-motion";
import { pathTransition, pathVariants, rectTransition, rectVariants } from "../varients/halfStar-variants";

const HalfStar = () => {
  const arcPath = "M50 100 C100 108, 140 150, 150 200 C160 150, 200 108, 250 100 Z";


  return (
    <div className="flex items-center justify-center">
      <svg width="300" height="120" viewBox="0 0 300 120">
        <defs>
          <clipPath id="arcClip">
            <path d={arcPath} transform="translate(0, -80)" />
          </clipPath>
          
          <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        
        <motion.path
          d={arcPath}
          transform="translate(0, -80)"
          stroke="white"
          strokeWidth="2"
          fill="transparent"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={pathTransition}
        />
        
        <g clipPath="url(#arcClip)">
          <motion.rect
            x="0"
            y="0"
            width="300"
            height="120"
            fill="url(#liquidGradient)"
            variants={rectVariants}
            initial="initial"
            animate="animate"
            transition={rectTransition}
            style={{
              transformOrigin: "left"
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default HalfStar;