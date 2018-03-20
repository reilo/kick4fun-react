import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/pages/HomePage';
import ResultsPage from './components/pages/ResultsPage';
import EditResultsPage from './components/pages/EditResultsPage';
import AdminPage from './components/pages/AdminPage';
import PlaygroundPage from './components/pages/PlaygroundPage';
import MatchPage from './components/pages/MatchPage';
import RoundPage from './components/pages/RoundPage';
import AboutPage from './components/pages/AboutPage';
import SelectTemplatePage from './components/pages/SelectTemplatePage';
import CreateTournamentPage from './components/pages/CreateTournamentPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="liga/:tid" component={ResultsPage} />
    <Route path="edit/:tid" component={EditResultsPage} />
    <Route path="admin" component={AdminPage} />
    <Route path="playground" component={PlaygroundPage} />
    <Route path="round/:tid/:rid" component={RoundPage} />
    <Route path="match/:tid/:rid/:mid" component={MatchPage} />
    <Route path="templates" component={SelectTemplatePage} />
    <Route path="template/:id" component={CreateTournamentPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
