import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tournamentReducer(state = initialState.tournament, action) {
  switch (action.type) {
    case types.LOAD_TOURNAMENT_SUCCESS:
      return action.tournament;
    case types.LOAD_TOURNAMENT_FAILURE:
      return Object.assign({}, { error: action.error });
    case types.UPDATE_MATCH_SUCCESS:
      return action.tournament;
    case types.UPDATE_MATCH_FAILURE:
      return Object.assign({}, { error: action.error });
    case types.UPDATE_ROUND_SUCCESS:
      return action.tournament;
    case types.UPDATE_ROUND_FAILURE:
      return Object.assign({}, { error: action.error });
    default:
      return state;
  }
}
