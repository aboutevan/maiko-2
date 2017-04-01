import React from 'react';
import { HeaderContainer } from 'container';

import './LayoutMain.sass';

const LayoutMain = props => (
  <div className="layout-main">
    <HeaderContainer />
    <div className="layout-main__content">
      {props.children}
    </div>
  </div>
);

LayoutMain.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default LayoutMain;
