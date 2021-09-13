import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';

describe('Test Footer renders', () => {
  it('renders without crashing', () => {
    expect(shallow(<Footer />).exists());
  })

  it('renders text Copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).includes('Copyright');
  })
})
