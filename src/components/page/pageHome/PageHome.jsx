import React from 'react';
import { LayoutMain } from 'layout';
import { CounterContainer } from 'container';

const PageHome = () => (
  <LayoutMain>
    <div className="page-home row">
      <div>
        <h2>Home Page</h2>
        <CounterContainer />
      </div>
    </div>
  </LayoutMain>
);

export default PageHome;
