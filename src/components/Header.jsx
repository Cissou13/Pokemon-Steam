import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <Link to='/'>
          <img
            src='https://www.cyrillefabre.com/upload/pokemonsteam/banniere3_pokemonsteam.png'
            alt='Bannière Pokemon Steam'
            title='Bannière Pokemon Steam'
            className='responsive'
          />
        </Link>
      </div>
    </header>
  );
}
