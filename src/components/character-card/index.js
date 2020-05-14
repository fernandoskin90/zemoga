import React from 'react';

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
  },
  active,
  handleActive,
  handleVotes,
}) {
  console.log({ againstVotes, forVotes, active });
  const isFor = forVotes > againstVotes;
  const trendingVotesIcon = isFor ? 'thumb_up' : 'thumb_down';

  const floatinButtonClass = `character-card__floating-votes-icon ${
    isFor ? '--up' : '--down'
  }`;

  return (
    <div
      className="character-card"
      style={{ backgroundImage: `url(${avatar})` }}
    >
      <div className="character-card__content">
        <div className="character-card__name">
          <div className={floatinButtonClass}>
            <i className="material-icons">{trendingVotesIcon}</i>
          </div>
          {name}
        </div>
        <div className="character-card__time-ago">
          <span>{timeAgo}</span>
          {jobArea}
        </div>
        <div className="character-card__description">{description}</div>
        <div className="character-card__vote-form">
          <button
            className="character-card__thumbup"
            onClick={() => {
              handleActive('up');
            }}
          >
            <i className="material-icons">thumb_up</i>
          </button>
          <button
            className="character-card__thumbdown"
            onClick={() => {
              handleActive('down');
            }}
          >
            <i className="material-icons">thumb_down</i>
          </button>
          <button
            className="character-card__vote-button"
            onClick={() => {
              handleVotes(id);
            }}
          >
            Vote now
          </button>
        </div>
      </div>
      <div className="character-card__votes-container">
        <div
          className="character-card__for-bar"
          style={{ width: `${forVotes}%` }}
        >
          <i className="material-icons">thumb_up</i>
          {forVotes}
        </div>
        <div
          className="character-card__against-bar"
          style={{ width: `${againstVotes}%` }}
        >
          <i className="material-icons">thumb_down</i>
          {againstVotes}
        </div>
      </div>
    </div>
  );
}
