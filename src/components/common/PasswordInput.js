import React, { PropTypes } from 'react';

const PasswordInput = ({ name, label, onChange, value, error }) => {
  const errorText = "errorText_" + name;
  return (
    <div className="small-12 columns">
      <label>{label}
        <input
          type="text"
          name={name}
          aria-describedby={errorText}
          value={value}
          onChange={onChange} />
        {error && <p className="help-text" id={errorText}>{error}</p>}
      </label>
    </div>
  );
};

PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default PasswordInput;