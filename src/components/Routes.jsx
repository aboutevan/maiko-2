import React from 'react';
// import { Route, IndexRoute } from 'react-router';
// import { RouteTransition } from 'react-router-transition';
import { CSSTransitionGroup } from 'react-transition-group';
import { Route } from 'react-router-dom';
// import { PageHome, PageAbout, PageStudioShots } from 'page';
import { RoutesConfig } from 'config';
import { LayoutMain } from 'layout';

const Routes = (props) => (
  <div>
    <LayoutMain>

      {RoutesConfig.map(route => (
        <Route exact path={route.path} key={route.path}>
          {({ match }) => (
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
              >
              {match && route.component}
            </CSSTransitionGroup>
          )}
        </Route>
      ))}
    </LayoutMain>
  </div>
);

export default Routes;
