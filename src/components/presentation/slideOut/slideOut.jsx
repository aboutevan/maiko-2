import React from 'react';
import { Link } from 'react-router';
import { SidebarMenu } from 'config';
import './SlideOut.scss';

const SlideOut = () => (
  <nav>
    <ul>
      {
        SidebarMenu.map(item => (
          <li key={item.url}>
            <Link to={item.url}>
              <p>{item.name}</p>
              <i className={item.icon} />
            </Link>
          </li>
        ))
      }
    </ul>
  </nav>
);

export default SlideOut;
