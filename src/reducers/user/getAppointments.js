import * as ActionTypes from '../../actions/Types';
import { userGetAppointments } from '../initialState';

const userGetAppointmentsReducer = (state = userGetAppointments, action) => {
  switch (action.type) {
    case ActionTypes.USER_GET_APPOINTMENTS:
      return {
        isSuccessful: true,
        appointments: action.payload
      }
    default:
      return state;
  }
};

export default userGetAppointmentsReducer;