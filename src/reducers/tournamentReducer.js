import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tournamentReducer(state = initialState.tournament, action) {
  switch (action.type) {
    case types.LOAD_TOURNAMENT_SUCCESS:
      return action.tournament;
    case types.CREATE_TOURNAMENT_SUCCESS:
      return state;
    case types.UPDATE_MATCH_SUCCESS:
      return state;
    case types.UPDATE_ROUND_SUCCESS:
      return state;
    default:
      return state;
  }
}
