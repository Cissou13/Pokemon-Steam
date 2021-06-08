import React from 'react';
import './Synopsis.css';

export default function Synopsis() {
  return (
    <div className='synopsis-container'>
      <h2 className='synopsis-title'>Région d'Exodius</h2>
      <img
        src='https://www.cyrillefabre.com/upload/pokemonsteam/map.png'
        alt='Map Région Exodius'
        title='Map Région Exodius'
        className='synopsis-image'
      />{' '}
      <br />
      <p className='synopsis-text'>
        Lors de la création du Monde, Arceus s'est fait attaquer par un Pokémon
        dimensionnel, le blessant gravement en un seul coup ! <br /> Pour faire
        face à cette terrible menace, Arceus appela en renfort Palkia, Dialga et
        Giratina. <br /> Au bout d'un combat acharné, Arceus, Dialga, Palkia et
        Giratina eurent tout juste la force de lui tenir tête.
      </p>
      <p className='synopsis-text'>
        Ils réussissent par miracle à le faire retourner de force dans sa
        dimension. Arceus compris par la suite que c’était lui qui attirait ce
        Pokémon dimensionnel… sûrement à cause du fait qu’il était le Pokémon le
        plus puissant de cet univers. Arceus s'enferma donc dans sa propre
        dimension pour ne plus être dérangé par ce Pokémon.{' '}
      </p>
      <p className='synopsis-text'>
        Mais parmi les habitants nés de la création d’Arceus, une personne de
        haut-rang se rappela de de l’existence de Pokémon dimensionnel. Il n’eut
        alors qu’un seul désir : s’emparer de sa puissance par tous les moyens
        possibles ! Nul n’en sait les raisons.
      </p>
      <br />
      <br />
      <p className='synopsis-text'>
        Enfant du Maître de la Ligue, traversez et explorez le monde de Pokémon
        Steam, confrontez votre force aux champions d’arènes, affronter la Ligue
        Pokémon et devenez le dresseur le plus puissant que la région n'ait
        jamais connue !{' '}
      </p>
      <p className='synopsis-text'>
        Pokémon Steam vous emmène dans la région d'Exodius. Elle se compose de
        15 villes et de plusieurs biomes.
      </p>
      <br />
      <h2 className='synopsis-title'>Les starters</h2>
      <img
        src='https://www.cyrillefabre.com/upload/pokemonsteam/starters.png'
        alt='Map Région Exodius'
        title='Map Région Exodius'
        className='synopsis-image'
      />
      <p className='synopsis-text'>
        Et oui les starters sont au nombre de 4, ce sont des versions modifiées
        (Type, moveset) de pokemons existants. Ils sont exclusifs à Exodius.
      </p>
      <a
        className='center'
        href='https://pokemonworkshop.fr/forum/index.php?topic=5417.0'
        target='_blank'
        rel='noreferrer'
        id='more'
      >
        Vous voulez des captures du jeu et du tease supplémentaire? Alors
        cliquez!
      </a>
    </div>
  );
}
