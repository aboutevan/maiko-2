import React from 'react';
import { NavOverlay, Header } from 'presentation';

// import './LayoutMain.sass';

const LayoutMain = props => (
  <div className="layout-main">
    <Header />
    <NavOverlay />
    <main className="layout-main__content">
      {props.children}
    </main>
  </div>
);

LayoutMain.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default LayoutMain;
