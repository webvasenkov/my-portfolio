import React from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as BigShoesTorso } from '../assets/big-shoes-torso.svg';

const Hero = () => {
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
          <p className='hero__description'>I’m a beginner web developer</p>
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
