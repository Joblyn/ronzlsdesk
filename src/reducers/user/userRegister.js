import * as ActionTypes from '../../actions/Types';
import { register } from '../initialState';

const userRegisterReducer = (state = register, action) => {
  switch (action.type) {
    case ActionTypes.USER_REGISTER:
      return { ...state, isLoading: true };
    case ActionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isLaoding: false,
        isSuccessful: true,
      };
    case ActionTypes.USER_REGISTER_FAIL:
      return { ...state, errror: action.payload, isLoading: false };
    case ActionTypes.USER_REGISTER_CLEANUP:
      return { ...state, error: null, isLoading: false };
    default:
      return state;
  }
};

export default userRegisterReducer;
