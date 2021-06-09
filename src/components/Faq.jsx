import React from 'react';
import './Faq.css';

export default function FAQ() {
  return (
    <div className='FAQ-container'>
      <h3 className='question-text title-ask'>
        Comment jouer à Pokemon Steam sur mon PC ? Puis-je y jouer sur Mac ?
      </h3>
      <div className='border-title'></div>
      <h2 id='fixtitle'>Il n'existe plus de version avec launcher.</h2>
      <p className='answer-text'>
        Concernant la question, tout a été renseigné sur le{' '}
        <strong>wiki</strong> :
        <a
          href='https://pokemon-steam1.fandom.com/fr/wiki/Installation_et_Lancement'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fas fa-atlas'> {} </i>
        </a>{' '}
        pour lequel un travail titanesque a été effectué. Visitez-le !
      </p>
      <h3 className='question-text'>
        Quand est prévue la sortie de Pokemon Steam 2, histoire située 20 ans
        après ?
      </h3>
      <div className='border-title'></div>
      <p className='answer-text'>
        A ce jour, toujours aucune date de communiquée, mais sachez que le
        projet avance. Vous serez alerté directement sur le discord
        <a href='https://discord.gg/RktYVPE' target='_blank' rel='noreferrer'>
          <i className='fab fa-discord'></i>
        </a>{' '}
        lorsque le jeu sortira.
      </p>
      <h3 className='question-text'>
        Comment mettre le jeu en plein écran, accélerer le jeu, configurer les
        touches ?
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
            Pour accélerer le jeu, c'est la touche <strong>F5</strong>, et chez
            certains la touche <strong>F3</strong> fonctionne aussi.
          </li>
          <li className='config'>
            Pour pouvoir configurer ses touches, c'est grâce à{' '}
            <strong>F1</strong>. Vous pourrez même jouer à la manette
          </li>
        </ul>
      </p>
      <h3 className='question-text'>
        Comment connaître les attaques, lieux de capture, evolution des pokemons
        ?
      </h3>
      <div className='border-title'></div>
      <p className='answer-text'>
        Encore une fois, le <strong>wiki</strong> est une vraie mine d'or :
        <a
          href='https://pokemon-steam1.fandom.com/fr/wiki/Wiki_Pok%C3%A9mon_Steam'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fas fa-atlas'></i>
        </a>{' '}
        Je me répète, mais consultez-le !
      </p>
      <h3 className='question-text'>
        Comment évolue un pokémon avec un cycle jour/nuit ou par échange?
      </h3>
      <div className='border-title'></div>
      <p className='answer-text'>
        Toutes ces méthodes d'évolution ont été codées différemment : soit
        évolution par niveau, soit avec une pierre. (Et la réponse se trouve où
        ?? Le <strong>wiki</strong>
        <a
          href='https://pokemon-steam1.fandom.com/fr/wiki/Les_principales_modifications'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fas fa-atlas'></i>
        </a>{' '}
        bien sûr)
      </p>
    </div>
  );
}
