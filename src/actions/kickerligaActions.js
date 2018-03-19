import KickerligaApi from '../api/kickerligaApi';
import * as types from './actionTypes';

export function loadLigaSummarySuccess(ligaSummary) {
  return { type: types.LOAD_LIGASUMMARY_SUCCESS, ligaSummary };
}

export function loadLigaSummaryFail(error) {
  return { type: types.LOAD_LIGASUMMARY_FAILURE, error };
}

export function loadLigaSummary() {
  return dispatch => {
    return KickerligaApi.getLigaSummary().then(ligaSummary => {
      dispatch(loadLigaSummarySuccess(ligaSummary));
    }).catch(error => {
      dispatch(loadLigaSummaryFail(error));
    });
  };
}

export function loadPlayerListSuccess(players) {
  return { type: types.LOAD_PLAYERLIST_SUCCESS, players };
}

export function loadPlayerListFail(error) {
  return { type: types.LOAD_PLAYERLIST_FAILURE, error };
}

export function loadPlayerList() {
  return dispatch => {
    return KickerligaApi.listPlayers().then(players => {
      dispatch(loadPlayerListSuccess(players));
    }).catch(error => {
      dispatch(loadPlayerListFail(error));
    });
  };
}