import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getUsers } from '../store/users/actions';
import { Login } from '../views';

const Routes: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Login />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
