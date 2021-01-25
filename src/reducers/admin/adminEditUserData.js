import * as ActionTypes from '../../actions/Types';
import { adminEditUserData } from '../../reducers/initialState';

const adminEditUserDataReducer = (state = adminEditUserData, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_EDIT_USER_DATA:
      return {
        isSuccessful: true,
        data: action.payload
      }
    default: 
      return state;
  }
};

export default adminEditUserDataReducer;