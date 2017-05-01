import React from 'react';
import { Header } from 'presentation';
import { SlideTransitionContainer } from 'container';

// import './LayoutMain.sass';

const LayoutMain = props => (
  <div className="layout-main">
    <Header />
    <SlideTransitionContainer />
    <main className="layout-main__content">
      {props.children}
    </main>
  </div>
);

LayoutMain.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default LayoutMain;
