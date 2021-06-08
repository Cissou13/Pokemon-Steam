import React from 'react';
import './Header.css';

export default function Navbar() {
  return (
    <nav>
      <div className='navbar-container'>
        <ul className='menu-container'>
          <li className='menu-items'>
            <a href='/projets'>
              Présentation des projets
              <span role='img' aria-label='Equipe'>
                🛠️
              </span>
            </a>
          </li>
          <li className='menu-items'>
            <a href='/histoire'>
              Synopsis{' '}
              <span role='img' aria-label='Equipe'>
                📖
              </span>
            </a>
          </li>
          <li className='menu-items'>
            <a href='/FAQ'>
              FAQ
              <span role='img' aria-label='Equipe'>
                ❓
              </span>
            </a>
          </li>
          <li className='menu-items'>
            <a href='/team'>
              Acteurs du projet
              <span role='img' aria-label='Equipe'>
                🖱️
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
