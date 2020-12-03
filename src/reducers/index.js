import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import adminRegisterReducer from './admin/adminRegister';
import adminLoginReducer from './admin/adminLogin';
import adminForgotPasswordReducer from './admin/adminForgotPassword';
import adminGetAllClient from './admin/getClientsReducer';
import adminUpdateSubscriptionReducer from './admin/adminUpdateSubscription'
import adminDataReducer from './admin/getAdminData';
import getAllDocumentsReducer from './admin/adminGetAllDocuments';
import getAllRequestsReducer from './admin/adminGetAllRequests';
// import adminGetClientDetails from './admin/getClientDetailsReducer';

import userRegisterReducer from './user/userRegister';
import userLoginReducer from './user/userLogin';
import userForgotPasswordReducer from './user/userForgotPassword';
import userDataReducer from './user/getUserData';
import userCreatedRequestReducer from './user/createRequest';
import userUploadDocReducer from './user/uploadDoc';
import userGetRequestsReducer from './user/getRequests';
import userGetDocumentsSentByAdminReducer from './user/getDocumentSentByAdmin'; 
import userGetDocumentsSentByUserReducer from './user/getDocumentSentByUser';

export default combineReducers({
  //Admin Reducer
  adminRegisterAuth: adminRegisterReducer,
  adminLoginAuth: adminLoginReducer,
  adminForgotPassword: adminForgotPasswordReducer,
  adminGetAllClient: adminGetAllClient,
  adminData: adminDataReducer,
  adminUpdateSubscription: adminUpdateSubscriptionReducer,
  getAllDocuments: getAllDocumentsReducer,
  getAllRequests: getAllRequestsReducer,
  userGetRequests:userGetRequestsReducer, 
  // adminGetClientDetails: adminGetClientDetails,
  
  //user Reducer
  userRegisterauth: userRegisterReducer,
  userLoginAuth: userLoginReducer,
  userForgotPasswordReducer: userForgotPasswordReducer,
  userData: userDataReducer,
  userCreatedRequest:userCreatedRequestReducer,
  userUploadDoc:userUploadDocReducer,
  userGetDocumentsSentByAdmin:userGetDocumentsSentByAdminReducer,
  userGetDocumentsSentByUser:userGetDocumentsSentByUserReducer,
  //Error
  errors: errorReducer,
});