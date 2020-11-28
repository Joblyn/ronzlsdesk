import * as ActionTypes from '../../actions/Types';
import { updateSubscription } from '../initialState';

const adminUpdateSubscriptionReducer = (state = updateSubscription, action) => {
  switch (action.type) {
    case ActionTypes.ADMIN_UPDATE_CLIENT_SUBSRCIPTION:
      return action.payload;
    default:
      return state;
  }
};

export default adminUpdateSubscriptionReducer;