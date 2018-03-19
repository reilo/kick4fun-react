import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';

class AboutPage extends React.Component {
  render() {
    const { tournament, actions } = this.props;
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-1 medium-2 large-3" />
          <div className="cell small-10 medium-8 large-6">
            <h3>Über diese App</h3>
            <p>Diese App wurde mit modernsten JavaScript-Technologien <br /><i>ES6, Babel, React, Redux, Express</i> <br />entwickelt.</p>
            <p>Der Quellcode ist bei Github unter den Repositories <br /><a
              href="https://github.com/reilo/kick4fun-express">kick4fun-express</a> (REST Server) und <br /><a
                href="https://github.com/reilo/kick4fun-react">kick4fun-react</a> (UI Frontend) <br />veröffentlicht.</p>
            <p>Als Start-Vorlage diente das ebenfalls unter Github veröffentlichte Projekt <br /><a
              href="https://github.com/coryhouse/pluralsight-redux-starter">pluralsight-redux-starter</a> von Cory House.</p>
            <p>Verantwortlich für diese Seiten: <a href="mailto:rloch@opentext.com?subject=Kickerliga">Reinhard Loch</a></p>
          </div>
          <div className="cell small-1 medium-2 large-3 " />
          <div className="cell small-1 medium-2 large-3 " />
          <div className="cell small-10 medium-8 large-6 ">
            <h4>Weiterführende Links:</h4>
            <p>
              <a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6">Einführungs-Video bei Pluralsight</a><br />
              <a href="https://reactjs.org/">React</a><br />
              <a href="https://redux.js.org/">Redux</a><br />
              <a href="http://expressjs.com/de/">Express</a><br />
              <a href="https://babeljs.io/">Babel</a><br />
              <a href="http://es6-features.org/">ECMAScript6</a><br />
              <a href="https://webpack.js.org/">Webpack</a><br />
            </p>
          </div>
          <div className="cell small-1 medium-2 large-3 " />
        </div>
      </div>
    );
  }
}

AboutPage.propTypes = {
  tournament: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    tournament: state.tournament
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tournamentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
