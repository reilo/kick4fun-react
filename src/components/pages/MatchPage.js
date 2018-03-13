import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import { store } from '../../../src/store';
import MatchForm from '../tournament/MatchForm';

class MatchPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    const tournamentId = this.props.params.tid;
    store.dispatch(tournamentActions.loadTournament(tournamentId));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tournament.name != nextProps.tournament.name) {
      this.setState({ tournament: Object.assign({}, nextProps.tournament) });
    }
  }

  render() {
    const { match } = this.props;
    return (
      <div className="row">
        <div className="small-12 medium-12 large-12 columns">
          <MatchForm
            match={match}
          />
        </div>
      </div>
    );
  }
}

MatchPage.propTypes = {
  params: PropTypes.object.isRequired,
  tournament: PropTypes.object.isRequired,
  match: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const matchId = ownProps.params.mid;
  const match = state.tournament && state.tournament.rounds ?
    getMatchById(state.tournament, 1) :
    {
      "date": "",
      "player": [["", ""], ["", ""]],
      "sets": [[0, 0], [0, 0], [0, 0]]
    };
  return {
    match: match,
    tournament: state.tournament
  };
}

function getMatchById(tournament, id) {
  const match = tournament.rounds[0].matches[0];
  return match;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tournamentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchPage);