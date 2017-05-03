import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesConfig } from 'config';

const NavLinks = props => (
  <div className="nav-links">
    <ul>
      {
        RoutesConfig.map(item => (
          <li className={`nav-links__item nav-links__item--${item.name}`} key={item.path}>
            <Link onClick={props.handleClick} to={item.path}>
              <p>{item.menuTitle}</p>
            </Link>
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
