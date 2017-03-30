import React from 'react';
import { ThreeLineMenu } from 'presentation';

const Header = props => (
  <header className={props.className}>
    <ThreeLineMenu {...props} />
  </header>
);

Header.propTypes = {
  className: React.PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
