import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import Root from './components/root/Root';
import configureStore from './store/configureStore';
// import { push } from 'react-router-redux';

require('./components/presentation/index.sass');

// Create history (using browserHistory)
const history = createHistory()

// Pass history to store for react-router/react-router-redux alpha
const store = configureStore(history);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

// render app
render(
  <AppContainer >
    <Root store={store} history={history}/>
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  //
  // source: https://github.com/nicksp/redux-webpack-es6-boilerplate
  // Warning from React Router, caused by react-hot-loader.
  // The warning can be safely ignored, so filter it from the console.
  // Otherwise you'll see it every time something changes.
  // See https://github.com/gaearon/react-hot-loader/issues/298
  //
  const orgError = console.error; // eslint-disable-line no-console
  console.error = (message) => { // eslint-disable-line no-console
    if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
      // Log the error as normally
      orgError.apply(console, [message]);
    }
  };

  module.hot.accept('components/root/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    // const NextApp = require('components/root/Root').default;

    render(
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}