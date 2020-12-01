import * as ActionTypes from '../../actions/Types';
import { userCreatedRequest } from '../initialState';

const userCreatedRequestReducer = (state = userCreatedRequest, action) => {
  switch (action.type) {
    case ActionTypes.USER_CREATE_REQUEST:
      return {
        isSuccessful: true,
        request: action.payload
      }
    default:
      return state;
  }
};

export default userCreatedRequestReducer;