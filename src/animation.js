export const appearance = {
  initial: { opacity: 0, transition: { duration: 0.75, ease: 'easeOut' } },
  animate: { opacity: 1, transition: { duration: 0.75, ease: 'easeOut' } },
};

export const zoom = {
  initial: { opacity: 0, scale: 0.8, transition: { duration: 0.75, ease: 'easeOut' } },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.75, ease: 'easeOut' } },
};

export const slider = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
