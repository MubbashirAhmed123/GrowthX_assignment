import { motion } from "framer-motion";
import { textTransition, textVariants } from "../varients/text-variants";

const LogoText = () => {


  return (
    <div className="flex items-center justify-center mt-10">
      <motion.div
        className="text-white font-semibold text-6xl md:text-6xl tracking-wider"
        variants={textVariants}
        initial="initial"
        animate="animate"
        transition={textTransition}
      >
        E L E V A T E
      </motion.div>
    </div>
  );
};

export default LogoText;