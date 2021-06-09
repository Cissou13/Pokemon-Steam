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
              Projets Steam
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
              {' '}
              <span role='img' aria-label='Equipe'>
                💾
              </span>
              Download / FAQ
              <span role='img' aria-label='Equipe'>
                ❓
              </span>
            </Link>
          </li>
          <li className='menu-items'>
            <Link to='/team'>
              <span role='img' aria-label='Equipe'>
                👨‍💻
              </span>
              Equipe / Remerciements{' '}
              <span role='img' aria-label='Equipe'>
                🙏
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
