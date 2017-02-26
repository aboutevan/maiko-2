import React from 'react';
import { Header, SlideOut, Content } from 'components';
import './App.scss';

const App = () => (
  <div className="container">
    <Header />
    <SlideOut />
    <Content />
  </div>
);

export default App;
