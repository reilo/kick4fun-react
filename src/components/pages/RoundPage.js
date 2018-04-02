import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import { store } from '../../../src/configureStore';
import RoundForm from '../tournament/RoundForm';
import toastr from 'toastr';

class RoundPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      round: Object.assign({}, this.props.round),
      errors: {},
      saving: false
    };

    this.updateRoundState = this.updateRoundState.bind(this);
    this.updateRound = this.updateRound.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentWillMount() {
    const tid = this.props.params.tid;
    tid && store.dispatch(tournamentActions.loadTournament(tid));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.round.startDate != nextProps.round.startDate ||
      this.props.round.endDate != nextProps.round.endDate) {
      this.setState({ round: JSON.parse(JSON.stringify(nextProps.round)) });
    }
  }

  updateRoundState(event) {
    const field = event.target.name;
    const val = event.target.value;
    let errors = this.state.errors;
    let round = this.state.round;
    if (field == "startDate") {
      round.startDate = val;
    } else if (field == "endDate") {
      round.endDate = val;
    } else if (field == "password") {
      round.password = val;
    }
    return this.setState({ round: round, errors: errors });
  }

  updateRound(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions.updateRound(
      this.props.tournament.id,
      this.props.roundId,
      this.state.round)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Runde gespeichert');
    this.context.router.push('/edit/' + this.props.tournament.id);
  }

  cancel(event) {
    event.preventDefault();
    this.context.router.push('/edit/' + this.props.tournament.id);
  }

  render() {
    const { tournament, round, roundId } = this.props;
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-0 medium-1 large-2" />
          <div className="cell small-12 medium-10 large-8">
            <h5 className="primary label">
              {tournament ? tournament.name : "Laden..."}
            </h5>
            <RoundForm
              round={this.state.round}
              roundId={roundId}
              onSave={this.updateRound}
              onChange={this.updateRoundState}
              onCancel={this.cancel}
              errors={this.state.errors}
              saving={this.state.saving}
            />
          </div>
          <div className="cell small-0 medium-1 large-2" />
        </div>
      </div>
    );
  }
}

RoundPage.propTypes = {
  params: PropTypes.object.isRequired,
  tournament: PropTypes.object.isRequired,
  round: PropTypes.object.isRequired,
  roundId: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

RoundPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const rid = parseInt(ownProps.params.rid);
  const round = state.tournament.rounds ? state.tournament.rounds[rid] : {};
  !round.startDate && Object.assign(round, {
    "startDate": (new Date()).toISOString().split('T')[0]
  });
  !round.endDate && Object.assign(round, {
    "endDate": (new Date()).toISOString().split('T')[0]
  });
  !round.password && Object.assign(round, { "password": "" });
  return {
    tournament: state.tournament,
    round: round,
    roundId: rid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tournamentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundPage);