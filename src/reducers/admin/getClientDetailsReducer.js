import * as ActionTypes from '../../actions/Types';
import { getClientDetails } from '../initialState';

const getClientDetailsReducer = (state = getClientDetails, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_GET_CLIENT_DETAILS:
      return { ...state, isLoading: true, isSuccessful: false };
    case ActionTypes.ADMIN_GET_CLIENT_DETAILS_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        user: action.payload,
        isLaoding: false,
      };
    case ActionTypes.ADMIN_GET_CLIENT_DETAILS_FAIL:
      return {
        ...state,
        errror: action.payload,
        isLoading: false,
        isSuccessful: false,
      };
    case ActionTypes.ADMIN_GET_CLIENT_DETAILS_CLEANUP:
      return { ...state, error: null, isLoading: false };
    default:
      return state;
  }
};

export default getClientDetailsReducer;
