import * as ActionTypes from '../../actions/Types';
import { adminData } from '../initialState';

const adminDataReducer = (state = adminData, action) => {
  switch (action.type) {
    case ActionTypes.GET_ADMIN_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default adminDataReducer;