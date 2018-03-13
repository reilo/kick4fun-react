import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as config from '../../appConfig';
import Table from '../tournament/Table';
import Schedule, { ScheduleMode, DisplayMode } from '../tournament/Schedule';
import History from '../tournament/History';
import { store } from '../../../src/store';
import { loadTournament } from '../../actions/tournamentActions';

// use class instead of function because of hot reloading restrictions
class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ligaSummary.activeTournament != nextProps.ligaSummary.activeTournament) {
      this.setState({ ligaSummary: Object.assign({}, nextProps.ligaSummary) });
      store.dispatch(loadTournament(nextProps.ligaSummary.activeTournament));
    }
    if (this.props.tournaments.length != nextProps.tournaments.length) {
      this.setState({ tournaments: nextProps.tournaments.slice() });
    }
    if (this.props.tournament.name != nextProps.tournament.name) {
      this.setState({ tournament: Object.assign({}, nextProps.tournament) });
    }
  }

  render() {
    const { tournament, tournaments } = this.props;
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-12 medium-12 large-6 ">
            <h5 className="success label">{tournament ? tournament.name : "Laden..."}</h5>
            <Schedule
              tournament={tournament}
              mode={ScheduleMode.current}
              count={3}
              display={DisplayMode.default} />
          </div>
          <div className="cell small-12 medium-12 large-6 ">
            <h5 className="primary label">Aktuelle Tabelle</h5>
            <Table rows={tournament && tournament.table} />
          </div>
          <div className="cell small-12 medium-12 large-6 ">
            <h4 className="primary label">Historie: Abeschlossene Turniere</h4>
            <History tournaments={tournaments} />
          </div>
          <div className="cell small-12 medium-12 large-6 ">
            <h4 className="primary label">Kickerregeln</h4>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  tournaments: PropTypes.array,
  tournament: PropTypes.object,
  ligaSummary: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    ligaSummary: state.ligaSummary,
    tournaments: state.tournaments,
    tournament: state.tournament
  };
}

export default connect(mapStateToProps)(HomePage);