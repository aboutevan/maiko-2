import { routerReducer } from 'react-router-redux';
import { counterContainerReducer } from 'container/counterContainer/index';
import { fetchTumblr } from 'container/TumblrContainer/reducers';
import { isLoading } from 'container/LoadingContainer/reducers';
import { combineReducers } from 'redux';

// const navOverlayReducer = (state = false, action) => {
//   switch (action.type) {
//     case types.TOGGLE_NAV:
//       return action.isVisible;
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  // navOverlayReducer,
  counterContainer: counterContainerReducer,
  TumblrContainer: fetchTumblr,
  isLoading,
  router: routerReducer,
});

export default rootReducer;
