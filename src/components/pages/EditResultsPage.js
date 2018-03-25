import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import { store } from '../../../src/store';
import Schedule, { ScheduleMode } from '../tournament/Schedule';

class EditResultsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    props.params.tid && store.dispatch(tournamentActions.loadTournament(props.params.tid));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loadActive &&
      this.props.ligaSummary.activeTournament != nextProps.ligaSummary.activeTournament) {
      this.setState({ ligaSummary: Object.assign({}, nextProps.ligaSummary) });
      store.dispatch(tournamentActions.loadTournament(nextProps.ligaSummary.activeTournament));
    }
    if (this.props.tournament.name != nextProps.tournament.name) {
      this.setState({ tournament: Object.assign({}, nextProps.tournament) });
    }
  }

  render() {
    const { tournament, actions } = this.props;
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-0 medium-0 large-2" />
          <div className="cell small-12 medium-12 large-8">
            <h5 className="primary label">{tournament ? tournament.name : "Laden..."}</h5>
            <Schedule
              tournament={tournament}
              mode={ScheduleMode.all}
              editMode={tournament.status == "progress"}
              showDetails />
          </div>
          <div className="cell small-0 medium-0 large-2" />
        </div>
      </div>
    );
  }
}

EditResultsPage.propTypes = {
  ligaSummary: PropTypes.object.isRequired,
  tournament: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  loadActive: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const loadActive = !ownProps.params.tid;
  return {
    ligaSummary: state.ligaSummary,
    tournament: state.tournament,
    loadActive: loadActive
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tournamentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditResultsPage);
