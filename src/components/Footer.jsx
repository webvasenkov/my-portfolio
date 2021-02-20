import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useScrollAnimation } from './useScrollAnimation';
import { motion } from 'framer-motion';
import { zoom } from '../animation';

const Footer = () => {
  const [element, controls] = useScrollAnimation();

  return (
    <motion.footer className='footer' ref={element} variants={zoom} animate={controls}>
      <ul className='footer__social-networks'>
        <li className='footer__social-network'>
          <a className='footer__social-network-link' href='https://t.me/webvasenkov' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </li>
        <li className='footer__social-network'>
          <a
            className='footer__social-network-link'
            href='https://linkedin.com/in/webvasenkov'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className='footer__social-network'>
          <a
            className='footer__social-network-link'
            href='https://github.com/webvasenkov'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </motion.footer>
  );
};

export default Footer;
