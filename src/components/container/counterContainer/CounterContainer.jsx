import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from 'presentation/counter/Counter';
import { onIncrement, onDecrement } from './CounterContainer.actions';

const CounterContainer = props => (
  <Counter {...props} />
);

function mapStateToProps(state) {
  return {
    value: state.counterContainer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onIncrement,
      onDecrement,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
