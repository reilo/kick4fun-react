import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import { tournament } from './tournamentReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  tournament
});

export default rootReducer;