import React, { PropTypes } from 'react';

const Counter = ({
  value,
  onIncrement,
  onDecrement,
}) => (
  <div>
    <h1>{value}</h1>
    <button className="Counter__increment" onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
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
