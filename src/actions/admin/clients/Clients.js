import * as ActionType from '../../Types';
import { getDataWithToken, postDataWithToken, postData } from '../../Services';

const onGetClient = payload => {
  return {
    type: ActionType.ADMIN_GET_CLIENT_SUCCESS,
    payload: payload,
  };
};

const onGetClientDetails = payload => {
  return {
    type: ActionType.ADMIN_GET_CLIENT_DETAILS_SUCCESS,
    payload: payload,
  };
};

const onUpdateClientSubscription = payload => {
  return {
    type: ActionType.ADMIN_UPDATE_CLIENT_SUBSRCIPTION,
    payload
  }
}

const onGetAllDocuments = payload => {
  return {
    type: ActionType.ADMIN_GET_ALL_DOCUMENTS,
    payload
  }
}
// const onLogin = payload => {
//   return {
//     type: ActionType.ADMIN_LOGIN_SUCCESS,
//     payload,
//   };
// };

// export const setCurrentAdminUser = decoded => {
//   return {
//     type: ActionType.SET_CURRENT_ADMIN_USER,
//     payload: decoded,
//   };
// };

// export const onForgotPassword = payload => {
//   return {
//     type: ActionType.ADMIN_FORGOT_PASSWORD_SUCCESS,
//     payload,
//   };
// };

export const getClient = url => {
  return getDataWithToken(url, onGetClient);
};

export const getClientDetails = url => {
  return getDataWithToken(url, onGetClientDetails);
};

export const updateClientSubscription = (url, payload) => {
  return postDataWithToken(url, payload, onUpdateClientSubscription);
}

export const getAllDocuments = (url) => {
  return getDataWithToken(url, onGetAllDocuments)
}
// export const login = (url, payload) => {
//   return postData(url, payload, onLogin);
// };

// export const forgotPassword = (url, payload) => {
//   return postData(url, payload, onForgotPassword);
// };
