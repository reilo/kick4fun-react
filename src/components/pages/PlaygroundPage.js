import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Tournaments from '../tournament/Tournaments';
import { browserHistory } from 'react-router';

// use class instead of function because of hot reloading restrictions
class PlaygroundPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tournaments.length != nextProps.tournaments.length) {
      this.setState({ tournaments: nextProps.tournaments.slice() });
    }
  }

  redirectToAddTournamentPage() {
    browserHistory.push('/templates');
  }

  render() {
    const { tournaments } = this.props;
    const progressTournaments = tournaments.reduce((res, cur) => {
      cur.status == "progress" && cur.official == false && res.push(cur);
      return res;
    }, []);
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-12 medium-12 large-6 ">
            <div className="callout primary">
              <h5>Kickerliga - Bolzplatz</h5>
              <p>Hier kannst du deine eigenen Turniere erstellen und bearbeiten, um die App zu testen oder eine eigene Liga auszuspielen.</p>
              <p>Der Administrator kann dein Turnier später als offiziell markieren, sodass es auch im öffentlichen Bereich angezeigt wird.</p>
            </div>
          </div>
          <div className="cell small-12 medium-12 large-6">
            <h5 className="primary label">{"Spieleingabe & Ligaverwaltung"}</h5>
            <button type="submit"
              className="button"
              onClick={this.redirectToAddTournamentPage}>
              Neues Turnier
            </button>
            <Tournaments tournaments={progressTournaments} editMode />
          </div>
        </div>
      </div>
    );
  }
}

PlaygroundPage.propTypes = {
  tournaments: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    tournaments: state.tournaments
  };
}

export default connect(mapStateToProps)(PlaygroundPage);