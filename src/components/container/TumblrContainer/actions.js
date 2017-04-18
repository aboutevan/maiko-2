import axios from 'axios';
import { FETCH_TUMBLR, ROOT_URL, TUMBLR_SUCCESS } from './constants';
import { IS_LOADING } from '../LoadingContainer/constants';

import { isLoading } from '../LoadingContainer/actions';

// export function isLoading(bool) {
//   return {
//     type: IS_LOADING,
//     isLoading: bool,
//   }
// }

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
        dispatch(tumblrSuccess(res.data));
        return res;
      })
      .then(res => dispatch(isLoading(false)));
  }
}