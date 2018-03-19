import TournamentApi from '../api/tournamentApi';
import * as types from './actionTypes';

export function loadTournamentListSuccess(tournaments) {
  return { type: types.LOAD_TOURNAMENTLIST_SUCCESS, tournaments };
}

export function loadTournamentListFail(error) {
  return { type: types.LOAD_TOURNAMENTLIST_FAILURE, error };
}

export function loadTournamentList() {
  return dispatch => {
    return TournamentApi.listTournaments().then(tournaments => {
      dispatch(loadTournamentListSuccess(tournaments));
    }).catch(error => {
      dispatch(loadTournamentListFail(error));
    });
  };
}

export function loadTournamentSuccess(tournament) {
  return { type: types.LOAD_TOURNAMENT_SUCCESS, tournament };
}

export function loadTournamentFail(error) {
  return { type: types.LOAD_TOURNAMENT_FAILURE, error };
}

export function loadTournament(id) {
  return dispatch => {
    return TournamentApi.getTournament(id).then(tournament => {
      dispatch(loadTournamentSuccess(tournament));
    }).catch(error => {
      dispatch(loadTournamentFail(error));
    });
  };
}

export function updateMatchSuccess() {
  return { type: types.UPDATE_MATCH_SUCCESS };
}

export function updateMatchFail(error) {
  return { type: types.UPDATE_MATCH_FAILURE, error };
}

export function updateMatch(tid, rid, mid, match) {
  return function (dispatch, getState) {
    return TournamentApi.updateMatch(tid, rid, mid, match).then(() => {
      dispatch(updateMatchSuccess());
    }).catch(error => {
      dispatch(updateMatchFail(error));
    });
  };
}

export function updateRoundSuccess() {
  return { type: types.UPDATE_ROUND_SUCCESS };
}

export function updateRoundFail(error) {
  return { type: types.UPDATE_ROUND_FAILURE, error };
}

export function updateRound(tid, rid, round) {
  return function (dispatch, getState) {
    return TournamentApi.updateRound(tid, rid, round).then(() => {
      dispatch(updateRoundSuccess());
    }).catch(error => {
      dispatch(updateRoundFail(error));
    });
  };
}