import * as ActionType from '../../Types';
import setAuthToken from '../../../utils/setAuthToken';
import { postData, getData, postDataWithToken } from '../../Services';

const onRegisterUser = payload => {
  return {
    type: ActionType.USER_REGISTER_SUCCESS,
    payload,
  };
};

const onLoginUser = payload => {
  return {
    type: ActionType.USER_LOGIN_SUCCESS,
    payload,
  };
};

export const setCurrentUser = decoded => {
  return {
    type: ActionType.SET_CURRENT_USER_USER,
    payload: decoded,
  };
};

export const onForgotPasswordUser = payload => {
  return {
    type: ActionType.USER_FORGOT_PASSWORD_SUCCESS,
    payload,
  };
};

// const onAllUsers = payload => {
//   return {
//     type: ActionType.GET_USERS,
//     payload,
//   };
// };

export const registerUser = (url, payload) => {
  return postData(url, payload, onRegisterUser);
};

export const loginUser = (url, payload) => {
  return postData(url, payload, onLoginUser);
};

export const forgotPasswordUser = (url, payload) => {
  return postData(url, payload, onForgotPasswordUser);
};

export const logOutAction = () => {
  localStorage.removeItem('jwtToken');
  // localStorage.removeItem('role');
  // localStorage.clear('jwtToken');
  // localStorage.clear('role');
  localStorage.clear();
  //remove auth header for feature request
  setAuthToken(false);
  window.location.href = '/';
};

// export const logoutUSERAction = () => dispatch => {
//   //remove token from local storage
//   localStorage.removeItem('jwtToken');
//   localStorage.removeItem('role');
//   //remove auth header for feature request
//   setAuthToken(false);
//   //set current user to {} which will set isAuthenticated to false
//   dispatch(setCurrentUSERUser({}));
// };

// export const getAllUser = url => {
//   return getData(url, onAllUsers);
// };
