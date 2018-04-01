import TournamentApi from '../api/tournamentApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadTournamentListSuccess(tournaments) {
  return { type: types.LOAD_TOURNAMENTLIST_SUCCESS, tournaments };
}

export function loadTournamentList() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return TournamentApi.listTournaments().then(tournaments => {
      dispatch(loadTournamentListSuccess(tournaments));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function loadTournamentSuccess(tournament) {
  return { type: types.LOAD_TOURNAMENT_SUCCESS, tournament };
}

export function loadTournament(id) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return TournamentApi.getTournament(id).then(tournament => {
      dispatch(loadTournamentSuccess(tournament));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function createTournamentSuccess(tournament) {
  return { type: types.CREATE_TOURNAMENT_SUCCESS, tournament };  
}

export function createTournament(createInfo) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return TournamentApi.createTournament(createInfo).then(tournament => {
      dispatch(createTournamentSuccess(tournament));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function updateMatchSuccess(match) {
  return { type: types.UPDATE_MATCH_SUCCESS };
}

export function updateMatch(tid, rid, mid, match) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return TournamentApi.updateMatch(tid, rid, mid, match).then(() => {
      dispatch(updateMatchSuccess(match));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function updateRoundSuccess(round) {
  return { type: types.UPDATE_ROUND_SUCCESS };
}

export function updateRound(tid, rid, round) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return TournamentApi.updateRound(tid, rid, round).then(() => {
      dispatch(updateRoundSuccess(round));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}