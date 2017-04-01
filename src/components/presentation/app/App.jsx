import React from 'react';


import './App.scss';

const App = props => (
  <div className="app">
    { props.children }
  </div>
);

App.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default App;
