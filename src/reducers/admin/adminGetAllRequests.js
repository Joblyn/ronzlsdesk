import * as ActionTypes from '../../actions/Types';
import { adminGetAllRequests } from '../initialState';

const getAllRequestsReducer = (state = adminGetAllRequests, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_GET_ALL_REQUESTS:
      return {
        isSuccessful:true,
        requests: action.payload
      };
    default:
      return state;
  }
};

export default getAllRequestsReducer;