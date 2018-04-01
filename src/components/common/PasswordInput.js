import React, { PropTypes } from 'react';

const PasswordInput = ({ name, label, placeholder, helpText, value,
  onChange, error }) => {
  return (
    <div className="small-12 columns">
      <label>{label}
        <input
          type="password"
          name={name}
          placeholder={placeholder}
          aria-describedby={helpText}
          value={value}
          onChange={onChange} />
        {helpText && <p className="help-text" id="helpText">{helpText}</p>}
      </label>
    </div>
  );
};

PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default PasswordInput;