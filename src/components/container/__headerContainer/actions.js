import TOGGLE_NAV from './constants';

const toggleNav = isVisible => (
  {
    type: TOGGLE_NAV,
    isVisible,
  }
);

export default toggleNav;
