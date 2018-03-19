import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ligaSummaryReducer(state = initialState.ligaSummary, action) {
  switch (action.type) {
    case types.LOAD_LIGASUMMARY_SUCCESS:
      return action.ligaSummary;
    case types.LOAD_LIGASUMMARY_FAILURE:
      return Object.assign({}, { error: action.error });
    default:
      return state;
  }
}
