import { FETCH_TUMBLR } from './constants';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TUMBLR:
      console.log(action.payload.response.posts);
      return [action.payload.response.posts, ...state];
    default:
      return state;
  }
}
