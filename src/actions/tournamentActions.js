import TournamentApi from '../api/tournamentApi';
import * as types from './actionTypes';

export function loadTournamentListSuccess(tournaments) {
  return { type: types.LOAD_TOURNAMENTLIST_SUCCESS, tournaments };
}

export function loadTournamentList() {
  return dispatch => {
    return TournamentApi.listTournaments().then(tournaments => {
      dispatch(loadTournamentListSuccess(tournaments));
    }).catch(error => {
      throw (error);
    });
  };
}

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