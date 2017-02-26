import React, { PropTypes } from 'react';
import './ThreeLineMenu.scss';

const ThreeLineMenu = props => (
  <div className="three-line-menu">
    <span className={props.className} />
    <div />
  </div>
);

ThreeLineMenu.propTypes = {
  className: PropTypes.string,
};

ThreeLineMenu.defaultProps = {
  className: '',
};

export default ThreeLineMenu;
