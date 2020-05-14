import React from 'react';
import { Link } from 'react-router-dom'

import {PATHS} from '../../constants';

import './styles.scss';

export const Header = () => (
  <header className="header">
    <nav className="nav">
      <div className="nav__logo">Rule of Thumb</div>
      <div className="nav__menu">
        <Link to={PATHS.PAST_TRIALS}>Past Trials</Link>
        <Link to={PATHS.HOW_IT_WORKS}>How It Works</Link>
        <Link to={PATHS.LOGIN}>Login / Signup</Link>
      </div>
    </nav>
    <div className="header__content">
      <div className="main-card">
        <div className="main-card__content">
          <div className="main-card__title">
            What's your opinion on
            <span>Pope Francis?</span>
          </div>

          <div className="main-card__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio hic necessitatibus repellat saepe. Asperiores beatae, debitis dolor dolore eaque maiores modi reiciendis repellendus sapiente sed soluta, vitae voluptas voluptate.
          </div>

          <div className="main-card__more-info">
            <div className="more-info-icon">
              <i className="material-icons">waves</i>
            </div>
            <span>More information</span>
          </div>

          <div className="main-card__verdict">
            What's Your Verdict?
          </div>
        </div>

        <div className="main-card__thumb">
          <div className="main-card__thumbup">
            <i className="material-icons md-48">thumb_up</i>
          </div>
          <div className="main-card__thumbdown ">
            <i className="material-icons md-48">thumb_down</i>
          </div>
        </div>
      </div>
    </div>
    <div className="header__closing">
      <div className="header__closing-text">
        CLOSING IN
      </div>
      <div className="header__closing-number-days">
        22
      </div>
    </div>
  </header>
);
