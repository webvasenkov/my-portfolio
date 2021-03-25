import React, { useState } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';
import { useScrollAnimation } from './useScrollAnimation';
import { AnimatePresence, motion } from 'framer-motion';
import { appearance, slider } from '../animation';
import { wrap } from 'popmotion';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Portfolio = ({ slides }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [element, controls] = useScrollAnimation();

  const slideIndex = wrap(0, slides.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleLazyLoad = (e) => {
    e.target.src = e.target.dataset.src;
    e.target.classList.remove('portfolio__slide-img--lazy');
  };

  return (
    <motion.section id='portfolio' className='portfolio' ref={element} variants={appearance} animate={controls}>
      <div className='portfolio__container container'>
        <h2 className='portfolio__title'>Portfolio</h2>
        <p className='portfolio__description'>My last works</p>
        <div className='portfolio__slider'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              className='portfolio__slide'
              custom={direction}
              variants={slider}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <motion.img
                className='portfolio__slide-img portfolio__slide-img--lazy'
                src={slides[slideIndex].lazy}
                data-src={slides[slideIndex].img}
                onLoad={handleLazyLoad}
              />

              <div className='portfolio__slide-overlay'>
                <h3 className='portfolio__slide-title'>{slides[slideIndex].name}</h3>
                <ul className='portfolio__slide-tools'>
                  {slides[slideIndex].tools.map((tool) => (
                    <li key={tool} className='portfolio__slide-tool'>
                      #{tool}
                    </li>
                  ))}
                </ul>
                <a className='portfolio__slide-link' href={slides[slideIndex].link} target='_blank' rel='noreferrer'>
                  Open Site
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className='portfolio__control-slider'>
            <ul className='portfolio__control-slides'>
              {slides.map((slide, i) => {
                if (i === slideIndex) {
                  return <li className='portfolio__control-slide portfolio__control-slide--active' key={slide.id} />;
                }
                return (
                  <li className='portfolio__control-slide' onClick={() => paginate(i - slideIndex)} key={slide.id} />
                );
              })}
            </ul>
            <div className='portfolio__control-arrows'>
              <ArrowLeft className='portfolio__arrow-left portfolio__arrow' onClick={() => paginate(-1)} />
              <ArrowRight className='portfolio__arrow-right portfolio__arrow' onClick={() => paginate(1)} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
