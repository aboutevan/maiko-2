import React from 'react';
import { ThreeLineMenu, NavOverlay } from 'presentation';

const Header = props => (
  <header className={props.className}>
    <ThreeLineMenu {...props} />
    <NavOverlay {...props}/>
  </header>
);

Header.propTypes = {
  className: React.PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
