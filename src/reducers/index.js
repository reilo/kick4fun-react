import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import tournaments from './tournamentsReducer';
import tournament from './tournamentReducer';
import ligaSummary from './kickerligaReducer';
import players from './playersReducer';
import templates from './templatesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ligaSummary,
  players,
  tournaments,
  tournament,
  templates,
  ajaxCallsInProgress
});

export default rootReducer;