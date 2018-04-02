import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import { store } from '../../../src/configureStore';
import Schedule, { ScheduleMode } from '../tournament/Schedule';

class EditResultsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    const tid = this.props.params.tid;
    tid && store.dispatch(tournamentActions.loadTournament(tid));
  }

  componentWillReceiveProps(nextProps) {
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
  params: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    ligaSummary: state.ligaSummary,
    tournament: state.tournament
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tournamentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditResultsPage);
