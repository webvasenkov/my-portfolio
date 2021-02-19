import React, { useState } from 'react';
import { data } from './data';
import './styles/main.scss';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import SkillsContacts from './components/SkillsContacts';
import Footer from './components/Footer';

function App() {
  const [info, setInfo] = useState(data);

  return (
    <div className='app'>
      <Hero />
      <Portfolio slides={info.portfolio} />
      <SkillsContacts skills={info.skills} />
      <Footer />
    </div>
  );
}

export default App;
