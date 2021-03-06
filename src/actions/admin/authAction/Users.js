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

export const logOutAction = (payload) => {
  window.localStorage.clear();
  setAuthToken(false);
  return {
    type: ActionType.SET_CURRENT_ADMIN_USER,
    payload
  }
};

export const onForgotPassword = payload => {
  return {
    type: ActionType.ADMIN_FORGOT_PASSWORD_SUCCESS,
    payload
  };
};

export const onResetPassword = payload => {
  return { 
    type: ActionType.ADMIN_RESET_PASSWORD,
    payload
  }
}

// get admin data
export const onGetAdminData = payload => {
  return {
    type: ActionType.GET_ADMIN_DATA,
    payload,
  }
}

// get all admins 
export const onGetAllAdmins = payload => {
  return {
    type: ActionType.GET_ALL_ADMINS,
    payload,
  }
}

// add client to admin 
export const onSuperAdminAddClientToAdmin = payload => {
  return {
    type: ActionType.ADD_CLIENT_TO_ADMIN,
    payload
  }
}

export const onResetForgotPassword = payload => {
  return {
    type: ActionType.ADMIN_RESET_FORGOT_PASSWORD,
    payload
  }
}

export const register = (url, payload) => {
  return postDataWithToken(url, payload, onRegister);
};

export const login = (url, payload) => {
  return postData(url, payload, onLogin);
};

export const forgotPassword = (url, payload) => {
  return postData(url, payload, onForgotPassword);
};

export const resetForgotPassword = (url, payload) => {
  return postData(url,payload, onResetForgotPassword)
}

export const resetPassword = (url, payload) => {
  return postDataWithToken(url, payload, onResetPassword);
}

// edit
export const getAdminData = (url) => {
  return getDataWithToken(url, onGetAdminData);
}

export const getAllAdmins = (url) => {
  return getDataWithToken(url, onGetAllAdmins)
}

export const superAdminAddClientToAdmin = (url, payload) => {
  return postDataWithToken(url, payload, onSuperAdminAddClientToAdmin)
} 
