import * as ActionTypes from '../../actions/Types';
import { forgotPassword } from '../initialState';

const adminForgotPasswordReducer = (state = forgotPassword, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_FORGOT_PASSWORD:
      return { ...state, isLoading: true };
    case ActionTypes.ADMIN_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isLaoding: false,
        isSuccessful: true,
      };
    case ActionTypes.ADMIN_FORGOT_PASSWORD_FAIL:
      return { ...state, errror: action.payload, isLoading: false };
    case ActionTypes.ADMIN_FORGOT_PASSWORD_CLEANUP:
      return { ...state, error: null, isLoading: false };
    default:
      return state;
  }
};

export default adminForgotPasswordReducer;
