import { useHistory } from 'react-router-dom';
import * as ActionType from '../Types';
import setAuthToken from '../../utils/setAuthToken';
import { 
  postData,
  getDataWithToken,
  postDataWithToken
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

export const onCreateRequest = (payload) => {
  return {
    type: ActionType.USER_CREATE_REQUEST,
    payload
  }
}

export const onGetRequests = (payload) => {
  return { 
    type: ActionType.USER_GET_REQUESTS,
    payload
  }
}

export const onUploadDoc = (payload) => {
  return {
    type: ActionType.USER_UPLOAD_DOC,
    payload 
  }
}

export const onGetDocumentSentByAdmin = (payload) => {
  return {
    type: ActionType.USER_GET_DOCUMENT_SENT_BY_ADMIN,
    payload
  }
}

export const onGetDocumentSentByUser = (payload) => {
  return {
    type: ActionType.USER_GET_DOCUMENT_SENT_BY_USER,
    payload
  }
}

export const onBookAppointment = (payload) => {
  return {
    type: ActionType.USER_BOOK_APPOINTMENT,
    payload
  }
}

export const onGetAppointments = (payload) => {
  return {
    type: ActionType.USER_GET_APPOINTMENTS,
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
  window.localStorage.clear();
  setAuthToken(false);
};

// get User Data 
export const getUser = (url) =>  {
  return getDataWithToken(url, onGetUser)
}

// upload request 
export const createRequest = (url, payload) => {
  return postDataWithToken(url, payload, onCreateRequest);
} 

// get requests 
export const getRequests = (url) => {
  return getDataWithToken(url, onGetRequests);
}

// upload Doc 
export const uploadDoc = (url, payload) => {
  return postDataWithToken(url, payload, onUploadDoc)
}

// get documents sent by admin
export const getDocumentSentByAdmin = (url) => {
  return getDataWithToken(url, onGetDocumentSentByAdmin)
}
// get documents sent by user 
export const getDocumentSentByUser = (url) => {
  return getDataWithToken(url, onGetDocumentSentByUser)
}

// book appointment with admin 
export const bookAppointment = (url, payload) => {
  return postDataWithToken(url, payload, onBookAppointment)
}

// get appointments 
export const getAppointments = (url) => {
  return getDataWithToken(url, onGetAppointments)
}