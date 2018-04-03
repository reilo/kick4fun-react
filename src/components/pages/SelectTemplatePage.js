import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as config from '../../appConfig';
import TemplateTable from '../template/TemplateTable';

class SelectTemplatePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.templates.length != nextProps.templates.length) {
      this.setState({ templates: nextProps.templates.slice() });
    }
  }

  render() {
    const { templates } = this.props;
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x grid-margin-y">
          <div className="cell small-12 medium-12 large-12 ">
            <h5 className="primary label">Neues Turnier</h5>
            <h5 className="primary label">Schritt 1: Vorlage auswählen</h5>
            <TemplateTable templates={templates} />
          </div>
        </div>
      </div>
    );
  }
}

SelectTemplatePage.propTypes = {
  templates: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    templates: state.templates
  };
}

export default connect(mapStateToProps)(SelectTemplatePage);