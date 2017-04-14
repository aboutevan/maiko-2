import FETCH_TUMBLR from './constants';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TUMBLR:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
