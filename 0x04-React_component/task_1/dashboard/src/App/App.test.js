import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

describe('Test App renders', () => {
  let events = {}

  beforeEach(() => {
    events = {};
    document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });
  })

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

  it('Check CourseList is not displayed (isLoggedIn=false)', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).to.have.length(0);
  })

  it('Check Login and CourseList are included (isLoggedIn=true)', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).to.have.length(0);
    expect(wrapper.find(CourseList)).to.have.length(1);
  })
})
