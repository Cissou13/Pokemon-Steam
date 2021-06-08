import React from 'react';
import './Team.css';

export default function Team() {
  return (
    <main className='team-main'>
      <article className='team-history'>
        <div className='team-presentation'>
          <h1>Présentation de l'équipe & Crédits</h1>
          <p className='sort-btn'>Team Steam 1 et 2 </p>
        </div>
      </article>

      <article className='team-content'>
        <img src='https://via.placeholder.com/64' alt='Dév 1' title='Dév 1' />
        <h2>Dév 1</h2>
        <p className='left-text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nobis
          maxime ut ullam corporis laboriosam quisquam nulla consectetur
          architecto numquam?
        </p>
        <div className='social-icons-team'>
          <li>
            <a href='https://github.com/'>
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
        </div>
      </article>
      <article className='team-content'>
        <img src='https://via.placeholder.com/64' alt='Dév 2' title='Dév 2' />
        <h2>Dév 2</h2>
        <p className='right-text'>
          {' '}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
          distinctio corporis saepe laboriosam vel dolorem. Omnis ipsam quasi
          reiciendis perferendis.{' '}
        </p>
        <div className='social-icons-team'>
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
        </div>
      </article>
      <article className='team-content'>
        <img src='https://via.placeholder.com/64' alt='Dév 3' title='Dév 3' />
        <h2>Dév 3</h2>
        <p className='left-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex
          asperiores aut eius, facere alias molestias corporis unde tempore
          error.
        </p>
        <div className='social-icons-team'>
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
        </div>
      </article>
      <article className='team-content'>
        <img src='https://via.placeholder.com/64' alt='Dév 4' title='Dév 4' />
        <h2>Dév 4</h2>
        <p className='right-text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          corrupti ipsum quisquam aut, beatae labore aliquid molestiae sint
          debitis rerum?
        </p>
        <div className='social-icons-team'>
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
        </div>
      </article>
    </main>
  );
}
