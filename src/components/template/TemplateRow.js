import React, { PropTypes } from 'react';

const TemplateRow = ({ template }) => {
  const editUrl = "/template/" + template.id;
  return (
    <tr>
      <td>{template.name}</td>
      <td>{template.players}</td>
      <td>{template.description}</td>
      <td>
        <a className="small button tinyborder" href={editUrl}>Wählen</a>
      </td>
    </tr>
  );
};

TemplateRow.propTypes = {
  template: PropTypes.object.isRequired
};

export default TemplateRow;