import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import { store } from '../../../src/configureStore';
import RoundList, { ListMode } from '../round/RoundList';
import Table from '../table/Table';
import MatchList from '../match/MatchList';

class ResultsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      checkedPlayers: []
    };

    this.updatePlayerState = this.updatePlayerState.bind(this);
  }

  componentWillMount() {
    const tid = this.props.params.tid;
    tid && store.dispatch(tournamentActions.loadTournament(tid));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tournament.name != nextProps.tournament.name) {
      this.setState({ tournament: Object.assign({}, nextProps.tournament) });
    }
  }

  updatePlayerState(event) {
    const field = event.target.name;
    if (field.indexOf("cb_") == 0) {
      const parts = field.split("_");
      const player = parts[1];
      let checkedPlayers = this.state.checkedPlayers;
      if (event.target.checked) {
        checkedPlayers.indexOf(player) < 0 && checkedPlayers.push(player);
      } else {
        const index = checkedPlayers.indexOf(player);
        index > -1 && checkedPlayers.splice(index, 1);
      }
      return this.setState({ checkedPlayers: checkedPlayers });
    }
  }

  render() {
    const { tournament } = this.props;
    const t = tournament;
    const tableTitle = t.status == "completed" ?
      "Endstand" : "Aktuelle Tabelle";
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-12 medium-12 large-6">
            <h5 className="primary label">{t ? t.name : "Laden..."}</h5>
            <h5 className="primary label">{tableTitle}</h5>
            <Table
              rows={t.table || []}
              onChange={this.updatePlayerState}
              highlighting={this.state.checkedPlayers} />
          </div>
          <div className="cell small-12 medium-6 large-3">
            <h5 className="primary label">Beste Torschützen</h5>
            <Table
              rows={t.topScorer || []}
              count={5}
              columns={["goalsScored"]}
              onChange={this.updatePlayerState}
              highlighting={this.state.checkedPlayers} />
          </div>
          <div className="cell small-12 medium-6 large-3">
            <h5 className="primary label">Beste Verteidiger</h5>
            <Table
              rows={t.topDefender || []}
              count={5}
              columns={["goalsShipped"]}
              onChange={this.updatePlayerState}
              highlighting={this.state.checkedPlayers} />
          </div>
          <div className="cell small-12 medium-12 large-8">
            <h5 className="primary label">Höchste Siege</h5>
            <MatchList
              matches={t.plainMatches || []}
              count={5}
              highlighting={this.state.checkedPlayers} />
            <h5 className="primary label">Alle zu 0 Spiele</h5>
            <MatchList
              matches={t.to0Matches || []}
              highlighting={this.state.checkedPlayers} />
            <h5 className="primary label">Alle zu 9 Spiele</h5>
            <MatchList
              matches={t.to9Matches || []}
              highlighting={this.state.checkedPlayers} />
          </div>
          <div className="cell small-12 medium-12 large-8">
            <h5 className="primary label">Spielplan</h5>
            <RoundList
              tournament={t}
              mode={ListMode.all}
              highlighting={this.state.checkedPlayers}
              showDetails />
          </div>
        </div>
      </div>
    );
  }
}

ResultsPage.propTypes = {
  tournament: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    tournament: state.tournament,
    checkedPlayers: []
  };
}

export default connect(mapStateToProps)(ResultsPage);
