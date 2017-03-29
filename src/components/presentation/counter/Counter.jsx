import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onIncrement, onDecrement } from './Counter.actions';

const Counter = ({
  value,
  increment,
  decrement,
}) => (
  <div>
    <h1>{value}</h1>
    <button className="Counter__increment" onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

Counter.defaultProps = {
  increment: () => {},
  decrement: () => {},
};

function mapStateToProps(state) {
  return {
    value: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      increment: onIncrement,
      decrement: onDecrement,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
