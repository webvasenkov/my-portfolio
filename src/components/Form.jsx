import React, { useState } from 'react';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
  const [isSent, setIsSent] = useState(false);
  const stylesElement = (name) => {
    return classNames('skills-contacts__form-element', {
      'skills-contacts__form-element--error': errors[name]?.message,
    });
  };
  const errorMessage = (name) => {
    return <span className='skills-contacts__error-message'>{errors[name]?.message}</span>;
  };

  // Remove after build
  const fakeRequest = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Message send'), 1500);
    });
  };

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data, event) => {
    event.target.reset();

    try {
      // const result = await emailjs.sendForm('webvasenkov', 'contact_form', event.target, process.env.REACT_APP_USER_ID);
      const result = await fakeRequest();
      console.log(result);
      setIsSent(true);
    } catch (error) {
      setIsSent(false);
    }
  };

  return (
    <form className='skills-contacts__form' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
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
      <div className={classNames('skills-contacts__form-bottom', { 'skills-contacts__form-bottom--success': isSent })}>
        {isSent && (
          <span className='skills-contacts__message'>
            <Heart className='skills-contacts__message-icon' />
            Hi, I will reply shortly
          </span>
        )}
        <button className='skills-contacts__button red-button' type='submit' value='Send'>
          Say Hello
        </button>
      </div>
    </form>
  );
};

export default Form;
