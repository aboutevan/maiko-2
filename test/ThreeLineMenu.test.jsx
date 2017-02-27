import React from 'react';
import { shallow } from 'enzyme';
import { ThreeLineMenu } from 'presentation';

describe('ThreeLineMenu', () => {
  it('renders', () => {
    const element = shallow(<ThreeLineMenu />);
    expect(element).toBeTruthy();
  });

  // it('should contain an image', () => {
  //   const element = shallow(<ThreeLineMenu />);
  //   expect(element.find('img').length).toBeGreaterThan(0);
  // })
});