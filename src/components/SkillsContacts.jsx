import React from 'react';
import Form from './Form';
import { motion } from 'framer-motion';
import { zoom } from '../animation';
import { useScrollAnimation } from './useScrollAnimation';

const SkillsContacts = ({ skills }) => {
  const [element, controls] = useScrollAnimation();

  return (
    <motion.section id='skills-contacts' className='skills-contacts' ref={element} variants={zoom} animate={controls}>
      <div className='skills-contacts__container container'>
        <h2 className='skills-contacts__title'>
          Skills<span className='thin'>&</span>Contacts
        </h2>
        <p className='skills-contacts__description'>My core skills and contacts</p>
        <ul className='skills-contacts__skills'>
          {skills.map((skill) => (
            <li className='skills-contacts__skill' key={skill.id}>
              {skill.name}
            </li>
          ))}
        </ul>
        <Form />
      </div>
    </motion.section>
  );
};

export default SkillsContacts;
