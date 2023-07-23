import React from 'react';
import { Route, Switch } from 'react-router';

export default (
  <Switch>
    <Route path={'/'} />
    <Route path={'/ott'} />
	<Route path={'/life'} />
	<Route path={'/book'} />
	<Route path={'/food'} />
	<Route path={'/others'} />
  </Switch>
);