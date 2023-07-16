import React from 'react';
import '../csss.css';

import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>  <div className='BgImage text-light d-flex align-items-center justify-content-center'>
      <button className='mainb button-animation' onClick={() => navigate('Pokedex')}>
        Search Pokedex
      </button>

    </div></div>
  )
}

export default Home