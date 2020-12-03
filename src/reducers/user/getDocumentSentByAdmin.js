import * as ActionTypes from '../../actions/Types';
import { userGetDocumentsSentByAdmin } from '../initialState';

const userGetDocumentsSentByAdminReducer = (state = userGetDocumentsSentByAdmin, action) => {
  switch (action.type) {
    case ActionTypes.USER_GET_DOCUMENT_SENT_BY_ADMIN:
      return {
        isSuccessful: true,
        documents: action.payload
      }
    default:
      return state;
  }
};

export default userGetDocumentsSentByAdminReducer;