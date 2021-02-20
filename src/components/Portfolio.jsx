import React, { useState } from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';
import { useScrollAnimation } from './useScrollAnimation';
import { motion } from 'framer-motion';
import { zoom } from '../animation';
import { wrap } from 'popmotion';

const Portfolio = ({ slides }) => {
  const [element, controls] = useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  const currentId = slides.indexOf(currentSlide);

  const handleNextClick = () => {
    setCurrentSlide(slides[(currentId + 1) % slides.length]);
  };

  const handlePrevClick = () => {
    if (!currentId) {
      setCurrentSlide(slides[slides.length - 1]);
    } else {
      setCurrentSlide(slides[currentId - 1]);
    }
  };

  console.log('');

  return (
    <motion.section id='portfolio' className='portfolio' ref={element} variants={zoom} animate={controls}>
      <div className='portfolio__container container'>
        <h2 className='portfolio__title'>Portfolio</h2>
        <p className='portfolio__description'>My last works</p>
        <div className='portfolio__slider'>
          <div className='portfolio__slide'>
            <img className='portfolio__slide-img' src={currentSlide.img} alt='slide' />
            <a className='portfolio__slide-link' href={currentSlide.link} target='_blank' rel='noreferrer'>
              <div className='portfolio__slide-overlay'>
                <h3 className='portfolio__slide-title'>{currentSlide.name}</h3>
                <ul className='portfolio__slide-tools'>
                  {currentSlide.tools.map((tool) => (
                    <li key={tool} className='portfolio__slide-tool'>
                      #{tool}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </div>
          <div className='portfolio__control-slider'>
            <ul className='portfolio__control-slides'>
              {slides.map((slide, i) => {
                if (i === currentId) {
                  return <li className='portfolio__control-slide portfolio__control-slide--active' key={slide.id} />;
                }
                return (
                  <li className='portfolio__control-slide' onClick={() => setCurrentSlide(slides[i])} key={slide.id} />
                );
              })}
            </ul>
            <div className='portfolio__control-arrows'>
              <ArrowLeft className='portfolio__arrow-left portfolio__arrow' onClick={handlePrevClick} />
              <ArrowRight className='portfolio__arrow-right portfolio__arrow' onClick={handleNextClick} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
