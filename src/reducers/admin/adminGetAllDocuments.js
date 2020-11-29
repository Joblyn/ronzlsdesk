import * as ActionTypes from '../../actions/Types';
import { adminGetAllDocuments } from '../initialState';

const getAllDocumentsReducer = (state = adminGetAllDocuments, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_GET_ALL_DOCUMENTS:
      return {
        isSuccessful:true,
        documents: action.payload
      };
    default:
      return state;
  }
};

export default getAllDocumentsReducer;