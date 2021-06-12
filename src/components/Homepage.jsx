import React from 'react';
import './Homepage.css';

export default function Homepage() {
  return (
    <main className='homepage-container'>
      <h1>Bienvenue sur le site officiel du fangame Pokemon Steam</h1>
      <section className='homepage-content'>
        <p>
          Ce site fait la jonction entre les différents acteurs et ressources
          qui vont vous aider.
        </p>
        <p>
          Aussi vous trouverez quelques petites infos, des liens utiles, les
          questions les plus fréquemments posées,et l'avancée concernant les
          projets.
        </p>
        <p>
          Une mention spéciale pour Fildrong, maître de la strat Pokemon, et
          youtubeur reconnu sur Pokemon.
          <br />
          Il a vécu l'expérience Steam, l'a savourée, et en a donné son avis.{' '}
          <br /> Nous le remercions d'y avoir joué
          <p>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/DYoWYf_ie_M'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </p>
        </p>
      </section>
      <section className='homepage-content'>
        <p>
          N'hésitez pas à rejoindre le discord officiel du jeu, ainsi que le
          wiki où 90% de vos questions trouveront réponse.{' '}
        </p>
        <p>
          {' '}
          Jetez un oeil à la catégorie <strong>Liens Utiles</strong> en bas du
          site.
        </p>
        <section className='homepage-content'>
          <h2>Infos & Modifications récentes</h2>
          <h3>13/06/2021</h3>
          <p>Déploiement de la 1ere version desktop du site</p>
        </section>
      </section>
    </main>
  );
}
