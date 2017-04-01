import React from 'react';
import { LayoutMain } from 'layout';
import { CounterContainer } from 'container';

const PageHome = () => (
  <LayoutMain>
    <div className="page-home">
      <div className="page-home__col">
        <h2>React App</h2>
        <CounterContainer />
      </div>
    </div>
  </LayoutMain>
);

export default PageHome;
