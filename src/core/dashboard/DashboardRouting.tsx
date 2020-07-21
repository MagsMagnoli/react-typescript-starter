import Home from 'features/home/Home';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Routing to each of the feature entry points for logged in users
function DashboardRouting() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <Redirect to={'/404'} />
      </Route>
    </Switch>
  );
}

export default DashboardRouting;
