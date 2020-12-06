import * as ActionTypes from '../../actions/Types';
import { adminUploadDocToClient } from '../initialState';

const adminUploadDocToClientReducer = (state = adminUploadDocToClient, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_UPLOAD_DOC:
      return { 
        ...state,
        isSuccessful: true,
        result: action.payload
      };
    default:
      return state;
  }
};

export default adminUploadDocToClientReducer;