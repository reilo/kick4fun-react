import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Template from '../tournament/Template';
import * as config from '../../appConfig';

// use class instead of function because of hot reloading restrictions
class TemplatesPage extends React.Component {
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
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sp.</th>
                  <th>Beschreibung</th>
                  <th>Aktion</th>
                </tr>
              </thead>
              <tbody>
                {templates && templates.map((template, index) =>
                  <Template key={index} template={template} />
                )}
              </tbody>
            </table >
          </div>
        </div>
      </div>
    );
  }
}

TemplatesPage.propTypes = {
  templates: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    templates: state.templates
  };
}

export default connect(mapStateToProps)(TemplatesPage);