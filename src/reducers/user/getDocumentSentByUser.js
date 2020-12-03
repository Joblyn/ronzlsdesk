import * as ActionTypes from '../../actions/Types';
import { userGetDocumentsSentByUser} from '../initialState';

const userGetDocumentsSentByUserReducer = (state = userGetDocumentsSentByUser, action) => {
  switch (action.type) {
    case ActionTypes.USER_GET_DOCUMENT_SENT_BY_USER:
      return {
        isSuccessful: true,
        documents: action.payload
      }
    default:
      return state;
  }
};

export default userGetDocumentsSentByUserReducer;