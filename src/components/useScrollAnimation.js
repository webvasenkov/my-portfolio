import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScrollAnimation = () => {
  const [element, view] = useInView({ threshold: 0.2 });
  const controls = useAnimation();

  if (view) {
    controls.start('animate');
  } else {
    controls.start('initial');
  }

  return [element, controls];
};

export default useScrollAnimation;
