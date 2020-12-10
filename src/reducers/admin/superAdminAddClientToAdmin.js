import * as ActionTypes from '../../actions/Types';
import { addClientToAdmin } from '../initialState';

const superAdminAddClientToAdminReducer = (state = addClientToAdmin, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CLIENT_TO_ADMIN:
      return {
        isSuccessful:true,
        result: action.payload
      };
    default:
      return state;
  }
};

export default superAdminAddClientToAdminReducer;