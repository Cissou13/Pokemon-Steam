import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Contact from './Contact.jsx';

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <Link to='/'>
          <div className='footer-logo'>
            <img
              src='https://www.cyrillefabre.com/upload/logos/pokemonsteam.png'
              alt='Logo Pokemon Steam'
              title='Logo Pokemon Steam'
            />
          </div>
        </Link>
        <Contact />
        <div className='social-container'>
          <h3 className='social-follow footer-title'>Liens Utiles</h3>
          <div className='social-icons'>
            <a
              href='https://www.youtube.com/channel/UCVMU6KuSA4Ca_kkM62Ripjw'
              target='_blank'
              rel='noreferrer'
              className='youtube social'
            >
              <i className='fab fa-youtube'></i>
            </a>
            <a
              href='https://discord.gg/RktYVPE'
              target='_blank'
              rel='noreferrer'
              className='discord social'
            >
              <i className='fab fa-discord'></i>
            </a>
            <a
              href='https://pokemon-steam1.fandom.com/fr/wiki/Wiki_Pokémon_Steam'
              target='_blank'
              rel='noreferrer'
              className='twitter social'
            >
              <i className='fas fa-atlas'></i>
            </a>
          </div>
        </div>
      </div>
      <p className='copyright'>© 2021 Tous droits réservés - Pokemon Steam</p>
      <p className='copyright'>
        <a
          href='https://www.facebook.com/Staycalmandcode'
          target='_blank'
          rel='noreferrer'
        >
          Contacter le dev {}
        </a>
      </p>
    </footer>
  );
}
