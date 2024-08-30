import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { BsEye, BsEyeSlash, BsCheck2Square, BsSearch } from "react-icons/bs";
import { MdNotInterested } from "react-icons/md";

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
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
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
          <div className={`input-wrapper`}>
            {type === "search" && (
              <i className="search-icon">
                <BsSearch />
              </i>
            )}
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
            {type === "password" ? (
              <i
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BsEye /> : <BsEyeSlash />}
              </i>
            ) : (
              ''
            )}
          </div>
        </div>
        {formik && (
          <ErrorMessage name={name} component="h6" className="error-msg mt-2" />
        )}
      </div>
    </>
  );
}
