import * as ActionType from '../Types';
import setAuthToken from '../../utils/setAuthToken';
import { 
  postData,
  getDataWithToken
} from '../Services';

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

export const onGetUser = (payload) => {
  return {
    type: ActionType.GET_USER_DATA,
    payload
  }
}

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
  localStorage.clear();
  //remove auth header for feature request
  setAuthToken(false);
  window.location.href = '/';
};

// get User Data 
export const getUser = (url) =>  {
  return getDataWithToken(url, onGetUser)
}