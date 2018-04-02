import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as config from '../../appConfig';
import Table from '../tournament/Table';
import Schedule, { ScheduleMode } from '../tournament/Schedule';
import Rules from '../tournament/Rules';
import TournamentList from '../tournament/TournamentList';
import { store } from '../../../src/configureStore';
import { loadTournament } from '../../actions/tournamentActions';
import * as kickerligaActions from '../../actions/kickerligaActions';

// use class instead of function because of hot reloading restrictions
class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    //store.dispatch(kickerligaActions.loadLigaSummary());
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
    const { tournament, tournaments, ligaSummary } = this.props;
    const completedTournaments = tournaments.reduce((res, cur) => {
      cur.status == "completed" && cur.official == true && res.push(cur);
      return res;
    }, []);
    const progressTournaments = tournaments.reduce((res, cur) => {
      cur.status == "progress" && cur.official == true && res.push(cur);
      return res;
    }, []);
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-12 medium-12 large-6 ">
            <h5 className="primary label">{tournament ?
              tournament.name :
              "Laden..."}</h5>
            <Schedule
              tournament={tournament}
              mode={ScheduleMode.current}
              count={3} />
            <h5 className="primary label">Aktuelle Tabelle</h5>
            <Table rows={tournament.table || []} />
          </div>
          <div className="cell small-12 medium-12 large-6 ">
            <h5 className="primary label">Turnier-Details und Statistik</h5>
            <div className="callout success">
              <h5>Laufende Turniere</h5>
              <TournamentList tournaments={progressTournaments} ranking />
            </div>
            <div className="callout secondary">
              <h5>Abgeschlossene Turniere</h5>
              <TournamentList tournaments={completedTournaments} ranking />
            </div>
            <h5 className="primary label">Kickerregeln</h5>
            <div className="callout primary">
              <h5>Liga-Regeln</h5>
              <Rules />
            </div>
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