import * as ActionTypes from '../../actions/Types';
import { userGetRequests } from '../initialState';

const userGetRequestsReducer = (state = userGetRequests, action) => {
  switch (action.type) {
    case ActionTypes.USER_GET_REQUESTS:
      return {
        isSuccessful: true,
        requests: action.payload
      }
    default:
      return state;
  }
};

export default userGetRequestsReducer;