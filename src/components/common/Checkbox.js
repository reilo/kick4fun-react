import React, { PropTypes } from 'react';

const Checkbox = ({ name, label, helpText, checked, onChange }) => {
  return (
    <div className="small-12 columns">
    <label>{helpText}</label>
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
};

export default Checkbox;