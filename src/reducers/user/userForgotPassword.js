import * as ActionTypes from '../../actions/Types';
import { forgotPassword } from '../initialState';

const userForgotPasswordReducer = (state = forgotPassword, action) => {
  switch (action.type) {
    case ActionTypes.USER_FORGOT_PASSWORD:
      return { ...state, isLoading: true };
    case ActionTypes.USER_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isLaoding: false,
        isSuccessful: true,
      };
    case ActionTypes.USER_FORGOT_PASSWORD_FAIL:
      return { ...state, errror: action.payload, isLoading: false };
    case ActionTypes.USER_FORGOT_PASSWORD_CLEANUP:
      return { ...state, error: null, isLoading: false };
    default:
      return state;
  }
};

export default userForgotPasswordReducer;
