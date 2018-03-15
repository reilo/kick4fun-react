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
          <div className="cell small-12 medium-12 large-8 ">
            <h3>Über diese App</h3>
            <p>Diese App wurde mit modernsten JavaScript-Technologien wie <br/><b>ES6, Babel, React, Redux, Express</b> <br/>entwickelt.</p>
            <p>Der Quellcode ist bei Github unter den Repositories <br/><b><a
              href="https://github.com/reilo/kick4fun-express">kick4fun-express</a></b> (REST Server) und <br/><b><a
                href="https://github.com/reilo/kick4fun-react">kick4fun-react</a></b> (UI Frontend) <br/>veröffentlicht.</p>
            <p>Als Start-Vorlage diente das ebenfalls unter Github veröffentlichte Projekt <br/><b><a
              href="https://github.com/coryhouse/pluralsight-redux-starter">pluralsight-redux-starter</a></b> von Cory House.</p>
          </div>
          <div className="cell small-12 medium-12 large-8 ">
            <h4>Weiterführende Links:</h4>

            <p><a href="https://app.pluralsight.com/library/courses/react-redux-react-router-es6">Einführungs-Video bei Pluralsight</a></p>
            <p><a href="https://reactjs.org/">React</a></p>
            <p><a href="https://redux.js.org/">Redux</a></p>
            <p><a href="http://expressjs.com/de/">Express</a></p>
            <p><a href="https://babeljs.io/">Babel</a></p>
            <p><a href="http://es6-features.org/">ECMAScript6</a></p>
            <p><a href="https://webpack.js.org/">Webpack</a></p>
            
          </div>
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
