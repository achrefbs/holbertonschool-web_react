import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import CourseList from './CourseList'
import CourseListRow from './CourseListRow'

describe('renders CourseList components', () => {
  it('renders without crashing', () => {
    expect(shallow(<CourseList />).exists());
  })

  it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).to.have.length(5);
  })
})
