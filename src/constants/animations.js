export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay * 0.2,
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
};

export const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.3,
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    }
  }
};

export const headerVariants = {
  top: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    boxShadow: "none",
  },
  scrolled: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  }
};