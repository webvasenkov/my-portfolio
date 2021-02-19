import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as BigShoesTorso } from '../assets/big-shoes-torso.svg';

const Hero = () => {
  const [about, setAbout] = useState(['t1', 't2']);
  const [description, setDescription] = useState('');

  const delay = (ms = 150) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  };

  const typeWriterEffect = async () => {
    for (let i = 0; i < about.length; i++) {
      setDescription('');
      for (let j = 0; j < (!i ? about[i].length + 1 : about[i].length); j++) {
        await delay();
        setDescription((descriptionPrev) => {
          return descriptionPrev + about[i][j];
        });
      }
    }
  };

  useEffect(() => typeWriterEffect(), []);

  return (
    <section className='hero'>
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
          <p className='hero__description'>{description}</p>
          <Link className='hero__button red-button' to='portfolio' smooth>
            View Portfolio
          </Link>
        </div>
        <BigShoesTorso className='hero__big-shoes-torso' />
      </div>
    </section>
  );
};

export default Hero;
