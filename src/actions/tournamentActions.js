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

export function updateTournamentSuccess(tournament) {
  return { type: types.UPDATE_TOURNAMENT_SUCCESS, tournament };
}

export function updateTournament(tournament) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return TournamentApi.updateTournament(tournament.id, tournament)
      .then(tournament => {
        dispatch(updateTournamentSuccess(tournament));
      }).catch(error => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}
