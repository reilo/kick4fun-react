import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router';
import * as config from '../../appConfig';
import Table from '../tournament/Table';
import Schedule from '../tournament/Schedule';
import History from '../tournament/History';
import { store } from '../../../src/store';
import { loadTournament } from '../../actions/tournamentActions';

// use class instead of function because of hot reloading restrictions
class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ligaSummary.activeTournament != nextProps.ligaSummary.activeTournament) {
      this.setState({ ligaSummary: Object.assign({}, nextProps.ligaSummary) });
      store.dispatch(loadTournament(nextProps.ligaSummary.activeTournament));
    }
    if (this.props.tournaments.length != nextProps.tournaments.length) {
      this.setState({ tournaments: nextProps.tournaments.slice() });
    }
    if (this.props.tournament.name != nextProps.tournament.name) {
      this.setState({ tournament: Object.assign({}, nextProps.tournament) });
    }
  }

  render() {
    const { tournament, tournaments } = this.props;
    return (
      <div className="grid-x grid-margin-x">
        <div className="cell small-6 medium-6 large-6 ">
          <h4>Laufendes Turnier: {tournament.name}</h4>
          <Schedule tournament={tournament} />
          <h4>Historie:</h4>
          <History tournaments={tournaments} />
        </div>
        <div className="cell small-6 medium-6 large-6 ">
          <Table rows={tournament && tournament.table} />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  tournaments: PropTypes.array,
  tournament: PropTypes.object,
  ligaSummary: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    ligaSummary: state.ligaSummary,
    tournaments: state.tournaments,
    tournament: state.tournament
  };
}

export default connect(mapStateToProps)(HomePage);