import React from 'react';
import { LayoutMain } from 'layout';
import { HeroCanvas } from 'presentation';

const PageHome = () => (
  <LayoutMain>
    <div className="page-home main-row">

      <div className="page-home__hero">
        <HeroCanvas />
      </div>
      <div className="page-home__content">
      </div>
    </div>
  </LayoutMain>
);

export default PageHome;
