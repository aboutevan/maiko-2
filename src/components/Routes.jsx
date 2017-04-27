import React from 'react';
// import { Route, IndexRoute } from 'react-router';
// import { RouteTransition } from 'react-router-transition';
import { CSSTransitionGroup } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';
import { PageHome, PageAbout, PageStudioShots } from 'page';
import { RoutesConfig } from 'config';


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

const PageTransition = ({component: Component, ...rest}) => (
  // ({match}) => (
  //       <RouteTransition
  //           pathname={`${location.pathname}`}
  //           atEnter={{ opacity: 0, translateY: 75 }}
  //           atLeave={{ opacity: 0, translateY: 75 }}
  //           atActive={{ opacity: 1, translateY: 0 }}
  //           mapStyles={styles => (
  //             {
  //               position: (styles.opacity === 1) ? undefined : 'absolute',
  //               width: (styles.opacity === 1) ? undefined : '100%',
  //               height: (styles.opacity === 1) ? undefined : '100%',
  //               opacity: styles.opacity,
  //               transform: `translateY(${styles.translateY}px)`,
  //             }
  //           )}>
  //           {match && <PageHome />}
  //       </RouteTransition>
  // )
  <Route {...rest} render={props => (
      <CSSTransitionGroup
        key={Date.now()}
        transitionName="example"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}>
        <Component {...props} key={234324}/>
      </CSSTransitionGroup>
    )}
  />
);

const Routes = () => {
  return (
    <div>
      {
        RoutesConfig.map((route, index) => {
          console.log(index + location.pathname)
          if (route.path === '/') {
            return (
              <CSSTransitionGroup
                key={`css${route.path}`}
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={5000}
                transitionEnterTimeout={2000}
                transitionLeaveTimeout={2000}
              >
                <Route key={location.pathname} exact path={route.path} component={route.component} />
              </CSSTransitionGroup>
            );
          }

          return (
            <CSSTransitionGroup
              key={`css${route.path}`}
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={5000}
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={2000}
            >
              <Route key={`${index + location.pathname}`} path={route.path} component={route.component} />
            </CSSTransitionGroup>
          );

        })
      }
    </div>
  );
};

// const Routes = () => (
//   <div>
//     <Route exact path={routesObj.home.path} component={PageHome}  />
//     <Route exact path={routesObj.about.path} component={PageAbout}  />
//     <Route exact path={routesObj.studioShots.path} component={PageStudioShots}  />
//   </div>
// );

export default Routes;
