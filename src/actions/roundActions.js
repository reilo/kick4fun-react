import RoundApi from '../api/roundApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function updateRoundSuccess(round) {
  return { type: types.UPDATE_ROUND_SUCCESS };
}

export function updateRound(tid, rid, round) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return RoundApi.updateRound(tid, rid, round).then(() => {
      dispatch(updateRoundSuccess(round));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}