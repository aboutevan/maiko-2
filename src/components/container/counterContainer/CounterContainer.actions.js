import { INCREMENT, DECREMENT } from './CounterContainer.constants';

export function onIncrement() {
  return {
    type: INCREMENT,
  };
}

export function onDecrement() {
  return {
    type: DECREMENT,
  };
}
