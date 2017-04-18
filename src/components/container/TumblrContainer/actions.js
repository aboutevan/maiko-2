import axios from 'axios';
import { FETCH_TUMBLR, ROOT_URL, IS_LOADING, TUMBLR_SUCCESS } from './constants';

// export default function fetchTumblr(limit = 2, offset) {
//   const request = axios.get(`${ROOT_URL}&limit=${limit}&offset=0`);

//   return {
//     type: FETCH_TUMBLR,
//     payload: request,
//   };
// }

export function isLoading(bool) {
  return {
    type: IS_LOADING,
    isLoading: bool,
  }
}

export function tumblrSuccess(data) {
  return {
    type: FETCH_TUMBLR,
    payload: data
  }
}

export  function fetchTumblr(limit = 2, offset) {
  return dispatch => {
    dispatch(isLoading(true));

    axios.get(`${ROOT_URL}&limit=${limit}&offset=${offset}`)
      .then(res => {
        dispatch(isLoading(false));
        return res;
      })
      .then(res => dispatch(tumblrSuccess(res.data)))
  }
}