import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './store';
import * as config from './appConfig';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadLigaSummary, loadPlayerList } from './actions/kickerligaActions';
import { loadTournament, loadTournamentList } from './actions/tournamentActions';
import { loadTemplateList } from './actions/templateActions';
import toastr from 'toastr';

import './styles/styles.css';
import '../node_modules/foundation-sites/dist/css/foundation.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadLigaSummary()).catch(error => { toastr.error(error); });
store.dispatch(loadPlayerList()).catch(error => { toastr.error(error); });
store.dispatch(loadTournamentList()).catch(error => { toastr.error(error); });
store.dispatch(loadTemplateList()).catch(error => { toastr.error(error); });

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);