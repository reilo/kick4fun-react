import * as types from '../actions/actionTypes';
import initialState from './initialState';

function tournamentReducer(state = {}, action) {
  switch (action.type) {
    case types.LOAD_TOURNAMENT_SUCCESS:
      return action.tournament;
    default:
      return state;
  }
}

export { tournamentReducer as tournament };