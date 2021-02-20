import React, { useState, useRef } from 'react';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as Error } from '../assets/error.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { delay } from '../util';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import classNames from 'classnames';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

const Form = () => {
  const [messageText, setMessageText] = useState('');
  const [errorText, setErrorText] = useState('');

  const refForm = useRef();
  const stylesElement = (name) => {
    return classNames('skills-contacts__form-element', {
      'skills-contacts__form-element--error': errors[name]?.message,
    });
  };

  const errorMessage = (name) => {
    return <span className='skills-contacts__error-message'>{errors[name]?.message}</span>;
  };

  const onSubmit = async (data) => {
    try {
      await emailjs.sendForm('webvasenkov', 'contact_form', refForm.current, process.env.REACT_APP_USER_ID);
      refForm.current.reset();
      setMessageText(`Hi ${data.name}, I will reply shortly`);
      await delay(3000);
      setMessageText('');
    } catch (error) {
      setErrorText('Something went wrong :(');
      await delay(3000);
      setErrorText('');
    }
  };

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form className='skills-contacts__form' onSubmit={handleSubmit(onSubmit)} ref={refForm}>
      <div className='skills-contacts__form-top'>
        <div className={stylesElement('name')}>
          <input className='skills-contacts__form-input' name='name' type='text' placeholder='Name' ref={register} />
          {errors.name && errorMessage('name')}
        </div>
        <div className={stylesElement('email')}>
          <input className='skills-contacts__form-input' name='email' type='text' placeholder='Email' ref={register} />
          {errors.email && errorMessage('email')}
        </div>
      </div>
      <div className={stylesElement('subject')}>
        <input
          className='skills-contacts__form-input'
          name='subject'
          type='text'
          placeholder='Subject'
          ref={register}
        />
        {errors.subject && errorMessage('subject')}
      </div>
      <div className={stylesElement('message')}>
        <textarea
          className='skills-contacts__form-textarea'
          name='message'
          type='text'
          placeholder='Message'
          ref={register}
        />
        {errors.message && errorMessage('message')}
      </div>
      <div
        className={classNames('skills-contacts__form-bottom', {
          'skills-contacts__form-bottom--success': messageText || errorText,
        })}
      >
        {messageText && (
          <motion.span className='skills-contacts__message' initial={{ y: -20 }} animate={{ y: 0 }}>
            <Heart className='skills-contacts__message-icon' />
            {messageText}
          </motion.span>
        )}
        {errorText && (
          <motion.span className='skills-contacts__message' initial={{ y: -20 }} animate={{ y: 0 }}>
            <Error className='skills-contacts__message-icon' />
            {errorText}
          </motion.span>
        )}
        <button className='skills-contacts__button red-button' type='submit' value='Send'>
          Say Hello
        </button>
      </div>
    </form>
  );
};

export default Form;
