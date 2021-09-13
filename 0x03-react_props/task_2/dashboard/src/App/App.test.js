import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('Test App renders', () => {
  it('renders without crashing', () => {
    expect(shallow(<App />).exists());
  })

  it('renders 4 components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).to.have.length(1);
    expect(wrapper.find('Header')).to.have.length(1);
    expect(wrapper.find('Login')).to.have.length(1);
    expect(wrapper.find('Footer')).to.have.length(1);
  })
})
