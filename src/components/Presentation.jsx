import React from 'react';
import './Presentation.css';

export default function Presentation() {
  return (
    <div className='presentation-container'>
      <section className='presentation-item'>
        <h2>Projet Steam 1</h2>
        Un mot du développeur :
        <blockquote>
          <p>
            Le projet Pokémon Steam a officiellement commencé le 16 janvier
            2018, j'ai toujours voulu faire un jeu Pokémon. Je me suis donc
            lancé dans la création de mon propre jeu, dans un premier temps en
            découvrant le starter-Kit PSP. <br />
            Au bout de 3-4 mois de développement sur PSP, j’avais atteint le
            stade de démo de plusieurs heures, mais j'ai connu Amras et il a
            voulu tester mon projet...
            <br />
            Je n’étais pas très très chaud car mon projet était affreusement
            bugué ( et aussi car le jeu faisait plus de 2,25 Go car je mettais
            que des musiques en .WAV de 30 minutes mais chut xD). <br />
            Finalement j'ai cédé et je lui ai passé ma démo. Après avoir fini de
            tester la démo, il m'a fait un rapport de 40 pages sur Word. J’étais
            content et aussi un peu gêné car dans ces 40 pages, il parlait des
            bugs ou autres trucs étranges de mon Fan-Game xD.{' '}
          </p>
          <p>
            Mais bref, après avoir fini ma démo, il m'a conseillé de passer sur
            le starter-Kit PSDK mais j'ai beaucoup hésité car il y avait le PSP
            0.9.2 REMASTERED qui faisait envie.
            <br /> Je me suis donc officiellement penché sur PSDK en fin d’année
            2018. Du coup la migration PSP / PSDK m'a pris pas mal de temps.{' '}
            <br />
            J'avais officiellement fini la migration en été 2019, 1 an après le
            Test d'Amras sur la Version PSP. Je voulais initialement attendre
            l'alpha 25 de PSDK pour faire la présentation de mon projet et ainsi
            enfin donner un lien vers la version publique. <br />
            Etant donné que la mise à jour a du retard, j'ai donc décidé de
            publier le jour des 2 ans du projet.
          </p>
          <p>
            Je suis seul dans le projet depuis le début du développement de mon
            Fan-Game donc il y a des trucs où je ne suis pas vraiment doué. (Par
            exemple le mapping, le dessin et l'orthographe). Je me suis
            débrouillé comme j'ai pu mais je suis content d'avoir atteint le
            stade d'un Fan-Game terminé. <br />
            Si des personnes veulent bien aider pour améliorer diverses choses
            sur le jeu, j’accepterais volontiers ^^
          </p>
        </blockquote>
      </section>
      <section className='presentation-item'>
        <h2>Projet Steam 2</h2>
        <blockquote>
          Projet toujours en cours de développement. Une date sera annoncée sur
          le discord du jeu. <br />
          La seule info que nous avons : L'histoire se passe 20 ans après Steam
          1, et se situe dans la région du post game (Tameriel)
        </blockquote>
      </section>
      <section className='presentation-item'>
        <h2>Projet Steam 3 ?</h2>
        <blockquote>
          Le rêve est à portée de main de tout un chacun... Laissons d'abord
          Steam 2 arriver
        </blockquote>
      </section>
    </div>
  );
}
