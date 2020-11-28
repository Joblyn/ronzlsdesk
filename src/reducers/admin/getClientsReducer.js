import * as ActionTypes from '../../actions/Types';
import { getAllClient } from '../initialState';

const getClientReducer = (state = getAllClient, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_GET_CLIENT:
      return { ...state, isLoading: true, isSuccessful: false };
    case ActionTypes.ADMIN_GET_CLIENT_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        users: action.payload,
        isLaoding: false,
      };
    case ActionTypes.ADMIN_GET_CLIENT_DETAILS_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        isLaoding: false,
        user: action.payload,
      };
    case ActionTypes.ADMIN_GET_CLIENT_FAIL:
      return {
        ...state,
        errror: action.payload,
        isLoading: false,
        isSuccessful: false,
      };
    case ActionTypes.ADMIN_GET_CLIENT_CLEANUP:
      return { ...state, error: null, isLoading: false };
    default:
      return state;
  }
};

export default getClientReducer;
