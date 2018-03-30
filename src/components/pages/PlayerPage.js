import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playerActions from '../../actions/kickerligaActions';
import PlayerForm from '../tournament/PlayerForm';

class PlayerPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      player: Object.assign({}, this.props.player),
      isNew: this.props.isNew,
      errors: {}
    };

    this.updatePlayerState = this.updatePlayerState.bind(this);
    this.savePlayer = this.savePlayer.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.player.id != nextProps.player.id) {
      this.setState({ player: Object.assign({}, nextProps.player) });
    }
  }

  updatePlayerState(event) {
    const field = event.target.name;
    let player = this.state.player;
    if (field == "active" || field == "real") {
      player[field] = event.target.checked;
    } else {
      player[field] = event.target.value;
    }
    return this.setState({ player: player });
  }

  savePlayer(event) {
    event.preventDefault();
    this.props.actions.savePlayer(this.state.player);
    this.context.router.push('/admin');
  }

  cancel(event) {
    event.preventDefault();
    this.context.router.push('/admin/');
  }

  render() {
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-0 medium-1 large-2" />
          <div className="small-12 medium-10 large-8 columns">
            <PlayerForm
              onChange={this.updatePlayerState}
              onSave={this.savePlayer}
              onCancel={this.cancel}
              player={this.state.player}
              isNew={this.state.isNew}
              errors={this.state.errors}
            />
          </div>
          <div className="cell small-0 medium-1 large-2" />
        </div>
      </div>
    );
  }
}

PlayerPage.propTypes = {
  player: PropTypes.object.isRequired,
  isNew: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

PlayerPage.contextTypes = {
  router: PropTypes.object
};

function getPlayerById(players, id) {
  const player = players.filter(player => player.id == id);
  if (player)
    return player[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const playerId = ownProps.params.id;
  const isNew = !playerId;
  let player = {
    id: '',
    name: '',
    fullName: '',
    active: false,
    real: false
  };
  if (playerId && state.players.length > 0) {
    player = getPlayerById(state.players, playerId);
  }
  !player.password && Object.assign(player, { "password": "" });
  return {
    player: player,
    isNew: isNew
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(playerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);