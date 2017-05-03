import { FETCH_TUMBLR } from './constants';

export default function fetchTumblr(state = [], action) {
  switch (action.type) {
    case FETCH_TUMBLR:
      console.log(action.payload.response)
      return [action.payload.response, ...state];
    default:
      return state;
  }
}
