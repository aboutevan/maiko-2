// import axios from 'axios';
import { FETCH_TUMBLR, ROOT_URL } from './constants';
import isLoading from '../LoadingContainer/actions';
import fetchJsonp from 'fetch-jsonp';

export function tumblrSuccess(data) {
  return {
    type: FETCH_TUMBLR,
    payload: data,
  };
}

export function fetchTumblr(limit = 20, offset) {
  return (dispatch) => {
    dispatch(isLoading());
    // axios.defaults.withCredentials = false;

    // const config = {
    //   responseType: 'jsonp',
    // }

    fetchJsonp(`${ROOT_URL}&limit=${limit}&offset=${offset}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        dispatch(tumblrSuccess(res));
        return res;
      })
      .then(() => dispatch(isLoading()));
  };
}
