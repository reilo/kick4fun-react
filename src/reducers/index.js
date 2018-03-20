import { combineReducers } from 'redux';
import tournaments from './tournamentsReducer';
import tournament from './tournamentReducer';
import ligaSummary from './kickerligaReducer';
import players from './playersReducer';
import templates from './templatesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  ligaSummary,
  players,
  tournaments,
  tournament,
  templates,
  ajaxCallsInProgress
});

export default rootReducer;