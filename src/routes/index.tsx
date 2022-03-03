import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import { RootState } from '../store';
import { getUsers } from '../store/users/actions';
import { Home, Login } from '../views';

const Routes: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const authUser = useSelector((state: RootState) => state.auth.authUser);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {authUser && <Header />}
      <Switch>
        {!authUser ? (
          <Route path="*" render={() => <Login />} />
        ) : (
          [<Route exact path="/" key="/" render={() => <Home />} />]
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
