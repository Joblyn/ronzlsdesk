import * as ActionTypes from '../../actions/Types';
import { adminResetForgotPassword } from '../initialState';

const adminResetForgotPasswordReducer = (state = adminResetForgotPassword, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_RESET_FORGOT_PASSWORD: 
      return {
        isSuccessful: true,
        data: action.payload
      }
    default: 
      return state;
  }
};

export default adminResetForgotPasswordReducer;