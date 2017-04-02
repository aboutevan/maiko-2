import React, { PropTypes } from 'react';

const ThreeLineMenu = props => (
  <a className="three-line-menu" tabIndex="0" onClick={props.handleClick}>
    <span className={props.className} />
  </a>
);

ThreeLineMenu.propTypes = {
  className: PropTypes.string,
  handleClick: React.PropTypes.func,
};

ThreeLineMenu.defaultProps = {
  className: '',
  handleClick: () => {},
};

export default ThreeLineMenu;
