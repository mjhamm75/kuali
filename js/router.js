import Router from 'react-router';
import React from 'react';
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var starships = require('./components/starships.js');
var starship = require('./components/starship.js');
var pilot = require('./components/pilot.js');
var app = require('./components/app.js');

var routes = (
  <Route name="app" path="/" handler={app}>
    <Route name="starships" handler={starships} />
    <Route name="starship" handler={starship} />
    <Route name="pilot" handler={pilot} />
    <DefaultRoute handler={starships} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});