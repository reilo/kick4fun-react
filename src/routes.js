import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/pages/HomePage';
import LigaPage from './components/pages/LigaPage';
import MatchPage from './components/pages/MatchPage';
//import RoundPage from './components/pages/RoundPage';
import AboutPage from './components/pages/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="liga" component={LigaPage} />
    <Route path="match/:tid/:rid/:mid" component={MatchPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
