import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import liga from './ligaReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  liga
});

export default rootReducer;