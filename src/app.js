import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import { Login} from './pages/login';
import { PastTrials } from './pages/past-trials';
import { HowItWorks } from './pages/how-it-works';

import { Footer } from './components/footer';
import { Header } from './components/header';

import { PATHS } from './constants';

import './app.scss'

export const App = () => {
  return (
    <Router>
      <Header />
      <section className="content">
        <Switch>
          <Route exact path={PATHS.LOGIN}>
            <Login />
          </Route>
          <Route exact path={PATHS.PAST_TRIALS}>
            <PastTrials />
          </Route>
          <Route exact path={PATHS.HOW_IT_WORKS}>
            <HowItWorks />
          </Route>
          <Route path="*" render={() => <Redirect to={PATHS.PAST_TRIALS} />} />
        </Switch>
      </section>
      <Footer />
    </Router>
  );
};
