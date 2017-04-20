import IS_LOADING from './constants';

export default function isLoading(bool) {
  return {
    type: IS_LOADING,
    isLoading: bool,
  };
}
