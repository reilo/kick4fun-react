import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import { store } from '../../../src/configureStore';
import Schedule, { ScheduleMode } from '../tournament/Schedule';
import Table from '../tournament/Table';
import MatchList from '../tournament/MatchList';

class ResultsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    props.params.tid && store.dispatch(tournamentActions.loadTournament(props.params.tid));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tournament.name != nextProps.tournament.name) {
      this.setState({ tournament: Object.assign({}, nextProps.tournament) });
    }
  }

  render() {
    const { tournament } = this.props;
    const t = tournament;
    const tableTitle = t.status == "completed" ? "Endstand" : "Aktuelle Tabelle";
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-12 medium-12 large-6">
            <h5 className="primary label">{t ? t.name : "Laden..."}</h5>
            <h5 className="primary label">{tableTitle}</h5>
            <Table rows={t && t.table} />
          </div>
          <div className="cell small-12 medium-6 large-3">
            <h5 className="primary label">Beste Torschützen</h5>
            <Table rows={t && t.topScorer} count={5} columns={["goalsScored"]} />
          </div>
          <div className="cell small-12 medium-6 large-3">
            <h5 className="primary label">Beste Verteidiger</h5>
            <Table rows={t && t.topDefender} count={5} columns={["goalsShipped"]} />
          </div>
          <div className="cell small-12 medium-12 large-6">
            <h5 className="primary label">Höchste Siege</h5>
            <MatchList matches={t && t.plainMatches} count={5} />
            <h5 className="primary label">Alle zu 0 Spiele</h5>
            <MatchList matches={t && t.to0Matches} />
            <h5 className="primary label">Alle zu 9 Spiele</h5>
            <MatchList matches={t && t.to9Matches} />
          </div>
          <div className="cell small-12 medium-12 large-6">
            <h5 className="primary label">Spielplan</h5>
            <Schedule
              tournament={t}
              mode={ScheduleMode.all} />
          </div>
        </div>
      </div>
    );
  }
}

ResultsPage.propTypes = {
  tournament: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    tournament: state.tournament
  };
}

export default connect(mapStateToProps)(ResultsPage);
