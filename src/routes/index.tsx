import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../views';

const Routes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Login />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
