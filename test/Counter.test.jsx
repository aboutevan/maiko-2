import React, { Component } from 'react';
import Counter from 'presentation/counter/Counter';
import counterReducer from 'presentation/counter/Counter.reducer.js';
import { shallow } from 'enzyme';
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
    const element = shallow(
      <Counter
        value={store.getState()}
        onIncrement={()=>
          store.dispatch({
            type: 'INCREMENT'
          })
        }
        onDecrement={()=>
          store.dispatch({
            type: 'DECREMENT'
          })
        }
        />
    );
    const elementProps = element.props(); // enzyme
    console.log('HEHEH');
    // const onIncrement = element.props().onIncrement;

    expect(element).toBeTruthy();
    expect(elementProps).toBeTruthy();
    // expect(onIncrement()).toBeDefined();
  });

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
