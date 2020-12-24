import * as ActionTypes from '../../actions/Types';
import { resetPassword } from '../initialState';

const adminResetPasswordReducer = (state = resetPassword, action) => {
  switch(action.type) {
    case ActionTypes.ADMIN_RESET_PASSWORD:
      return {
        isSuccessful: true,
        data: action.payload
      }
    default: 
      return state;
  }
}

export default adminResetPasswordReducer;