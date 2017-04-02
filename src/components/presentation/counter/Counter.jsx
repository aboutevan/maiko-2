import React, { PropTypes } from 'react';

const Counter = ({
  value,
  onIncrement,
  onDecrement,
}) => (
  <div className="counter">
    <h1>{value}</h1>
    <button className="counter__increment" onClick={onDecrement}>-</button>
    <button className="counter__increment" onClick={onIncrement}>+</button>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

Counter.defaultProps = {
  onIncrement: () => {},
  onDecrement: () => {},
};

export default Counter;
