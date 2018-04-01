import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PlayerTable from '../tournament/PlayerTable';
import TournamentTable from '../tournament/TournamentTable';
import { browserHistory } from 'react-router';

// use class instead of function because of hot reloading restrictions
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
              <p>Hier kannst du Spielergebnisse für die aktuellen Turniere
                eingeben und die Termine und Turnierdaten anpassen.<br />
                Du kannst auch deine eigenen Turniere erstellen.
                Der Administrator kann dein Turnier später als offiziell markieren, sodass es auch im öffentlichen Bereich angezeigt wird.</p>
            </div>
            <button type="submit"
              className="button"
              onClick={this.redirectToAddTournamentPage}>
              Neues Turnier
            </button>
            <TournamentTable tournaments={progressTournaments} editMode />
            <h5 className="primary label">Turnierverwaltung</h5>
            <div className="callout primary">
              <p>Hier kannst du Turniere als offiziell markieren und das aktive
                Turnier festlegen.
              Du brauchst dazu das Kickerliga-Administrator-Passwort.</p>
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
              <p>Hier kannst du neue Spieler anlegen oder vorhandene bearbeiten.
                Du brauchst dazu das Kickerliga-Administrator-Passwort.
              </p>
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