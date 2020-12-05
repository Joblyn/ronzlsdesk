import * as ActionTypes from '../../actions/Types';
import { adminGetReceivedDocuments } from '../initialState';

const adminGetReceivedDocumentsReducer = (state = adminGetReceivedDocuments, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_GET_DOCUMENTS_RECEIVED:
      return {
        isSuccessful:true,
        documents: action.payload
      };
    default:
      return state;
  }
};

export default adminGetReceivedDocumentsReducer;