import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../../routes';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.objectOf(React.PropTypes.any).isRequired,
  history: PropTypes.objectOf(React.PropTypes.any).isRequired,
};

export default Root;
