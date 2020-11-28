import * as ActionTypes from '../../actions/Types';
import { login } from '../initialState';

const adminLoginReducer = (state = login, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_LOGIN:
      return { ...state, isLoading: true };
    case ActionTypes.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isLaoding: false,
        isSuccessful: true,
      };
    case ActionTypes.ADMIN_LOGIN_FAIL:
      return { ...state, errror: action.payload, isLoading: false };
    case ActionTypes.ADMIN_LOGIN_CLEANUP:
      return { ...state, error: null, isLoading: false };
    default:
      return state;
  }
};

export default adminLoginReducer;
