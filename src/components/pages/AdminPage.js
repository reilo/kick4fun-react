import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PlayerTable from '../player/PlayerTable';
import * as kickerligaActions from '../../actions/kickerligaActions';
import * as tournamentActions from '../../actions/tournamentActions';
import TournamentTable from '../tournament/TournamentTable';
import { browserHistory } from 'react-router';

class AdminPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tournaments.length != nextProps.tournaments.length) {
      this.setState({ tournaments: nextProps.tournaments.slice() });
    }
    if (this.props.players.length != nextProps.players.length) {
      this.setState({ players: nextProps.players.slice() });
    }
  }

  redirectToAddTournamentPage() {
    browserHistory.push('/templates');
  }

  redirectToAddPlayerPage() {
    browserHistory.push('/player');
  }

  render() {
    const { tournaments, players } = this.props;
    const progressTournaments = tournaments.reduce((res, cur) => {
      cur.status == "progress" && res.push(cur);
      return res;
    }, []);
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-12 medium-12 large-6">
            <h5 className="primary label">{"Spieleingabe & Terminplanung"}</h5>
            <div className="callout primary">
              <p>Spielergebnisse für die aktuellen Turniere
                eingeben und die Termine und Turnierdaten anpassen.<br />
                Eigene Turniere erstellen - 
                der Administrator kann dein Turnier später als offiziell markieren,
                so dass es auch im öffentlichen Bereich angezeigt wird.</p>
            </div>
            <button type="submit"
              className="button"
              onClick={this.redirectToAddTournamentPage}>
              Neues Turnier
            </button>
            <TournamentTable tournaments={progressTournaments} editMode />
            <h5 className="primary label">Turnierverwaltung</h5>
            <div className="callout primary">
              <p>Turniere als offiziell markieren und das aktive
                Turnier festlegen.</p>
            </div>
            <button type="submit"
              className="button"
              disabled>
              Verwaltung
            </button>
          </div>
          <div className="cell small-12 medium-12 large-6">
            <h5 className="primary label">{"Spielerverwaltung"}</h5>
            <div className="callout primary">
              <p>Neue Spieler anlegen oder vorhandene bearbeiten.</p>
            </div>
            <button type="submit"
              className="button"
              onClick={this.redirectToAddPlayerPage}>
              Neuer Spieler
            </button>
            <PlayerTable players={players} />
          </div>
        </div>
      </div>
    );
  }
}

AdminPage.propTypes = {
  tournaments: PropTypes.array,
  players: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    tournaments: state.tournaments,
    players: state.players
  };
}

export default connect(mapStateToProps)(AdminPage);