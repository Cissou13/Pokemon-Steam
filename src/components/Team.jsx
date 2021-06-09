import React from 'react';
import './Team.css';

export default function Team() {
  return (
    <main className='team-main'>
      <article className='team-history'>
        <h2 className='team-presentation'>
          Présentation de l'équipe & Crédits
        </h2>
      </article>

      <article className='team-content'>
        <img
          src='https://www.cyrillefabre.com/upload/pokemonsteam/avatarBugfix.png'
          alt='Bugfix'
          title='Bugfix'
          id='first'
        />
        <h2>Bugfix</h2>
        <p className='left-text'>Directeur et unique développeur du projet</p>
        <div className='social-icons-team'>
          <li>
            <a href='https://www.youtube.com/channel/UCVMU6KuSA4Ca_kkM62Ripjw'>
              <i className='fab fa-youtube'></i>
            </a>
          </li>
          <li>
            <a href='https://discord.gg/RktYVPE'>
              <i className='fab fa-discord'></i>
            </a>
          </li>
        </div>
      </article>
      <article className='team-content split2'>
        <img
          src='https://www.cyrillefabre.com/upload/pokemonsteam/avatarOPW.png'
          alt='Beta Testeur'
          title='Beta Testeur'
        />
        <h2>One Piece Warrior</h2>
        <p className='right-text'>Le tout premier Bêta Testeur de Steam 1</p>
        {/* <div className='social-icons-team'>
          <li>
            <a href='https://github.com/'>
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
        </div> */}
      </article>
      <article className='team-content split2'>
        <img
          src='https://via.placeholder.com/64'
          alt='Beta Testeur'
          title='Beta testeur'
        />
        <h2> Amras Anàrion</h2>
        <p className='left-text'>
          Bêta testeur, correcteur orthographique, et créateur de divers mods
          (Barre PV négatif, double poison qui se transforme en toxik...)
        </p>
        {/* <div className='social-icons-team'>
          <li>
            <a href='https://github.com/'>
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
        </div> */}
      </article>
      <article className='team-content'>
        <img
          src='https://www.cyrillefabre.com/upload/pokemonsteam/avatarLexio.png'
          alt='Helper 1'
          title='Helper 1'
          className='trois'
        />
        <img
          src='https://via.placeholder.com/64'
          alt='Helper 2'
          title='Helper 2'
          className='trois'
        />
        <img
          src='https://via.placeholder.com/64'
          alt='Helper 3'
          title='Helper 3'
          className='trois'
        />
        <h2>Lexio, Moha et Papy Draco</h2>
        <p className='left-text'>
          Les helpeurs qui bossent comme des dingues sur le Wiki
        </p>
        <div className='social-icons-team'>
          <li>
            <a href='https://pokemon-steam1.fandom.com/fr/wiki/Wiki_Pok%C3%A9mon_Steam'>
              <i className='fas fa-atlas'></i>
            </a>
          </li>
          <li>
            <a href='https://discord.gg/RktYVPE'>
              <i className='fab fa-discord'></i>
            </a>
          </li>
        </div>
      </article>

      <article className='team-content'>
        <h2>Crédits (Il y a du monde)</h2>
        <p className='center'>
          Par souci de clarté, je vous invite à retrouver la liste complète{' '}
          <a
            href='https://pokemonworkshop.fr/forum/index.php?topic=5417.0'
            target='_blank'
            rel='noreferrer'
          >
            ici
          </a>
        </p>
        {/* <div className='social-icons-team'>
          <li>
            <a href='https://github.com/'>
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
        </div> */}
      </article>
    </main>
  );
}
