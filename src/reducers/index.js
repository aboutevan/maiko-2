import { routerReducer as routing } from 'react-router-redux';
import { counterContainerReducer } from 'container/counterContainer/index';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const sidebar = (state = false, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR:
      return action.isVisible;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sidebar,
  routing,
  counterContainer: counterContainerReducer,
});

export default rootReducer;
