import React from 'react';

import { useCharacter } from '../../hooks/useCharacter';

import './styles.scss';

export function CharacterCard({
  character: {
    againstVotes,
    jobArea,
    avatar,
    description,
    forVotes,
    name,
    timeAgo,
    id,
    wasVoted
  },
  vote,
  voteAgain
}) {
  const {
    clearLastVote,
    isVotingFor,
    selectDown,
    selectUp
  } = useCharacter();

  const totalVotes = againstVotes + forVotes;
  const percentage = {
    for: Number((forVotes * 100) / totalVotes).toFixed(1),
    againts: 0,
  };
  percentage.againts = Number(100 - percentage.for).toFixed(1);

  const isFor = forVotes > againstVotes;
  const trendingVotesIcon = isFor ? 'fa-thumbs-up' : 'fa-thumbs-down';

  const floatinButtonClass = `character-card__floating-votes-icon ${
    isFor ? '--up' : '--down'
  }`;

  const upActive = isVotingFor === true ? '--up-active' : '';
  const downActive = isVotingFor === false ? '--down-active' : '';

  return (
    <div
      className="character-card"
      style={{ backgroundImage: `url(${avatar})` }}
    >
      <div className="character-card__content">
        <div className="character-card__name">
          <div className={floatinButtonClass}>
            <i className={`far ${trendingVotesIcon}`}></i>
          </div>
          {name}
        </div>
        <div className="character-card__time-ago">
          <span>{timeAgo}</span>
          {jobArea}
        </div>
        {wasVoted ? (
          <div className="character-card__thank-you">
            <span>Thank you for voting!</span>
            <button
              className="character-card__vote-again"
              onClick={() => {
                voteAgain();
                clearLastVote();
              }}
            >
              Vote again
            </button>
          </div>
        ) : (
          <>
            <div className="character-card__description">{description}</div>
            <div className="character-card__vote-form">
              <button
                className={`character-card__thumbup ${upActive}`}
                onClick={selectUp}
              >
                <i className="far fa-thumbs-up"></i>
              </button>
              <button
                className={`character-card__thumbdown ${downActive}`}
                onClick={selectDown}
              >
                <i className="far fa-thumbs-down"></i>
              </button>
              <button
                className="character-card__vote-button"
                onClick={() => vote(isVotingFor)}
              >
                Vote now
              </button>
            </div>
          </>
        )}
      </div>
      <div className="character-card__votes-container">
        <div
          className="character-card__for-bar"
          style={{ width: `${percentage.for}%` }}
        >
          <i className="far fa-thumbs-up"></i>
          {percentage.for}%
        </div>
        <div
          className="character-card__against-bar"
          style={{ width: `${percentage.againts}%` }}
        >
          <i className="far fa-thumbs-down"></i>
          {percentage.againts}%
        </div>
      </div>
    </div>
  );
}
