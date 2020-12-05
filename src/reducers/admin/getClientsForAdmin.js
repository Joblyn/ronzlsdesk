import * as ActionTypes from '../../actions/Types';
import { adminGetClients } from '../initialState';

const getClientsForAdminReducer = (state = adminGetClients, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_GET_CLIENTS:
      return {
        isSuccessful:true,
        clients: action.payload
      };
    default:
      return state;
  }
};

export default getClientsForAdminReducer;