import React from 'react';
import './Homepage.css';

export default function Homepage() {
  return (
    <main className='homepage-container'>
      <h1>Bienvenue sur le site officiel du fangame Pokemon Steam</h1>
      <section className='homepage-content'>
        <p>
          Ce site fait la jonction entre les différents acteurs et ressources
          qui vont t'aider.
        </p>
        <p>
          Aussi vous trouverez quelques petites infos, des liens utiles, les
          questions les plus fréquemments posées,et l'avancée concernant mes
          projets.
        </p>
      </section>
      <section className='homepage-content'>
        <p>
          N'hésitez pas à rejoindre le discord officiel du jeu, ainsi que le
          wiki où 90% de vos questions trouveront réponse.{' '}
        </p>
        <p> Jetez un oeil à la catégorie "Liens Utiles" en bas du site.</p>
      </section>
    </main>
  );
}
