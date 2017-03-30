import TOGGLE_SIDEBAR from './constants';

const toggleSidebar = isVisible => (
  {
    type: TOGGLE_SIDEBAR,
    isVisible,
  }
);

export default toggleSidebar;
