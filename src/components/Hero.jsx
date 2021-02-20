import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as BigShoesTorso } from '../assets/big-shoes-torso.svg';
import { typeWriterEffect } from '../util';
import { motion } from 'framer-motion';
import { appearance } from '../animation';
import { useScrollAnimation } from './useScrollAnimation';

const Hero = memo(() => {
  const [element, controls] = useScrollAnimation();
  const [description, setDescription] = useState('');
  const [about, setAbout] = useState([
    `I'm a beginner web developer`,
    `I live in Belarus`,
    `I'm 21 years old`,
    'You can see my portfolio or say hi.',
  ]);
  const [animationLine, setAnimationLine] = useState({ animationDuration: '0s', display: 'block' });

  useEffect(() => {
    typeWriterEffect(about, setDescription, setAnimationLine);
  }, [about]);

  return (
    <motion.section className='hero' {...appearance}>
      <div className='container'>
        <header className='header'>
          <Logo className='logo' />
          <nav className='nav'>
            <ul className='nav__items'>
              <li className='nav__item'>
                <Link className='nav__item-link' to='portfolio' smooth>
                  Portfolio
                </Link>
              </li>
              <li className='nav__item'>
                <Link className='nav__item-link' to='skills-contacts' smooth>
                  Skills&Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className='hero__about'>
          <h1 className='hero__title'>
            Hi <br /> my name <span className='thin'>is</span> Denis
          </h1>
          <div className='hero__description-wrapper'>
            <p className='hero__description'>{description}</p>
            <span className='hero__description-line' style={animationLine} />
          </div>
          <Link className='hero__button red-button' to='portfolio' smooth>
            View Portfolio
          </Link>
          <BigShoesTorso className='hero__big-shoes-torso' />
        </div>
      </div>
    </motion.section>
  );
});

export default Hero;
