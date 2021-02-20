import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Preloader = () => {
  return (
    <div className='preloader'>
      <Logo className='preloader__logo' />
    </div>
  );
};

export default Preloader;
