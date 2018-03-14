import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import { store } from '../../../src/store';
import MatchForm from '../tournament/MatchForm';

class MatchPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      match: Object.assign({}, this.props.match),
      errors: {}
    };

    this.updateMatchState = this.updateMatchState.bind(this);

    const tournamentId = this.props.params.tid;
    store.dispatch(tournamentActions.loadTournament(tournamentId));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.date != nextProps.match.date || this.props.match.player != nextProps.match.player) {
      this.setState({ match: JSON.parse(JSON.stringify(nextProps.match)) });
    }
  }

  updateMatchState(event) {
    const field = event.target.name;
    let match = this.state.match;
    if (field == "date") {
      match.date = event.target.value;
    } else if (field.startsWith("set")) {
      const parts = field.split("-");
      const s1 = parseInt(parts[1]);
      const s2 = parseInt(parts[2]);
      match.sets[s1][s2] = event.target.value;
    }
    return this.setState({ match: match });
  }

  render() {
    const { tournament, match, roundId, matchId } = this.props;
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-12 medium-12 large-8">
            <h5 className="success label">{tournament ? tournament.name : "Laden..."}</h5>
            <MatchForm
              tournament={tournament}
              match={this.state.match}
              roundId={roundId}
              matchId={matchId}
              onChange={this.updateMatchState}
            />
          </div>
        </div>
      </div>
    );
  }
}

MatchPage.propTypes = {
  params: PropTypes.object.isRequired,
  tournament: PropTypes.object.isRequired,
  match: PropTypes.object,
  roundId: PropTypes.number,
  matchId: PropTypes.number
};

function mapStateToProps(state, ownProps) {
  const rid = parseInt(ownProps.params.rid);
  const mid = parseInt(ownProps.params.mid);
  const match = state.tournament.rounds ?
    state.tournament.rounds[rid].matches[mid] : {};
  !match.date && Object.assign(match, { "date": "" });
  !match.player && Object.assign(match, { "player": [["", ""], ["", ""]] });
  !match.sets && Object.assign(match, { "sets": [[0, 0], [0, 0], [0, 0]] });
  return {
    tournament: state.tournament,
    match: match,
    matchId: mid,
    roundId: rid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tournamentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchPage);