import { FETCH_TUMBLR } from './constants';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TUMBLR:
      console.log(action.payload.response.total_posts);
      return [action.payload.response, ...state];
    default:
      return state;
  }
}
