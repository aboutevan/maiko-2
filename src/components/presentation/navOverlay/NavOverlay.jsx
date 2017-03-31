import React from 'react';
import { NavLinks } from 'presentation';

const NavOverlay = props => (
  <nav className={`nav-overlay ${props.className}`}>
    <div className="nav-overlay__links">
      <NavLinks />
    </div>
  </nav>
);

export default NavOverlay;
