import MatchApi from '../api/matchApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function updateMatchSuccess(match) {
  return { type: types.UPDATE_MATCH_SUCCESS };
}

export function updateMatch(tid, rid, mid, match) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return MatchApi.updateMatch(tid, rid, mid, match).then(() => {
      dispatch(updateMatchSuccess(match));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
