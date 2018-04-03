import PlayerApi from '../api/playerApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
 
export function loadPlayerListSuccess(players) {
  return { type: types.LOAD_PLAYERLIST_SUCCESS, players };
}

export function loadPlayerList() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return PlayerApi.listPlayers().then(players => {
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
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return isNew ?
    PlayerApi.createPlayer(player).then(newPlayer => {
        dispatch(createPlayerSuccess(newPlayer));
      }).catch(error => {
        dispatch(ajaxCallError(error));
        throw (error);
      }) :
      PlayerApi.updatePlayer(player).then(updatedPlayer => {
        dispatch(updatePlayerSuccess(updatedPlayer));
      }).catch(error => {
        dispatch(ajaxCallError(error));
        throw (error);
      });
  };
}