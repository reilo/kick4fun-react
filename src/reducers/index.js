import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import tournaments from './tournamentsReducer';
import tournament from './tournamentReducer';
import ligaSummary from './kickerligaReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ligaSummary,
  tournaments,
  tournament
});

export default rootReducer;