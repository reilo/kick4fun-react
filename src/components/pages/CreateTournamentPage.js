import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import { store } from '../../../src/configureStore';
import TournamentForm from '../tournament/TournamentForm';
import toastr from 'toastr';

// use class instead of function because of hot reloading restrictions
class CreateTournamentPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      templateInfo: Object.assign({}, this.props.templateInfo),
      createInfo: Object.assign({}, this.props.createInfo),
      errors: {},
      saving: false
    };

    this.updateTournamentState = this.updateTournamentState.bind(this);
    this.createTournament = this.createTournament.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.templates.length != nextProps.templates.length) {
      this.setState({ templates: nextProps.templates.slice() });
    }
  }

  updateTournamentState(event) {
    const field = event.target.name;
    const val = event.target.value;
    let errors = this.state.errors;
    let createInfo = this.state.createInfo;
    if (field == "startDate") {
      createInfo.startDate = val;
    } else if (field.startsWith("checkbox_")) {
      const checked = event.target.checked;
      const name = field.split("_")[1];
      if (checked) {
        createInfo.participants.indexOf(name) < 0 && createInfo.participants.push(name);
      } else {
        const index = createInfo.participants.indexOf(name);
        if (index > -1) {
          createInfo.participants.splice(index, 1);
        }
      }
    } else {
      createInfo[field] = val;
    }
    return this.setState({ createInfo: createInfo });
  }

  createTournament(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions.createTournament(
      this.state.createInfo)
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
    this.context.router.push('/liga/' + this.state.createInfo.id);
  }

  cancel(event) {
    event.preventDefault();
    this.context.router.push('/templates/');
  }

  render() {
    const { templateInfo, players } = this.props;
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-0 medium-0 large-2" />
          <div className="cell small-12 medium-12 large-8 ">
            <h5 className="primary label">Neues Turnier: {templateInfo.name}</h5>
            <h5 className="primary label">Schritt 2: Details festlegen</h5>
            <TournamentForm
              templateInfo={templateInfo}
              createInfo={this.state.createInfo}
              players={players}
              onSave={this.createTournament}
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

CreateTournamentPage.propTypes = {
  templates: PropTypes.array.isRequired,
  templateInfo: PropTypes.object.isRequired,
  createInfo: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

CreateTournamentPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const tid = ownProps.params.id;
  const templateId = ownProps.params.id;
  const templateInfo = state.templates && state.templates.length ?
    state.templates.find(template => template.id == templateId) :
    Object.assign({}, { name: "" });
  const createInfo = state.createInfo ? state.createInfo :
    Object.assign({}, {
      id: "",
      name: "",
      startDate: (new Date()).toISOString().split('T')[0],
      interval: 7,
      password: "",
      participants: [],
      template: tid
    });
  const players = state.players.filter(p => p.active);
  return {
    templates: state.templates,
    templateInfo: templateInfo,
    createInfo: createInfo,
    players: players
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tournamentActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateTournamentPage);