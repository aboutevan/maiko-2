import { FETCH_TUMBLR, IS_LOADING } from './constants';

export function isLoading(state = false, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function fetchTumblr(state = [], action) {
  switch (action.type) {
    case FETCH_TUMBLR:
      console.log('FROM REDUCER: ', action.payload.response);
      return [action.payload.response, ...state];
    default:
      return state;
  }
}
