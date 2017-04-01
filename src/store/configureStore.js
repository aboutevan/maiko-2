import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const store = (initialState) => {
  const storeArgs = [rootReducer, initialState];

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    storeArgs.push(applyMiddleware(logger));
  }

  return createStore(...storeArgs);
};

export default function configureStore(initialState) {
  return store(initialState);
}
