import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as config from '../../appConfig';
import Table from '../tournament/Table';
import Schedule from '../tournament/Schedule';

// use class instead of function because of hot reloading restrictions
class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tournament.name != nextProps.tournament.name) {
      this.setState({ tournament: Object.assign({}, nextProps.tournament) });
    }
  }

  render() {
    const { tournament } = this.props;
    return (
      <div className="grid-x">
        <div className="cell small-6 medium-6 large-6 ">
          <h1>{config.ORG_NAME}</h1>
          <Link to="about" className="large button">Learn more</Link>
          <Schedule tournament={tournament} />
        </div>
        <div className="cell small-6 medium-6 large-6 ">
          <Table rows={tournament.table} />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  tournament: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    tournament: state.tournament
  };
}

export default connect(mapStateToProps)(HomePage);