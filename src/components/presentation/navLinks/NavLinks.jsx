import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesConfig } from 'config';

const isActive = (match, location) => {
  if (!match) {
    return false;
  }
  if (match.path === location.pathname) {
    return true;
  }
  return false;
};

const NavLinks = props => (
  <div className="nav-links">
    <ul>
      {
        RoutesConfig.map(item => (
          <li className={`nav-links__item nav-links__item--${item.name}`} key={item.path}>
            <NavLink
              onClick={props.handleClick}
              isActive={isActive}
              to={item.path}
            >
              <p>{item.menuTitle}</p>
            </NavLink>
          </li>
        ))
      }
    </ul>
  </div>
);

NavLinks.propTypes = {
  handleClick: React.PropTypes.func,
};

NavLinks.defaultProps = {
  handleClick: null,
};

export default NavLinks;
