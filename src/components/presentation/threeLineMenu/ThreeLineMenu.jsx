import React, { PropTypes } from 'react';
import './ThreeLineMenu.scss';

const ThreeLineMenu = props => (
  <a tabIndex="0" onClick={props.handleClick}>
    <div className="three-line-menu">
      <span className={props.className} />
    </div>
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
