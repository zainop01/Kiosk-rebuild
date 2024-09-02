import React from "react";

export default function Button({
  children,
  type = "button",
  size = "lg",
  variant = "fill",
  btn = "primary",
  startIcon,
  align = "me-auto",
  onClick,
  classes = "",
  title = "",
  disabled = false,
  styles,
  width = 'auto',
  bdRadius = '30px'
}) {
  return (
    <>
      <button
        type={type}
        className={`button btn_${size} btn_${variant} btn_${btn} d-flex align-items-center justify-content-center ${align} ${classes}`}
        onClick={onClick}
        title={title}
        disabled={disabled}
        style={{...styles , width: width , borderRadius: bdRadius }}
      >
        {startIcon && <i>{startIcon}</i>} {children}
      </button>
    </>
  );
}
