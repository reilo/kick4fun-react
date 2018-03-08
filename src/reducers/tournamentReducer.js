import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tournamentReducer(state = initialState.tournament, action) {
  switch (action.type) {
   case types.LOAD_TOURNAMENT_SUCCESS:
      return action.tournament;
    default:
      return state;
  }
}
