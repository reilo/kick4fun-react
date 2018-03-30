import React, { PropTypes } from 'react';

const Checkbox = ({ name, label, onChange, checked }) => {
  return (
    <div className="small-12 columns">
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
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
};

export default Checkbox;