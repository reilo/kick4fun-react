import React, { PropTypes } from 'react';
import TemplateRow from './TemplateRow';

const TemplateTable = ({ templates }) => {
  return (
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
          <TemplateRow key={index} template={template} />
        )}
      </tbody>
    </table >
  );
};

TemplateTable.propTypes = {
  templates: PropTypes.array.isRequired
};

export default TemplateTable;