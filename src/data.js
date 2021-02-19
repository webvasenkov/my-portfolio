import { v4 } from 'uuid';
import photographerPortfolio from './assets/photographer-portfolio.png';
import musicPlayer from './assets/music-player.png';
import eCommerce from './assets/e-commerce.png';
import greatestPizza from './assets/greatest-pizza.png';

export const data = {
  portfolio: [
    {
      id: v4(),
      name: 'Photographer Portfolio',
      img: photographerPortfolio,
      link: 'https://photographer-portfolio-webvasenkov.netlify.app',
      tools: ['React', 'Framer', 'Styled Components'],
    },
    {
      id: v4(),
      name: 'Music Player',
      img: musicPlayer,
      link: 'https://music-player-webvasenkov.netlify.app',
      tools: ['React', 'SASS'],
    },
    {
      id: v4(),
      name: 'Greatest Pizza',
      img: greatestPizza,
      link: 'https://greatest-pizza-webvasenkov.netlify.app',
      tools: ['React', 'Styled Components'],
    },
    {
      id: v4(),
      name: 'E-commerce',
      img: eCommerce,
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
