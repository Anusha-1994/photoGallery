/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Routes from '../Global/Routes';

const PublicRoute = ({
  component: Component, restricted, path, exact,
}: any) => (
  <Route
    exact={exact}
    path={path}
    render={() => (
     
        <Redirect to={Routes.home} />
      )}
  />
);

export default PublicRoute;
