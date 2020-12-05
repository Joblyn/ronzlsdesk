import * as ActionTypes from '../../actions/Types';
import { adminGetSentDocuments } from '../initialState';

const adminGetSentDocumentsReducer = (state = adminGetSentDocuments, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_GET_DOCUMENTS_SENT:
      return {
        isSuccessful:true,
        documents: action.payload
      };
    default:
      return state;
  }
};

export default adminGetSentDocumentsReducer;