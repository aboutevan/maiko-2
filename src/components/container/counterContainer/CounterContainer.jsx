import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from 'presentation/counter/Counter';
import * as actions from './CounterContainer.actions';

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
    { ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
