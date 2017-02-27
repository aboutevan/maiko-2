import React from 'react';
import { Header, Content } from 'components';
import { SlideOut } from 'presentation';
import './App.scss';

const App = () => (
  <div className="container">
    <Header />
    <SlideOut />
    <Content />
  </div>
);

export default App;
