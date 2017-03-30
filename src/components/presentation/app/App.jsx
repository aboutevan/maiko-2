import React from 'react';
import { Header, Content } from 'components';
import { HeaderContainer, CounterContainer } from 'container';
import { SlideOut } from 'presentation';

import './App.scss';

const App = () => (
  <div className="container">
    {/* <Header />
        <SlideOut />
        <Content /> */}
    <HeaderContainer />
        <SlideOut />
        <Content />
    <CounterContainer />
    <h1>hello</h1>
  </div>
);

export default App;
