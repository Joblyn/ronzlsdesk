import * as ActionTypes from '../../actions/Types';
import { adminRegisterNewUser } from '../../reducers/initialState';

const adminRegisterNewUserReducer = (state = adminRegisterNewUser, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_REGISTER_USER: 
      return {
        isSuccessful: true,
        data: action.payload
      };
    default: 
      return state;
  }
};

export default adminRegisterNewUserReducer;