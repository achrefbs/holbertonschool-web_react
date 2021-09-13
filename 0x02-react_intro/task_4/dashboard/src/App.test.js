import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';


describe('Test App renders', () => {
  it('renders without crashing', () => {
    expect(shallow(<App />).exists());
  })

  it('renders App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header.App-header')).to.have.length(1);
  })

  it('renders App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('body.App-body')).to.have.length(1);
  })

  it('renders App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('footer.App-footer')).to.have.length(1);
  })
})
