import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Navbar() {
  return (
    <nav>
      <div className='navbar-container'>
        <ul className='menu-container'>
          <li className='menu-items'>
            <Link to='/projets'>
              Présentation des projets Steam
              <span role='img' aria-label='Equipe'>
                🛠️
              </span>
            </Link>
          </li>
          <li className='menu-items'>
            <Link to='/histoire'>
              Synopsis{' '}
              <span role='img' aria-label='Equipe'>
                📖
              </span>
            </Link>
          </li>
          <li className='menu-items'>
            <Link to='/FAQ'>
              FAQ
              <span role='img' aria-label='Equipe'>
                ❓
              </span>
            </Link>
          </li>
          <li className='menu-items'>
            <Link to='/team'>
              Acteurs du projet
              <span role='img' aria-label='Equipe'>
                🖱️
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
