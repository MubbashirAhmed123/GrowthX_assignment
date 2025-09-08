
export  const pathVariants = {
    initial: {
      strokeDasharray: 1000,
      strokeDashoffset: 1000
    },
    animate: {
      strokeDashoffset: 0
    }
  };

export  const rectVariants = {
    initial: {
      scaleX: 0,
      transformOrigin: "left"
    },
    animate: {
      scaleX: 1
    }
  };


export const pathTransition = {
    duration: 1,
    ease: "easeOut",
    delay: 0.5
  };

  export const rectTransition = {
    duration: 1.5,
    ease: "easeOut",
    delay: 1
  };