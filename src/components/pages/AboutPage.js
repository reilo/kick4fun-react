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
          <div className="cell small-12 medium-12 large-12 ">
            <h1>About</h1>
            <p>This application uses React, Redux, React Router and a variety of other helpful...</p>
            <p>{tournament.name}</p>
          </div>
          <div className="cell small-4 medium-3 large-2 ">
            <div className="callout">
              <h4 className="success label">Callout</h4>
            </div>
          </div>
          <div className="cell small-4 medium-3 large-2 ">
            <div className="callout">
              <h4>Callout</h4>
            </div>
          </div>
          <div className="cell small-4 medium-3 large-2 ">
            <div className="callout">
              <h4 className="success label">Callout</h4>
            </div>
          </div>
          <div className="cell small-4 medium-3 large-2 ">
            <div className="callout">
              <h4>Callout</h4>
            </div>
          </div>
          <div className="cell small-4 medium-3 large-2 ">
            <div className="callout">
              <h4>Callout</h4>
            </div>
          </div>
          <div className="cell small-4 medium-3 large-2 ">
            <div className="callout">
              <h4>Callout</h4>
            </div>
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
