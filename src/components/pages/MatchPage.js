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
    this.updateMatch = this.updateMatch.bind(this);

    const tournamentId = this.props.params.tid;
    store.dispatch(tournamentActions.loadTournament(tournamentId));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.date != nextProps.match.date ||
      this.props.match.player != nextProps.match.player) {
      this.setState({ match: nextProps.match });
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
      match.sets[s1][s2] = parseInt(event.target.value);
    }
    return this.setState({ match: match });
  }

  updateMatch(event) {
    event.preventDefault();
    this.props.actions.updateMatch(
      this.props.tournament.id,
      this.props.roundId,
      this.props.matchId,
      this.state.match);
    this.context.router.push('/liga');
  }

  render() {
    const { tournament, match, roundId, matchId } = this.props;
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-12 medium-12 large-8">
            <h5 className="primary label">
              {tournament ? tournament.name : "Laden..."}
            </h5>
            <MatchForm
              match={this.state.match}
              roundId={roundId}
              matchId={matchId}
              onSave={this.updateMatch}
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
  matchId: PropTypes.number,
  actions: PropTypes.object.isRequired
};

MatchPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const rid = parseInt(ownProps.params.rid);
  const mid = parseInt(ownProps.params.mid);
  const match = state.tournament.rounds ?
    JSON.parse(JSON.stringify(state.tournament.rounds[rid].matches[mid])) : {};
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