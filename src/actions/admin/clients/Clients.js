import * as ActionType from '../../Types';
import { getDataWithToken, postDataWithToken, patchDataWithToken } from '../../Services';

// superadmin-client actions
export const setAdminClients = payload => {
  return {
    type: ActionType.SET_ADMIN_CLIENTS,
    payload
  };
};

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

const onGetDocumentsSentToUser = payload => {
  return {
    type: ActionType.ADMIN_GET_DOCUMENTS_SENT,
    payload
  }
}

const onGetDocumentsReceivedFromUser = payload => {
  return {
    type: ActionType.ADMIN_GET_DOCUMENTS_RECEIVED,
    payload
  }
}

const onGetAllRequests = payload => {
  return {
    type: ActionType.ADMIN_GET_ALL_REQUESTS,
    payload
  }
}

// admin-client actions
const onAdminGetClients = payload => {
  return {
    type: ActionType.ADMIN_GET_CLIENTS,
    payload
  }
}

const onUploadDoc = (payload) => {
  return { 
    type: ActionType.ADMIN_UPLOAD_DOC,
    payload
  }
}

const onGetAppoinments =(payload) => {
  return {
    type: ActionType.ADMIN_GET_APPOINTMENTS,
    payload
  }
}

const onConfirmAppoinment = (payload) => {
  return {
    type: ActionType.ADMIN_CONFRIM_APPOINTMENT,
    payload
  }
}

// get clients under admin
export const adminGetClients = url => {
  return getDataWithToken(url, onAdminGetClients);
}
// admin get clients appointments under admin
export const getAppointments = url => {
  return getDataWithToken(url, onGetAppoinments);
}
// admin confirm client appointment 
export const confirmAppointment = (url, payload) => {
  return postDataWithToken(url, payload, onConfirmAppoinment);
}

// superadmin get all clients
export const getClient = url => {
  return getDataWithToken(url, onGetClient);
};

export const getClientDetails = url => {
  return getDataWithToken(url, onGetClientDetails);
};

export const updateClientSubscription = (url, payload) => {
  return patchDataWithToken(url, payload, onUpdateClientSubscription);
}

export const getAllDocuments = (url) => {
  return getDataWithToken(url, onGetAllDocuments)
}

export const getDocumentsSentToUser = (url) => {
  return getDataWithToken(url, onGetDocumentsSentToUser)
}

export const getDocumentsReceivedFromUser = (url) => {
  return getDataWithToken(url, onGetDocumentsReceivedFromUser)
}

export const getAllRequests = (url) => {
  return getDataWithToken(url, onGetAllRequests);
}

export const uploadDoc = (url, payload) =>{
  return postDataWithToken(url, payload, onUploadDoc)
}
