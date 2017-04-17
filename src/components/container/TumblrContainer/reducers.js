import { FETCH_TUMBLR, IS_LOADING } from './constants';

export function isLoading(state = false, action) {
  switch (action.type) {
    case IS_LOADING:
    console.log('FIRED', state)
      return action.isLoading;
    default:
      return state;
  }
}

export function fetchTumblr(state = [], action) {
  switch (action.type) {
    case FETCH_TUMBLR:
      return [action.payload.response, ...state];
    default:
      return state;
  }
}
