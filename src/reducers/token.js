import * as ActionTypes from '../actions/Types';
import { token } from './initialState';

export default function tokenReducer(state = token, action ) {
  switch (action) {
    case ActionTypes.SET_CURRENT_ADMIN_USER:
      return {
        token: action.payload
      }
    default: 
    return state
  }
}