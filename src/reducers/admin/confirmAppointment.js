import * as ActionTypes from '../../actions/Types';
import { adminConfirmAppointment } from '../initialState';

const adminConfirmAppointmentReducer = (state = adminConfirmAppointment, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_CONFRIM_APPOINTMENT:
      return { 
        isSuccessful: true,
        result: action.payload
      };
    default:
      return state;
  }
};

export default adminConfirmAppointmentReducer;