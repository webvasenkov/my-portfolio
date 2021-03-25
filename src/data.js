import { v4 } from 'uuid';
import photographerPortfolio from './assets/photographer-portfolio.png';
import photographerPortfolioLazy from './assets/photographer-portfolio-lazy.jpg';
import musicPlayer from './assets/music-player.png';
import musicPlayerLazy from './assets/music-player-lazy.jpg';
import eCommerce from './assets/e-commerce.png';
import eCommerceLazy from './assets/e-commerce-lazy.jpg';
import greatestPizza from './assets/greatest-pizza.png';
import greatestPizzaLazy from './assets/greatest-pizza-lazy.jpg';
import gamesBase from './assets/games-base.png';
import gamesBaseLazy from './assets/games-base-lazy.jpg';

export const data = {
  portfolio: [
    {
      id: v4(),
      name: 'Games Base',
      img: gamesBase,
      lazy: gamesBaseLazy,
      link: 'https://games-base-webvasenkov.netlify.app',
      tools: ['React', 'Redux', 'Framer', 'Styled Components'],
    },
    {
      id: v4(),
      name: 'Photographer Portfolio',
      img: photographerPortfolio,
      lazy: photographerPortfolioLazy,
      link: 'https://photographer-portfolio-webvasenkov.netlify.app',
      tools: ['React', 'Framer', 'Styled Components'],
    },
    {
      id: v4(),
      name: 'Music Player',
      img: musicPlayer,
      lazy: musicPlayerLazy,
      link: 'https://music-player-webvasenkov.netlify.app',
      tools: ['React', 'SASS'],
    },
    {
      id: v4(),
      name: 'Greatest Pizza',
      img: greatestPizza,
      lazy: greatestPizzaLazy,
      link: 'https://greatest-pizza-webvasenkov.netlify.app',
      tools: ['React', 'Styled Components'],
    },
    {
      id: v4(),
      name: 'E-commerce',
      img: eCommerce,
      lazy: eCommerceLazy,
      link: 'https://e-commerce-webvasenkov.netlify.app',
      tools: ['React', 'Commerce', 'Material UI', 'Stripe'],
    },
  ],

  skills: [
    { id: v4(), name: 'JavaScript' },
    { id: v4(), name: 'React' },
    { id: v4(), name: 'Redux' },
    { id: v4(), name: 'HTML5' },
    { id: v4(), name: 'CSS3' },
    { id: v4(), name: 'Figma' },
    { id: v4(), name: 'Framer' },
    { id: v4(), name: 'Adobe Photoshop' },
  ],
};
