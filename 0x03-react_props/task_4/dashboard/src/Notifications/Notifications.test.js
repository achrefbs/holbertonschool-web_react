import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'

describe('Test Notifications renders', () => {
  it('renders without crashing', () => {
    expect(shallow(<Notifications />).exists);
  })

  it('renders component items from NotificationItem', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.find('li')).to.have.length(1);
  })

  it('renders text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const p = wrapper.find('p');
    expect(p.text()).to.equal('Here is the list of notifications');
  })

  it('renders the right html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).first().html()).to.equal('<li data-notification-type="default">New course available</li>');
  })

  it('Check menu item is being displayed when (displayDraw=false)', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.menuItem')).to.have.length(1);
  })

  it('Check div.Notifications is not being displayed when (displayDraw=false)', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('div.Notifications')).to.have.length(0);
  })

  it('Check menu item is being displayed when (displayDraw=true)', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).to.have.length(1);
  })

  it('Check div.Notifications is being displayed when (displayDraw=true)', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications')).to.have.length(1);
  })
})
