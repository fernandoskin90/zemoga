import React from 'react';

import { CharacterCard } from '../../components/character-card';
import { useCharacters } from '../../hooks/useCharacters';

import './styles.scss';

export function PastTrials() {
  const {
    characters,
    vote,
    voteAgain
  } = useCharacters();

  return (
    <section className="past-trials">
      <div className="past-trials__banner">
        <div className="past-trials__banner-title">
          Speak out. Be heard.
          <span>Be counted</span>
        </div>
        <div className="past-trials__banner-message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          dignissimos ea error est facere, harum incidunt labore laborum modi
          natus odit provident quaerat quos ratione, reprehenderit sit tenetur
          vel velit.
        </div>

        <div className="past-trials__banner-close-icon">
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="past-trials__characters-title">Votes</div>
      <div className="past-trials__characters-list">
        {characters.map((character, index) => (
          <CharacterCard
            key={character.id}
            character={character}
            vote={vote(index)}
            voteAgain={voteAgain(index)}
          />
        ))}
      </div>
    </section>
  );
}
