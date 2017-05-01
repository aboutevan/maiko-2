import axios from 'axios';
import { FETCH_TUMBLR, ROOT_URL } from './constants';
import isLoading from '../LoadingContainer/actions';

export function tumblrSuccess(data) {
  return {
    type: FETCH_TUMBLR,
    payload: data,
  };
}

export function fetchTumblr(limit = 3, offset) {
  return (dispatch) => {
    dispatch(isLoading());

    axios.get(`${ROOT_URL}&limit=${limit}&offset=${offset}`)
      .then((res) => {
        dispatch(tumblrSuccess(res.data));
        return res;
      })
      .then(() => dispatch(isLoading()));
  };
}
