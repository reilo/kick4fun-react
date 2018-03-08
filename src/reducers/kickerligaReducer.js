import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ligaSummaryReducer(state = initialState.ligaSummary, action) {
  switch (action.type) {
   case types.LOAD_LIGASUMMARY_SUCCESS:
      return action.ligaSummary;
    default:
      return state;
  }
}
