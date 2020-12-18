import * as ActionTypes from '../../actions/Types';
import { userUpdateData } from '../initialState';

const updateDataReducer = (state = userUpdateData, action) => {
  switch (action.type) {
    case ActionTypes.USER_UPDATE_DATA:
      return {
        isSuccessful: true,
        data: action.payload
      }
    default:
      return state;
  }
};

export default updateDataReducer;