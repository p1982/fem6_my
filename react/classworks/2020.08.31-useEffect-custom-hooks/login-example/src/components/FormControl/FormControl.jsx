import React from "react";
import PropTypes from "prop-types";

export const FormControl = ({
  type,
  name,
  label,
  placeholder,
  className,
  handleChange
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={`form-control ${className}`}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

FormControl.defaultProps = {
  type: "text",
  name: "default-name",
  label: "Default label",
  placeholder: "Default placeholder",
  className: ""
};

FormControl.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};
