import React from 'react';
import { Link } from 'react-router';
import { NavLinksConfig } from 'config';

const NavLinks = () => (
  <ul className="nav-overlay__links">
    {
      NavLinksConfig.map(item => (
        <li className="nav-overlay__link-item" key={item.url}>
          <Link to={item.url}>
            <p>{item.name}</p>
          </Link>
        </li>
      ))
    }
  </ul>
);

export default NavLinks;
