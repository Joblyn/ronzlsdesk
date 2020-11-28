import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import adminRegisterReducer from './admin/adminRegister';
import adminLoginReducer from './admin/adminLogin';
import adminForgotPasswordReducer from './admin/adminForgotPassword';
import adminGetAllClient from './admin/getClientsReducer';
import adminDataReducer from './admin/getAdminData';
// import adminGetClientDetails from './admin/getClientDetailsReducer';

import userRegisterReducer from './user/userRegister';
import userLoginReducer from './user/userLogin';
import userForgotPasswordReducer from './user/userForgotPassword';

export default combineReducers({
  //Admin Reducer
  adminRegisterAuth: adminRegisterReducer,
  adminLoginAuth: adminLoginReducer,
  adminForgotPassword: adminForgotPasswordReducer,
  adminGetAllClient: adminGetAllClient,
  adminData: adminDataReducer,
  // adminGetClientDetails: adminGetClientDetails,
  
  //user Reducer
  userRegisterauth: userRegisterReducer,
  userLoginAuth: userLoginReducer,
  userForgotPasswordReducer: userForgotPasswordReducer,

  //Error
  errors: errorReducer,
});
