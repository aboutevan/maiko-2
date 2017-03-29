import React from 'react';
import { Header, Content } from 'components';
import { SlideOut } from 'presentation';
import CounterContainer from 'container/counterContainer/CounterContainer';


import './App.scss';

const App = () => (
  <div className="container">
    {/* <Header />
        <SlideOut />
        <Content /> */}
    <CounterContainer />
  </div>
);

export default App;
