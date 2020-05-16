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
  showMessage,
  setShowMessage,
  isActive,
}) {
  const totalVotes = againstVotes + forVotes;
  const percentage = {
    for: (forVotes * 100) / totalVotes,
    againts: (againstVotes * 100) / totalVotes,
  };
  const isFor = forVotes > againstVotes;
  const trendingVotesIcon = isFor ? 'thumb_up' : 'thumb_down';

  const floatinButtonClass = `character-card__floating-votes-icon ${
    isFor ? '--up' : '--down'
  }`;

  const upActive = active === 'up' && isActive ? '--up-active' : '';
  const downActive = active === 'down' && isActive ? '--down-active' : '';

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
        {showMessage && isActive ? (
          <div className="character-card__thank-you">
            <span>Thank you for voting!</span>
            <button
              className="character-card__vote-again"
              onClick={() => {
                setShowMessage(false);
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
                onClick={() => {
                  handleActive('up', id);
                }}
              >
                <i className="material-icons">thumb_up</i>
              </button>
              <button
                className={`character-card__thumbdown ${downActive}`}
                onClick={() => {
                  handleActive('down', id);
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
          </>
        )}
      </div>
      <div className="character-card__votes-container">
        <div
          className="character-card__for-bar"
          style={{ width: `${percentage.for}%` }}
        >
          <i className="material-icons">thumb_up</i>
          {percentage.for}%
        </div>
        <div
          className="character-card__against-bar"
          style={{ width: `${percentage.againts}%` }}
        >
          <i className="material-icons">thumb_down</i>
          {percentage.againts}%
        </div>
      </div>
    </div>
  );
}
