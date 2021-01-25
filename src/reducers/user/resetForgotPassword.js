import * as ActionTypes from '../../actions/Types';
import { userResetForgotPassword } from '../initialState';

const resetForgotPasswordReducer = (state = userResetForgotPassword, action) => {
  switch(action.type) {
    case ActionTypes.USER_RESET_FORGOT_PASSWORD:
      return {
        isSuccessful: true,
        data: action.payload
      }
    default:
      return state;
  }
};

export default resetForgotPasswordReducer;