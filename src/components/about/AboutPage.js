import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ligaActions from '../../actions/ligaActions';

class AboutPage extends React.Component {
  render() {
    const { liga, actions } = this.props;
    return (
      <div className="row">
        <div className="small-12 medium-12 large-12 columns">
          <h1>About</h1>
          <p>This application uses React, Redux, React Router and a variety of other helpful...</p>
          <p>{liga.Name}</p>
        </div>
      </div>
    );
  }
}

AboutPage.propTypes = {
  liga: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    liga: state.liga
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ligaActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
