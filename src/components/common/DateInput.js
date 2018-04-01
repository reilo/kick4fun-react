import React, { PropTypes } from 'react';

const DateInput = ({ name, label, placeholder, helpText, value, onChange, error }) => {
  return (
    <div className="small-12 columns">
      <label>{label}
        <input
          type="date"
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

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default DateInput;