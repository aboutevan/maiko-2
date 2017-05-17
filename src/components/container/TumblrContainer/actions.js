// import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import { FETCH_TUMBLR, ROOT_URL } from './constants';
import isLoading from '../LoadingContainer/actions';

export function tumblrSuccess(data) {
  return {
    type: FETCH_TUMBLR,
    payload: data,
  };
}

export function fetchTumblr(limit = 10, offset) {
  return (dispatch) => {
    dispatch(isLoading());
    // axios.defaults.withCredentials = false;

    // const config = {
    //   responseType: 'jsonp',
    // }

    fetchJsonp(`${ROOT_URL}&limit=${limit}&offset=${offset}`)
      .then(response => (
        response.json()
      ))
      .then((res) => {
        dispatch(tumblrSuccess(res));
        return res;
      })
      .then(() => dispatch(isLoading()));
  };
}
