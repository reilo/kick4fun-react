import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './store';
import * as config from './appConfig';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import { loadLigaSummary } from './actions/kickerligaActions';
import { loadTournament, loadTournamentList } from './actions/tournamentActions';

import './styles/styles.css';
import '../node_modules/foundation-sites/dist/css/foundation.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadLigaSummary());
store.dispatch(loadTournamentList());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);