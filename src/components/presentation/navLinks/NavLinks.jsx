import React from 'react';
import { Link } from 'react-router';
import { RoutesConfig } from 'config';

const NavLinks = () => (
  <ul className="nav-overlay__links">
    {
      RoutesConfig.map(item => (
        <li className="nav-overlay__link-item" key={item.path}>
          <Link to={item.path}>
            <p>{item.name}</p>
          </Link>
        </li>
      ))
    }
  </ul>
);

export default NavLinks;
