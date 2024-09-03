import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import ToggleSwitch from "./ToggleSwitch";

export default function InputField({
  behave = "formik",
  type = "text",
  onChange,
  onFocus,
  onBlur,
  label,
  name,
  formik,
  placeholder = "",
  disabled = false,
  size = "md",
  margin = "mb-4",
  value,
  defaultValue,
  styles,
  min,
  max,
  step,
  readOnly,
  variant = "normal",
  classes,
  borderRadius = "16px",
  isToggle = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${margin}`}>
      <div className={`input-field-wrapper ${variant}`}>
        {label && (
          <label
            htmlFor={`${type}_${name}`}
            className={`d-block mb-1 ${size}`}
          >
            {label}
          </label>
        )}
        {isToggle ? (
          <ToggleSwitch label={label} onChange={onChange} checked={value} />
        ) : (
          <div className={`input-wrapper`}>
            {behave === "formik" ? (
              <Field
                type={showPassword ? "text" : type}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                id={`${type}_${name}`}
                className={`input ${classes}`}
                style={{ ...styles, borderRadius }}
                min={min}
                max={max}
                step={step}
                readOnly={readOnly}
              />
            ) : (
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={`input`}
                style={{ ...styles, borderRadius }}
                defaultValue={defaultValue}
                disabled={disabled}
                readOnly={readOnly}
                onFocus={onFocus}
                onBlur={onBlur}
                min={min}
                max={max}
                step={step}
              />
            )}
            {type === "password" && (
              <i
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BsEye /> : <BsEyeSlash />}
              </i>
            )}
          </div>
        )}
      </div>
      {formik && (
        <ErrorMessage name={name} component="h6" className="error-msg mt-2" />
      )}
    </div>
  );
}

InputField.propTypes = {
  behave: PropTypes.oneOf(["formik", "native"]),
  type: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  formik: PropTypes.object, // Change from bool to object
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  margin: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  styles: PropTypes.object,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  readOnly: PropTypes.bool,
  variant: PropTypes.string,
  classes: PropTypes.string,
  borderRadius: PropTypes.string,
  isToggle: PropTypes.bool,
};
