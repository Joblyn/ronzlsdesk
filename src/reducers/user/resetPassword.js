import * as ActionTypes from '../../actions/Types';
import { resetPassword } from '../initialState';

const userResetPasswordReducer = (state = resetPassword, action) => {
  switch(action.type) {
    case ActionTypes.USER_RESET_PASSWORD:
      return {
        isSuccessful: true,
        data: action.payload
      }
    default: 
      return state;
  }
}

export default userResetPasswordReducer;