import * as ActionTypes from '../../actions/Types';
import { register } from '../initialState';

const adminRegisterReducer = (state = register, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_REGISTER:
      return { ...state, isLoading: true };
    case ActionTypes.ADMIN_REGISTER_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isLaoding: false,
        isSuccessful: true,
      };
    case ActionTypes.ADMIN_REGISTER_FAIL:
      return { ...state, errror: action.payload, isLoading: false };
    case ActionTypes.ADMIN_REGISTER_CLEANUP:
      return { ...state, error: null, isLoading: false };
    default:
      return state;
  }
};

export default adminRegisterReducer;
