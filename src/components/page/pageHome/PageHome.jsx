import React from 'react';
import { LayoutMain } from 'layout';
import { CounterContainer } from 'container';

const PageHome = () => (
  <LayoutMain>
    <div className="page-about main-row">
      <h2>Home Page</h2>
      <CounterContainer />
    </div>
  </LayoutMain>
);

export default PageHome;
