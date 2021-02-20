import React from 'react';
import Form from './Form';

const SkillsContacts = ({ skills }) => {
  return (
    <section id='skills-contacts' className='skills-contacts'>
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
    </section>
  );
};

export default SkillsContacts;
