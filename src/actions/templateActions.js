import TemplateApi from '../api/templateApi';
import * as types from './actionTypes';

export function loadTemplateListSuccess(templates) {
  return { type: types.LOAD_TEMPLATELIST_SUCCESS, templates };
}

export function loadTemplateListFail(error) {
  return { type: types.LOAD_TEMPLATELIST_FAILURE, error };
}

export function loadTemplateList() {
  return dispatch => {
    return TemplateApi.listTemplates().then(templates => {
      dispatch(loadTemplateListSuccess(templates));
    }).catch(error => {
      dispatch(loadTemplateListFail(error));
    });
  };
}