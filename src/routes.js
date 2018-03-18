import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/pages/HomePage';
import LigaPage from './components/pages/LigaPage';
import EditPage from './components/pages/EditPage';
import AdminPage from './components/pages/AdminPage';
import MatchPage from './components/pages/MatchPage';
import RoundPage from './components/pages/RoundPage';
import AboutPage from './components/pages/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="liga/:tid" component={LigaPage} />
    <Route path="edit" component={EditPage} />
    <Route path="edit/:tid" component={EditPage} />
    <Route path="admin" component={AdminPage} />
    <Route path="round/:tid/:rid" component={RoundPage} />
    <Route path="match/:tid/:rid/:mid" component={MatchPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
