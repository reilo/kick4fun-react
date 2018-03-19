import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tournamentsReducer(state = initialState.tournaments, action) {
  switch (action.type) {
    case types.LOAD_TOURNAMENTLIST_SUCCESS:
      return action.tournaments;
    case types.LOAD_TOURNAMENTLIST_FAILURE:
      return Object.assign({}, { error: action.error });
    default:
      return state;
  }
}
