/**
 * Animation variants used throughout the portfolio.
 * Keeping motion logic in a single file improves maintainability and reuse.
 */

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      // Stagger each child animation for a layered reveal effect.
      staggerChildren: 0.12
    }
  }
};

export const heroTextVariant = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut'
    }
  }
};

export const heroImageVariant = {
  hidden: { opacity: 0, scale: 1.05, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: 'easeOut'
    }
  }
};

export const cardHoverVariant = {
  rest: { scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: {
    scale: 1.01,
    boxShadow: '0 25px 60px rgba(0,0,0,0.28)',
    transition: {
      duration: 0.25,
      ease: 'easeOut'
    }
  }
};
