import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import { store } from '../../../src/configureStore';
import MatchForm from '../tournament/MatchForm';
import toastr from 'toastr';

class MatchPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      match: Object.assign({}, this.props.match),
      errors: {},
      saving: false
    };

    this.updateMatchState = this.updateMatchState.bind(this);
    this.updateMatch = this.updateMatch.bind(this);
    this.cancel = this.cancel.bind(this);

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
    const val = event.target.value;
    let errors = this.state.errors;
    let match = this.state.match;
    if (field == "date") {
      match.date = val;
    } else if (field.startsWith("set")) {
      const parts = field.split("_");
      const s1 = parseInt(parts[1]);
      const s2 = parseInt(parts[2]);
      match.sets[s1][s2] = parseInt(val);
    } else {
      match.password = val;
    }
    return this.setState({ match: match, errors: errors });
  }

  updateMatch(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions.updateMatch(
      this.props.tournament.id,
      this.props.roundId,
      this.props.matchId,
      this.state.match)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Spiel gespeichert');
    this.context.router.push('/edit/' + this.props.tournament.id);
  }

  cancel(event) {
    event.preventDefault();
    this.context.router.push('/edit/' + this.props.tournament.id);
  }

  render() {
    const { tournament, match, roundId, matchId } = this.props;
    return (
      <div className="grid-container" >
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-0 medium-1 large-2" />
          <div className="cell small-12 medium-10 large-8">
            <h5 className="primary label">
              {tournament ? tournament.name : "Laden..."}
            </h5>
            <MatchForm
              match={this.state.match}
              roundId={roundId}
              matchId={matchId}
              onSave={this.updateMatch}
              onChange={this.updateMatchState}
              onCancel={this.cancel}
              errors={this.state.errors}
              saving={this.state.saving} />
          </div>
          <div className="cell small-0 medium-1 large-2" />
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
  !match.date && Object.assign(match, {
    "date": (new Date()).toISOString().split('T')[0]
  });
  !match.player && Object.assign(match, { "player": [["", ""], ["", ""]] });
  !match.sets && Object.assign(match, { "sets": [[0, 0], [0, 0], [0, 0]] });
  !match.password && Object.assign(match, { "password": "" });
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