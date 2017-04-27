import React from 'react';
import { Header } from 'presentation';

// import './LayoutMain.sass';

const LayoutMain = props => (
  <div className="layout-main">
    <Header />
    <div className="layout-main__overlay">
      <h1>FOREVER THIS IS A TEST</h1>
    </div>
    <main className="layout-main__content">
      {props.children}
    </main>
  </div>
);

LayoutMain.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default LayoutMain;
