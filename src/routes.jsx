import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App } from 'presentation';
import { PageHome, PageAbout } from 'page';
import { RoutesConfig } from 'config';


// const getRouteByName = (name) => {
//   return RoutesConfig
//     .filter(route => route.name === name)[0];
// }

// create routes obj
const routes = {};

// push RouteConfigs to routes obj
// any route obj in RouteConfigs
// automatically available in routes obj
// i.e. routes: { home: homeRouteObj, about: aboutRouteObj }
RoutesConfig.map(route => (
  routes[route.name] = route
));

export default (
  <Route path={routes.home.path} component={App}>
    <IndexRoute component={PageHome} />
    <Route path={routes.about.path} component={PageAbout} />
  </Route>
);
