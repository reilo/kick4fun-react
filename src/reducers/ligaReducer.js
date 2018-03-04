import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ligaReducer(state = {}, action) {
  switch (action.type) {
    case types.LOAD_LIGA_SUCCESS:
      return action.liga;

    default:
      return state;
  }
}