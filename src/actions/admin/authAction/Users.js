import * as ActionType from '../../Types';
import setAuthToken from '../../../utils/setAuthToken';
import { postData, getDataWithToken, postDataWithToken } from '../../Services';

const onRegister = payload => {
  return {
    type: ActionType.ADMIN_REGISTER_SUCCESS,
    payload,
  };
};

const onLogin = payload => {
  return {
    type: ActionType.ADMIN_LOGIN_SUCCESS,
    payload,
  };
};

export const setCurrentAdminUser = decoded => {
  return {
    type: ActionType.SET_CURRENT_ADMIN_USER,
    payload: decoded,
  };
};

export const onForgotPassword = payload => {
  return {
    type: ActionType.ADMIN_FORGOT_PASSWORD_SUCCESS,
    payload,
  };
};

// edit
export const onGetAdminData = payload => {
  return {
    type: ActionType.GET_ADMIN_DATA,
    payload,
  }
}

export const register = (url, payload) => {
  return postDataWithToken(url, payload, onRegister);
};

export const login = (url, payload) => {
  return postData(url, payload, onLogin);
};

// edit
export const getAdminData = (url) => {
  return getDataWithToken(url, onGetAdminData);
}

export const forgotPassword = (url, payload) => {
  return postData(url, payload, onForgotPassword);
};

export const logOutAction = () => {
  window.localStorage.clear();
  setAuthToken(false);
};

