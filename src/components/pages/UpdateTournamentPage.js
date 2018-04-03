import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import { store } from '../../../src/configureStore';
import UpdateTournamentForm from '../tournament/UpdateTournamentForm';
import toastr from 'toastr';

class UpdateTournamentPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      tournament: Object.assign({}, this.props.tournament),
      errors: {},
      saving: false
    };

    this.updateTournamentState = this.updateTournamentState.bind(this);
    this.updateTournament = this.updateTournament.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentWillMount() {
    const tid = this.props.params.id;
    tid && store.dispatch(tournamentActions.loadTournament(tid));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tournament.name != nextProps.tournament.name) {
      this.setState({ tournament: Object.assign({}, nextProps.tournament) });
    }
  }

  updateTournamentState(event) {
    const field = event.target.name;
    const val = event.target.value;
    let errors = this.state.errors;
    let tournament = this.state.tournament;
    tournament[field] = val;
    return this.setState({ tournament: tournament });
  }

  updateTournament(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions.updateTournament(this.state.tournament)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Turnier gepeichert');
    store.dispatch(tournamentActions.loadTournamentList());
    this.context.router.push('/edit/' + this.state.tournament.id);
  }

  cancel(event) {
    event.preventDefault();
    this.context.router.push('/edit/' + this.props.tournament.id);
  }

  render() {
    const { tournament, players } = this.props;
    const newTitle = "Turnierdaten bearbeiten: " + tournament.name;
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-0 medium-0 large-2" />
          <div className="cell small-12 medium-12 large-8 ">
            <h5 className="primary label">{newTitle}</h5>
            <UpdateTournamentForm
              tournament={this.state.tournament}
              players={players}
              onSave={this.updateTournament}
              onChange={this.updateTournamentState}
              onCancel={this.cancel}
              errors={this.state.errors}
              saving={this.state.saving}
            />
          </div>
          <div className="cell small-0 medium-0 large-2" />
        </div>
      </div>
    );
  }
}

UpdateTournamentPage.propTypes = {
  params: PropTypes.object.isRequired,
  tournament: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

UpdateTournamentPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let tournament = state.tournament.id ? state.tournament :
    Object.assign({}, {
      id: "",
      name: "",
      createdBy: "",
      password: ""
    });
  !tournament.password && Object.assign(tournament, { "password": "" });
  const players = state.players.filter(p => p.active);
  return {
    tournament: tournament,
    players: players
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tournamentActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(
  UpdateTournamentPage);