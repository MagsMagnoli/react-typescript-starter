import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './core/dashboard/Dashboard';
import NotFound from './core/not-found/NotFound';

// top level routing for the application
function AppRouting() {
  return (
    <Switch>
      <Route path="/404">
        <NotFound />
      </Route>
      <Route path="/" component={Dashboard} />
    </Switch>
  );
}

export default AppRouting;
