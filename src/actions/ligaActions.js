import LigaApi from '../api/ligaApi';
import * as types from './actionTypes';

export function loadLigaSuccess(liga) {
  return { type: types.LOAD_LIGA_SUCCESS, liga };
}

export function loadLiga(id) {
  return dispatch => {
    return LigaApi.getLiga(id).then(liga => {
      dispatch(loadLigaSuccess(liga));
    }).catch(error => {
      throw (error);
    });
  };
}