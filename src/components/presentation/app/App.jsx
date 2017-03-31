import React from 'react';
import { Content } from 'components';
import { HeaderContainer, CounterContainer } from 'container';
import { SlideOut } from 'presentation';

import './App.scss';

const App = () => (
  <div className="container">
    <HeaderContainer />

    <Content />
    <CounterContainer />
  </div>
);

export default App;
