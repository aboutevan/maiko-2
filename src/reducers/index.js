import { routerReducer } from 'react-router-redux';
// import { LOCATION_CHANGE } from 'react-router';
import { counterContainerReducer } from 'container/counterContainer/index';
import { fetchTumblr } from 'container/TumblrContainer/reducers';
import isLoading from 'container/LoadingContainer/reducers';
import slideTransition from 'container/SlideTransitionContainer/reducers';
import { combineReducers } from 'redux';

// const navOverlayReducer = (state = false, action) => {
//   switch (action.type) {
//     case types.TOGGLE_NAV:
//       return action.isVisible;
//     default:
//       return state;
//   }
// };

const appReducer = combineReducers({
  counterContainer: counterContainerReducer,
  TumblrContainer: fetchTumblr,
  isLoading,
  slideTransition,
  router: routerReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === LOCATION_CHANGE) {
  //   // reset state on route change
  //   state = undefined; // eslint-disable-line
  // }
  return appReducer(state, action);
};

export default rootReducer;
