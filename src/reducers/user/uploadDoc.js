import * as ActionTypes from '../../actions/Types';
import { userUploadDoc } from '../initialState';

const userUploadDocReducer = (state = userUploadDoc, action) => {
  switch (action.type) {
    case ActionTypes.USER_UPLOAD_DOC:
      return {
        isSuccessful: true,
        data: action.payload
      }
    default:
      return state;
  }
};

export default userUploadDocReducer;