import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import adminRegisterReducer from './admin/adminRegister';
import adminLoginReducer from './admin/adminLogin';
import adminForgotPasswordReducer from './admin/adminForgotPassword';
import adminResetPasswordReducer from './admin/resetPassword';
import adminGetAllClient from './admin/getClientsReducer';
import adminUpdateSubscriptionReducer from './admin/adminUpdateSubscription';
import adminDataReducer from './admin/getAdminData';
import getAllDocumentsReducer from './admin/adminGetAllDocuments';
import getAllRequestsReducer from './admin/adminGetAllRequests';
import getClientsForAdminReducer from './admin/getClientsForAdmin';
import adminGetSentDocumentsReducer from './admin/getSentDocuments';
import adminGetReceivedDocumentsReducer from './admin/getReceivedDocuments';
import adminUploadDocToClientReducer from './admin/uploadDoc';
import adminConfirmAppointmentReducer from './admin/confirmAppointment';
import adminGetAppointmentsReducer from './admin/getAppoinments';
import superAdminGetAllAdminsReducer from './admin/superAdminGetAllAdmins';
import superAdminAddClientToAdminReducer from './admin/superAdminAddClientToAdmin';
import setAdminClientsReducer from './admin/setAdminClients';
import adminRegisterNewUserReducer from './admin/adminRegisterUser';
import adminDeleteUserReducer from './admin/adminDeleteUser';
import adminEditUserDataReducer from './admin/adminEditUserData';
import adminResetForgotPasswordReducer from './admin/adminResetForgotPassword';
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
import userBookAppointmentReducer from './user/userBookAppointment';
import userGetAppointmentsReducer from './user/getAppointments';
import updateDataReducer from './user/updateData';
import userResetPasswordReducer from './user/resetPassword';
import resetForgotPasswordReducer from './user/resetForgotPassword';

export default combineReducers({
  //Admin Reducer
  adminRegisterAuth: adminRegisterReducer,
  adminLoginAuth: adminLoginReducer,
  adminForgotPassword: adminForgotPasswordReducer,
  adminResetPassword:adminResetPasswordReducer,
  adminGetAllClient: adminGetAllClient,
  adminData: adminDataReducer,
  adminUpdateSubscription: adminUpdateSubscriptionReducer,
  getAllDocuments: getAllDocumentsReducer,
  getAllRequests: getAllRequestsReducer,
  getClientsForAdmin:getClientsForAdminReducer,
  adminGetSentDocuments:adminGetSentDocumentsReducer,
  adminGetReceivedDocuments:adminGetReceivedDocumentsReducer,
  adminUploadDocToClient:adminUploadDocToClientReducer,
  adminConfirmAppointment:adminConfirmAppointmentReducer,
  adminGetAppointments:adminGetAppointmentsReducer,
  superAdminGetAllAdmins:superAdminGetAllAdminsReducer,
  superAdminAddClientToAdmin:superAdminAddClientToAdminReducer,
  adminClients:setAdminClientsReducer,  
  adminRegisterNewUser:adminRegisterNewUserReducer,
  adminDeleteUser:adminDeleteUserReducer,
  adminEditUserData:adminEditUserDataReducer,
  adminResetForgotPassword:adminResetForgotPasswordReducer,
  // adminGetClientDetails: adminGetClientDetails,
  
  //user Reducer
  userRegisterauth: userRegisterReducer,
  userLoginAuth: userLoginReducer,
  userForgotPassword: userForgotPasswordReducer,
  userData: userDataReducer,
  userCreatedRequest:userCreatedRequestReducer,
  userGetRequests:userGetRequestsReducer, 
  userUploadDoc:userUploadDocReducer,
  userGetDocumentsSentByAdmin:userGetDocumentsSentByAdminReducer,
  userGetDocumentsSentByUser:userGetDocumentsSentByUserReducer,
  userBookAppointment:userBookAppointmentReducer,
  userGetAppointments:userGetAppointmentsReducer,
  updateData: updateDataReducer,
  userResetPassword:userResetPasswordReducer,
  resetForgotPassword: resetForgotPasswordReducer,
  //Error
  errors: errorReducer,
});