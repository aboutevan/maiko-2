import { FETCH_TUMBLR } from './constants';

export default function (state = []. action) {
  switch (action.typs) {
    case FETCH_TUMBLR:
      console.log(action.payload.data);
      return [action.payload.data, ...state]
  }
  return state;
}