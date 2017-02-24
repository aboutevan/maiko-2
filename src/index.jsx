import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';

// import 'font-awesome/scss/font-awesome.scss';
require('./components/header/Header.scss');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

import {Root} from  'components';

render(
    <AppContainer >
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('react-root')
);

const orgError = console.error; // eslint-disable-line no-console
   console.error = (message) => { // eslint-disable-line no-console
     if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
       // Log the error as normally
       orgError.apply(console, [message]);
     }
   };

  module.hot.accept(Root, () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = Root;

    render(
      <AppContainer errorReporter={Redbox}>
        <NextApp store={store} history={history} />
      </AppContainer>,
      document.getElementById('react-root')
    );
  });