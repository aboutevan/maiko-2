import React from 'react';
import { LayoutMain } from 'layout';
import { CounterContainer } from 'container';
import { HeroCanvas } from 'presentation';

const PageHome = () => (
  <LayoutMain>
    <HeroCanvas />
    <div className="page-about main-row">
    </div>
  </LayoutMain>
);

export default PageHome;
