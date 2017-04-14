import axios from 'axios';
import { FETCH_TUMBLR, ROOT_URL } from './constants';

export default function fetchTumblr() {
  const request = axios.get(ROOT_URL);

  console.log('Request:', request);

  return {
    type: FETCH_TUMBLR,
    payload: request,
  };
}
