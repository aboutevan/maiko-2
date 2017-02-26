import * as types from './types';

export const restTest = data => (
  {
    type: types.REST_TEST,
    data,
  }
);

export const toggleSidebar = isVisible => (
  {
    type: types.TOGGLE_SIDEBAR,
    isVisible,
  }
);
