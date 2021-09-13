import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';


describe('Test App renders', () => {
  it('renders without crashing', () => {
    expect(shallow(<App />).exists());
  })
})
