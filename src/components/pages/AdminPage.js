import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Players from '../tournament/Players';

// use class instead of function because of hot reloading restrictions
class AdminPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.players.length != nextProps.players.length) {
      this.setState({ players: nextProps.players.slice() });
    }
  }

  render() {
    const { players } = this.props;
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-0 medium-0 large-2" />
          <div className="cell small-12 medium-12 large-8">
          <h5 className="primary label">{"Teilnehmerliste"}</h5>
            <div className="callout warning">
              <h4>Teilnehmerliste</h4>
              <Players players={players} />
            </div>
          </div>
          <div className="cell small-0 medium-0 large-2" />
        </div>
      </div>
    );
  }
}

AdminPage.propTypes = {
  players: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps)(AdminPage);