import * as ActionTypes from '../../actions/Types';
import { getUserData } from '../initialState';

const userDataReducer = (state = getUserData, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_DATA:
      return {
        isSuccessful: true,
        data: action.payload
      }
    default:
      return state;
  }
};

export default userDataReducer;