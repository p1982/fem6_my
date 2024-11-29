import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from '../../client/home/pages/HomePage';
import { CharterPage } from '../../client/characters/pages/CharterPage';
import { NoMatch } from '../../shared/components/NoMatch';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/characters/">
        <p>Some Other Content</p>
      </Route>

      <Route path="/characters/:id">
        <CharterPage />
      </Route>

      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};
