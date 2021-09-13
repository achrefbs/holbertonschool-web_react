import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import NotificationItem from './NotificationItem'

describe('render NotificationItem component', () => {
  it('render the components without crashing', () => {
    expect(shallow(<NotificationItem />).exists());
  })

  it('renders correct type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.find('li').props()).to.have.property('data-notification-type', 'default');
    expect(wrapper.find('li').text()).to.equal('test');
  })

  it('renders correct html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).to.equal('<li><u>test</u></li>');
  })
})
