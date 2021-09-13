import expect from 'expect';
import { displayNotificationDrawer, hideNotificationDrawer, login, loginRequest, logout } from './uiActionCreators';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from './uiActionTypes';
import fetchMock from 'fetch-mock';
import configStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import data from '../../dist/login-success.json';

const middleware = [thunk];
const mockStore = configStore(middleware);

describe('Create actions for the UI', () => {
  it('test login action', () => {
    const result = { type: LOGIN, user: { email: 'Joe@gmail.com', password: '12345' } };
    expect(login('Joe@gmail.com', '12345')).toEqual(result);
  })

  it('test logout action', () => {
    const result = { type: LOGOUT };
    expect(logout()).toEqual(result);
  })

  it('test displayNotificationDrawer action', () => {
    const result = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(displayNotificationDrawer()).toEqual(result);
  })

  it('test hideNotificationDrawer action', () => {
    const result = { type: HIDE_NOTIFICATION_DRAWER };
    expect(hideNotificationDrawer()).toEqual(result);
  })

  // it('test loginRequest action', () => {
  //   const store = mockStore({});

  //   fetchMock.get(data, '{}');
  //   return store
  //     .dispatch(loginRequest('Joe@gmail.com', '12345'))
  //     .then(() => {
  //       const obj1 = { type: LOGIN, user: { email: 'Joe@gmail.com', password:'12345' } };
  //       const result1 = store.getActions()[0];
  //       const obj2 = { type: LOGIN_SUCCESS };
  //       const result2 = store.getActions()[1];

  //       expect(loginRequest(obj1, result1)).toEqual(true);
  //       expect(loginRequest(obj2, result2)).toEqual(true);
  //     });
  // })
})
