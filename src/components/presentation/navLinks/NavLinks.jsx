import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesConfig } from 'config';

const NavLinks = props => (
  <ul className="nav-overlay__links">
    {
      RoutesConfig.map(item => (
        <li className="nav-overlay__link-item" key={item.path}>
          <Link onClick={props.handleClick} to={item.path}>
            <p>{item.menuTitle}</p>
          </Link>
        </li>
      ))
    }
  </ul>
);

NavLinks.propTypes = {
  handleClick: React.PropTypes.func,
};

NavLinks.defaultProps = {
  handleClick: null,
};

export default NavLinks;
