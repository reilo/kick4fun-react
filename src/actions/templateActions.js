import TemplateApi from '../api/templateApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadTemplateListSuccess(templates) {
  return { type: types.LOAD_TEMPLATELIST_SUCCESS, templates };
}

export function loadTemplateList() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return TemplateApi.listTemplates().then(templates => {
      dispatch(loadTemplateListSuccess(templates));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}