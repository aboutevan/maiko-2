import React from 'react';
// import { Route, IndexRoute } from 'react-router';
// import { RouteTransition } from 'react-router-transition';
import { CSSTransitionGroup } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';
import { PageHome, PageAbout, PageStudioShots } from 'page';
import { RoutesConfig } from 'config';
import { LayoutMain } from 'layout';

// const getRouteByName = (name) => {
//   return RoutesConfig
//     .filter(route => route.name === name)[0];
// }

// create routes obj
const routesObj = {};

// push RouteConfigs to routes obj
// any route obj in RouteConfigs
// automatically available in routes obj
// i.e. routes: { home: homeRouteObj, about: aboutRouteObj }
RoutesConfig.map(route => (
  routesObj[route.name] = route
));

const Routes = () => (
  <div>
    <LayoutMain>
      {RoutesConfig.map(route => (
        <CSSTransitionGroup
            key={route.path}
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={5000}
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={2000}
          >
            <Route exact path={route.path} key={location.pathname} component={route.component} />
        </CSSTransitionGroup>
      ))}
    </LayoutMain>
  </div>
);

export default Routes;
