import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as config from '../../appConfig';
import Table from '../table/Table';
import RoundList, { ListMode } from '../round/RoundList';
import Rules from '../kickerliga/Rules';
import TournamentList from '../tournament/TournamentList';
import { store } from '../../../src/configureStore';
import { loadTournament } from '../../actions/tournamentActions';
import * as kickerligaActions from '../../actions/kickerligaActions';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      checkedPlayers: []
    };

    this.updatePlayerState = this.updatePlayerState.bind(this);
  }

  componentWillMount() {
    const activeTournament = this.props.ligaSummary.activeTournament;
    const currentTournament = this.props.tournament;
    activeTournament && currentTournament &&
      activeTournament.id != currentTournament.id &&
      store.dispatch(loadTournament(activeTournament));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ligaSummary.activeTournament !=
      nextProps.ligaSummary.activeTournament) {
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

  updatePlayerState(event) {
    const field = event.target.name;
    if (field.indexOf("cb_") == 0) {
      const parts = field.split("_");
      const player = parts[1];
      let checkedPlayers = this.state.checkedPlayers;
      if (event.target.checked) {
        checkedPlayers.indexOf(player) < 0 && checkedPlayers.push(player);
      } else {
        const index = checkedPlayers.indexOf(player);
        index > -1 && checkedPlayers.splice(index, 1);
      }
      return this.setState({ checkedPlayers: checkedPlayers });
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
          <div className="cell small-12 medium-12 large-7 ">
            <h5 className="primary label">{tournament ?
              tournament.name :
              "Laden..."}</h5>
            <h5 className="primary label">Aktuelle Tabelle</h5>
            <Table
              rows={tournament.table || []}
              onChange={this.updatePlayerState}
              highlighting={this.state.checkedPlayers} />
            <RoundList
              tournament={tournament}
              mode={ListMode.current}
              count={3}
              highlighting={this.state.checkedPlayers} />
          </div>
          <div className="cell small-12 medium-12 large-5 ">
            <h5 className="primary label">Turnier-Details und Statistik</h5>
            <div className="callout success">
              <h5>Laufende Turniere</h5>
              <TournamentList
                tournaments={progressTournaments}
                ranking />
            </div>
            <div className="callout secondary">
              <h5>Abgeschlossene Turniere</h5>
              <TournamentList
                tournaments={completedTournaments}
                ranking />
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
    tournament: state.tournament,
    checkedPlayers: []
  };
}

export default connect(mapStateToProps)(HomePage);