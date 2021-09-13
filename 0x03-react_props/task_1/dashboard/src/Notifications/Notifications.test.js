import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

describe('Test Notifications renders', () => {
  it('renders without crashing', () => {
    expect(shallow(<Notifications />).exists);
  })

  it('renders 3 list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).to.have.length(3);
  })

  it('renders text', () => {
    const wrapper = shallow(<Notifications />);
    const p = wrapper.find('p');
    expect(p.text()).to.equal('Here is the list of notifications');
  })
})
