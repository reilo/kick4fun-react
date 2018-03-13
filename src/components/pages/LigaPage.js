import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import { store } from '../../../src/store';
import Schedule, { ScheduleMode, ChangeMode, DisplayMode } from '../tournament/Schedule';
import Table from '../tournament/Table';

class LigaPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ligaSummary.activeTournament != nextProps.ligaSummary.activeTournament) {
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
          <div className="cell small-12 medium-12 large-8">
            <h5 className="success label">{tournament ? tournament.name : "Laden..."}</h5>
            <Schedule
              tournament={tournament}
              mode={ScheduleMode.all}
              change={ChangeMode.modify}
              display={DisplayMode.allDetails} />
          </div>
          <div className="cell small-12 medium-12 large-8">
            <h5 className="primary label">Aktuelle Tabelle</h5>
            <Table rows={tournament && tournament.table} />
          </div>
        </div>
      </div>
    );
  }
}

LigaPage.propTypes = {
  ligaSummary: PropTypes.object.isRequired,
  tournament: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(LigaPage);
