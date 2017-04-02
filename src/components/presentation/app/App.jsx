import React from 'react';


import './App.scss';

const App = props => (
  <div className="app">
    <h1>HELLO</h1>
    <div>{ props.children }</div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
