import React from 'react';
import { HeaderContainer } from 'container';

import './LayoutMain.sass';

const LayoutMain = props => (
  <div className="layout-main">
    <HeaderContainer />
    <main className="layout-main__content">
      {props.children}
    </main>
  </div>
);

LayoutMain.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default LayoutMain;
