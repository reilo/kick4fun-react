import TournamentApi from '../api/tournamentApi';
import * as types from './actionTypes';

export function loadTournamentSuccess(tournament) {
  return { type: types.LOAD_TOURNAMENT_SUCCESS, tournament };
}

export function loadTournament(id) {
  return dispatch => {
    return TournamentApi.getTournament(id).then(tournament => {
      dispatch(loadTournamentSuccess(tournament));
    }).catch(error => {
      throw (error);
    });
  };
}