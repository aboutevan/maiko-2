import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Route } from 'react-router-dom';
import { RoutesConfig } from 'config';
import { LayoutMain } from 'layout';

const Routes = () => (
  <div>
    <LayoutMain>
      {RoutesConfig.map(route => (
        <Route exact path={route.path} key={route.path}>
          {({ match }) => (
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
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
