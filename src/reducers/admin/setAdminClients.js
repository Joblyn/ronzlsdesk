import * as ActionTypes from '../../actions/Types';
import { setAdminClients } from '../initialState';

const setAdminClientsReducer = (state = setAdminClients, action) => {
  switch (action.type) {
    case ActionTypes.SET_ADMIN_CLIENTS:
      return {
        clients: action.payload
      };
    default:
      return state;
  }
};

export default setAdminClientsReducer;