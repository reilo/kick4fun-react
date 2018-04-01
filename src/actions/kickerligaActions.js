import KickerligaApi from '../api/kickerligaApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadLigaSummarySuccess(ligaSummary) {
  return { type: types.LOAD_LIGASUMMARY_SUCCESS, ligaSummary };
}

export function loadLigaSummary() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return KickerligaApi.getLigaSummary().then(ligaSummary => {
      dispatch(loadLigaSummarySuccess(ligaSummary));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function loadPlayerListSuccess(players) {
  return { type: types.LOAD_PLAYERLIST_SUCCESS, players };
}

export function loadPlayerList() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return KickerligaApi.listPlayers().then(players => {
      dispatch(loadPlayerListSuccess(players));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function createPlayerSuccess(player) {
  return { type: types.CREATE_PLAYER_SUCCESS, player };
}

export function updatePlayerSuccess(player) {
  return { type: types.UPDATE_PLAYER_SUCCESS, player };
}

export function savePlayer(player, isNew) {
  return function (dispatch, getState) {
    return isNew ?
      KickerligaApi.createPlayer(player).then(newPlayer => {
        dispatch(createPlayerSuccess(newPlayer));
      }).catch(error => {
        throw (error);
      }) :
      KickerligaApi.updatePlayer(player).then(updatedPlayer => {
        dispatch(updatePlayerSuccess(updatedPlayer));
      }).catch(error => {
        throw (error);
      });
  };
}