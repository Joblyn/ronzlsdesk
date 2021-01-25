import * as ActionTypes from '../../actions/Types';
import { adminDeleteUser } from '../../reducers/initialState';

const adminDeleteUserReducer = (state = adminDeleteUser, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_DELETE_USER:
      return {
        isSuccessful: true,
        data: action.payload
      }
    default: 
      return state;
  } 
};

export default adminDeleteUserReducer;