/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import {
  Dashboard,
  NotFound,
  Details
} from '../../Pages';
import {
  Header,
  Sidebar,
} from '../../Components';
import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';
import Routes from '../../Global/Routes';
import './style.css';
const MainComponent = () => (
  <Layout>
    <Header />
    <Layout>
      <Sidebar />
      <Layout.Content className="px-5 py-4">
        <Switch>
          <Route path={Routes.home} exact><Redirect to={Routes.dashboard} /></Route>
          <Route path={Routes.dashboard} component={Dashboard} exact />
          <Route path={Routes.details} component={Details} exact />
          <Redirect to={Routes.notFound} />
        </Switch>
      </Layout.Content>
    </Layout>
  </Layout>
);
const Router = () => (
  <Switch>
    <Route path={Routes.notFound} component={NotFound} exact />
    <PrivateRoute path={Routes.home} component={MainComponent} />
  </Switch>
);
export default Router;