import React from 'react';
import './Faq.css';

export default function FAQ() {
  return (
    <div className='FAQ-container'>
      <h3 className='question-text title-ask'>
        Comment jouer à Pokemon Steam ? Puis-je y jouer sur Mac ?
      </h3>
      <div className='border-title'></div>
      <h2 id='fixtitle'>Il n'existe plus de version avec launcher.</h2>
      <p className='answer-text'>
        Concernant la question, tout a été renseigné sur le wiki :
        <a href='https://pokemon-steam1.fandom.com/fr/wiki/Installation_et_Lancement'>
          <i className='fas fa-atlas'> {} </i>
        </a>{' '}
        pour lequel un travail titanesque a été effectué. Visitez-le !
      </p>
      <h3 className='question-text'>
        Quand est prévue la sortie de Pokemon Steam 2, histoire située 20 ans
        après Steam 1 ?
      </h3>
      <div className='border-title'></div>
      <p className='answer-text'>
        A ce jour, toujours aucune date de communiquée, mais sachez que le
        projet avance. Vous serez alerté directement sur le discord
        <a href='https://discord.gg/RktYVPE'>
          <i className='fab fa-discord'></i>
        </a>{' '}
        lorsque une bêta sera envisageable
      </p>
      <h3 className='question-text'>
        Comment mettre le jeu en plein écran, accélerer le jeu, accéder à la
        configuration des touches ?
      </h3>
      <div className='border-title'></div>
      <p className='answer-text '>
        <ul className='config-container'>
          <li className='config'>
            Pour changer la résolution du jeu : c'est le fichier 1280_960 pour
            une résolution en 1280x960 pixels, et FullScreen pour le plein écran{' '}
            <br />{' '}
            <img
              src='https://www.cyrillefabre.com/upload/pokemonsteam/PleinEcran.PNG'
              alt=''
              className='fiximg'
            />
          </li>
          <li className='config'>
            Pour accélerer le jeu, c'est la touche F5, et chez certains la
            touche F3 fonctionne aussi.
          </li>
          <li className='config'>
            Pour pouvoir configurer ses touches, c'est grâce à F1. Vous pourrez
            même jouer à la manette
          </li>
        </ul>
      </p>
      <h3 className='question-text'>
        Comment connaître les attaques, lieux de capture, evolution des pokemons
        ?
      </h3>
      <div className='border-title'></div>
      <p className='answer-text'>
        Encore une fois, le wiki est une vraie mine d'or :
        <a href='https://pokemon-steam1.fandom.com/fr/wiki/Wiki_Pok%C3%A9mon_Steam'>
          <i className='fas fa-atlas'></i>
        </a>{' '}
        Je me répète, mais consultez-le !
      </p>
      <h3 className='question-text'>
        Comment évolue un pokémon qui est censé évoluer avec un cycle jour/nuit
        ou par échange?
      </h3>
      <div className='border-title'></div>
      <p className='answer-text'>
        Toutes ces méthodes d'évolution ont été codées différemment : soit
        évolution par niveau, soit avec une pierre. (Et la réponse se trouve où
        ?? Le wiki<i className='fas fa-atlas'></i> bien sûr)
      </p>
    </div>
  );
}
