import React from 'react';

import { CharacterCard } from '../../components/character-card';
import { Loading } from '../../components/loading';
import { useData } from '../../hooks/useData';

import './styles.scss';

export function PastTrials() {
  const { handleActive, handleVotes, active, characters } = useData();
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
          <i className="material-icons">close</i>
        </div>
      </div>
      <div className="past-trials__characters-title">Votes</div>
      <div className="past-trials__characters-list">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            handleActive={handleActive}
            active={active}
            handleVotes={handleVotes}
          />
        ))}
      </div>
      <Loading />
    </section>
  );
}
