import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function playersReducer(state = initialState.players, action) {
  switch (action.type) {
    case types.LOAD_PLAYERLIST_SUCCESS:
      return action.players;
    case types.LOAD_PLAYERLIST_FAILURE:
      return Object.assign({}, { error: action.error });
    default:
      return state;
  }
}
