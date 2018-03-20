import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function templatesReducer(state = initialState.templates, action) {
  switch (action.type) {
    case types.LOAD_TEMPLATELIST_SUCCESS:
      return action.templates;
    default:
      return state;
  }
}
