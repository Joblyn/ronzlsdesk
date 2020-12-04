import * as ActionTypes from '../../actions/Types';
import { userBookAppointment } from '../initialState';

const userBookAppointmentReducer = (state = userBookAppointment, action) => {
  switch (action.type) {
    case ActionTypes.USER_BOOK_APPOINTMENT:
      return {
        isSuccessful: true,
        result: action.payload
      }
    default:
      return state;
  }
};

export default userBookAppointmentReducer;