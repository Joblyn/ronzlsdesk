import * as ActionTypes from '../../actions/Types';
import { superAdminGetAllAdmins } from '../initialState';

const superAdminGetAllAdminsReducer = (state = superAdminGetAllAdmins, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_ADMINS:
      return {
        isSuccessful:true,
        admins: action.payload
      };
    default:
      return state;
  }
};

export default superAdminGetAllAdminsReducer;