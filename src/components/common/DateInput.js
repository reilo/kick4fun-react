import React, { PropTypes } from 'react';

const DateInput = ({ name, label, onChange, placeholder, value, error }) => {
  const errorText = "errorText_" + name;
  return (
    <div className="small-12 columns">
      <label>{label}
        <input
          type="date"
          name={name}
          placeholder={placeholder}
          aria-describedby={errorText}
          value={value}
          onChange={onChange} />
        {error && <p className="help-text" id={errorText}>{error}</p>}
      </label>
    </div>
  );
};

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default DateInput;