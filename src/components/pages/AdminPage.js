import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PlayerTable from '../tournament/PlayerTable';
import TournamentList from '../tournament/TournamentList';

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

  render() {
    const { tournaments, players } = this.props;
    const progressTournaments = tournaments.reduce((res, cur) => {
      cur.status == "progress" && cur.official == true && res.push(cur);
      return res;
    }, []);
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-12 medium-12 large-6">
            <h5 className="primary label">{"Spieleingabe & Ligaverwaltung"}</h5>
            <div className="callout primary">
              <p>Hier kannst du Spielergebnisse für die aktuellen Turniere eingeben.
                Klicke unten eine Liga an, um in den Bearbeitungsmodus zu gelangen.
                Du kannst hier auch die Termine anpassen.</p>
            </div>
            <TournamentList tournaments={progressTournaments} editMode />
          </div>
          <div className="cell small-12 medium-12 large-6">
            <h5 className="primary label">{"Spielerverwaltung"}</h5>
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