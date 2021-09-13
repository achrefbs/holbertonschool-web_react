import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';

describe('Test Header renders', () => {
  it('renders without crashing', () => {
    expect(shallow(<Header />).exists());
  })

  it('renders 1 img and 1 h1', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).to.have.length(1);
    expect(wrapper.find('h1')).to.have.length(1);
  })
})
