import { IS_LOADING } from './constants';

export function isLoading(bool) {
  return {
    type: IS_LOADING,
    isLoading: bool,
  }
}
