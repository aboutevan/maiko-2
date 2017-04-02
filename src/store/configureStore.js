import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(history) {
  // Build the middleware for intercepting and dispatching navigation actions
  const middleware = [routerMiddleware(history)];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return createStore(rootReducer, applyMiddleware(...middleware));
}
