import axios from 'axios';
import { FETCH_TUMBLR, ROOT_URL } from './constants';

// export default function fetchTumblr(limit = 2, offset) {
//   const request = axios.get(`${ROOT_URL}&limit=${limit}&offset=0`);

//   return {
//     type: FETCH_TUMBLR,
//     payload: request,
//   };
// }

export default function fetchTumblr(limit = 2, offset) {
  return dispatch => (
    axios.get(`${ROOT_URL}&limit=${limit}&offset=0`)
      .then(res => dispatch({
        type: FETCH_TUMBLR,
        payload: res.data
      }))
  )
}