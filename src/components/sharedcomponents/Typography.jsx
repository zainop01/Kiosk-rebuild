import React from "react";

export default function Typography({
  variant,
  fw = "normal",
  color,
  align,
  style,
  children,
}) {
  return (
    <>
      <h1 className={`${variant} fw-${fw} ${color} ${align} ${style}`}>
        {children}
      </h1>
    </>
  );
}