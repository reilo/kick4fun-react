import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tournamentActions from '../../actions/tournamentActions';
import { store } from '../../../src/store';
import Schedule, { ScheduleMode, ChangeMode, DisplayMode } from '../tournament/Schedule';
import Table from '../tournament/Table';

class ResultsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    props.params.tid && store.dispatch(tournamentActions.loadTournament(props.params.tid));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tournament.name != nextProps.tournament.name) {
      this.setState({ tournament: Object.assign({}, nextProps.tournament) });
    }
  }

  render() {
    const { tournament } = this.props;
    const t = tournament;
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-12 medium-12 large-6">
            <h5 className="primary label">{t ? t.name : "Laden..."}</h5>
            <Schedule
              tournament={t}
              mode={ScheduleMode.all}
              change={ChangeMode.readOnly}
              display={DisplayMode.default} />
          </div>
          <div className="cell small-12 medium-12 large-6">
            <h5 className="primary label">Aktuelle Tabelle</h5>
            <Table rows={t && t.table} />
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
  const loadActive = !ownProps.params.tid;
  return {
    tournament: state.tournament
  };
}

export default connect(mapStateToProps)(ResultsPage);