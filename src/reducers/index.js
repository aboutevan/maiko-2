import { routerReducer } from 'react-router-redux';
// import { LOCATION_CHANGE } from 'react-router-redux';
import { counterContainerReducer } from 'container/counterContainer/index';
import fetchTumblr from 'container/TumblrContainer/reducers';
import isLoading from 'container/LoadingContainer/reducers';
import slideTransition from 'container/SlideTransitionContainer/reducers';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  counterContainer: counterContainerReducer,
  tumblr: fetchTumblr,
  isLoading,
  slideTransition,
  router: routerReducer,
});

const rootReducer = (state, action) => { // eslint-disable-line arrow-body-style
  // if (action.type === LOCATION_CHANGE) {
  //   // reset state on route change
  //   state = undefined; // eslint-disable-line
  // }
  return appReducer(state, action);
};

export default rootReducer;
