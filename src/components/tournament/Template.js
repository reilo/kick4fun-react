import React, { PropTypes } from 'react';
//import { Link } from 'react-router';

const Template = ({ template }) => {
  return (
    <tr>
      <td>{template.name}</td>
      <td>{template.players}</td>
      <td>{template.description}</td>
      <td>
        <button
          type="button"
          disabled={false}
          className="small button tinyborder">
          {'Wählen'}
        </button>
      </td>
    </tr>
  );
};

Template.propTypes = {
  template: PropTypes.object.isRequired
};

export default Template;