import React from 'react';
import { Header, Content } from 'components';
import { SlideOut } from 'presentation';
import Counter from 'presentation/counter/Counter';


import './App.scss';

const App = () => (
  <div className="container">
    <Header />
    <SlideOut />
    <Content />
    <Counter />
  </div>
);

export default App;
