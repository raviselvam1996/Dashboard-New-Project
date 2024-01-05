// Routes.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginComponent from '../LoginComponent/loginComponent';
import Dashboard from '../DashboardComponent/dashboard';

const Routes = () => {
  return (
    <Switch>
         <Route path="/" component={LoginComponent} />
      <Route path="/dashboard" component={Dashboard} />
      {/* Additional routes can be added here */}
    </Switch>
  );
};

export default Routes;
