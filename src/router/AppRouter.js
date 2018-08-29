import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

// public and private routes
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// components
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import DashboardPage from "../components/DashboardPage";
import Page404 from "../components/Page404";

const history = createHistory();

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute exact path='/' component={LoginPage} />
            <PrivateRoute path='/dashboard' component={DashboardPage}/>
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  };
} 

export default AppRouter;