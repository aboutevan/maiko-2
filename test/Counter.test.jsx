import React, { Component } from 'react';
import Counter from 'presentation/counter/Counter';
import counterReducer from 'presentation/counter/Counter.reducer.js';
import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
const store = createStore(counterReducer);

// function setup() {
//   const props = {
//     value
//   };

//   const element = shallow(<Counter {...props} />);
// }

describe('<Counter />', () => {
  it('renders', () => {
    const element = shallow(<Counter />);
    expect(element).toBeTruthy();
  });

  it('should have an initial value of 0', () => {
    const element = mount(
      <Counter
        value={store.getState()}
      />
    );
    expect(element.props().value).toBe(0);
    expect(element.props().value).not.toBe(3);
  });

  it('should increment value on click', () => {
    const element = mount(
      <Counter
        value={store.getState()}
        onIncrement={() =>
          store.dispatch({
            type: 'INCREMENT'
          })
        }
      />
    );
    element.find('.Counter__increment').simulate('click');
    console.log(element.props().value);
    expect(element.props().value).toBeGreaterThan(0);
  });

  // it('renders', () => {
  //   const element = mount( // for full DOM render and props
  //     <Counter
  //       value={store.getState()}
  //       onIncrement={()=>
  //         store.dispatch({
  //           type: 'INCREMENT'
  //         })
  //       }
  //       onDecrement={()=>
  //         store.dispatch({
  //           type: 'DECREMENT'
  //         })
  //       }
  //       />
  //   );
  //   const elementProps = element.props(); // enzyme
  //   console.log(elementProps);
  //   const onIncrement = element.props().onIncrement;

  //   expect(element).toBeTruthy();
  //   expect(elementProps).toBeTruthy();
  //   expect(onIncrement()).toBeDefined();
  // });

  // it('should allow props', () => {
  //   const element = shallow(
  //     <Counter
  //       value={store.getState()}
  //       onIncrement={()=>
  //         store.dispatch({
  //           type: 'INCREMENT'
  //         })
  //       }
  //       onDecrement={()=>
  //         store.dispatch({
  //           type: 'DECREMENT'
  //         })
  //       }
  //       />
  //   );
  //   expect(element.)
  // })
});
