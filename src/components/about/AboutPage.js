import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';

class AboutPage extends React.Component {
  render() {
    const { tournament, actions } = this.props;
    debugger;
    return (
      <div className="row">
        <div className="small-12 medium-12 large-12 columns">
          <h1>About</h1>
          <p>This application uses React, Redux, React Router and a variety of other helpful...</p>
          <p>{tournament.name}</p>
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
