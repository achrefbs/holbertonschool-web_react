import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./uiActionTypes"
import data from '../../dist/login-success.json';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: {
      email, 
      password
    }
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

// export const loginRequest = (email, password) => {
//   return (dispatch) => {
//     dispatch(login(email, password));
//     return fetch(data)
//     .then(res => res.json())
//     .then(result => dispatch(loginSuccess()))
//     .catch(error => dispatch(loginFailure()));
//   };
// };
