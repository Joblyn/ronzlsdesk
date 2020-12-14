import * as ActionTypes from '../../actions/Types';
import { adminGetAppointments } from '../initialState';

const adminGetAppointmentsReducer = (state = adminGetAppointments, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_GET_APPOINTMENTS:
      return {
        isSuccessful:true,
        appointments: action.payload
      };
    default:
      return state;
  }
};

export default adminGetAppointmentsReducer;