import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'
import { getLatestNotification } from '../utils/utils'

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
    expect(wrapper.find(NotificationItem).first().html()).to.equal('<li>No new notification for now</li>');
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

  it('verify that Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
    const wrapper1 = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper1.find(NotificationItem)).to.have.length(1);
    const wrapper2 = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper2.find(NotificationItem)).to.have.length(1);
  })

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: {__html: getLatestNotification()} },
  ];

  it('verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).exists());
    expect(wrapper.find(NotificationItem)).to.have.length(3);
  })

  it('verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem).first().html()).to.equal('<li>No new notification for now</li>');
  })
})
