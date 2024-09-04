import React from "react";
import PropTypes from "prop-types";

export default function Typography({
  variant = "",
  fw = "normal",
  color = "",
  align = "",
  style = {},
  children,
}) {

  return (
    <h1
      className={`fw-${fw} ${color} ${align} ${variant}`}
      style={style}
    >
      {children}
    </h1>
  );
}

Typography.propTypes = {
  variant: PropTypes.string,
  fw: PropTypes.oneOf(["normal", "semibold", "bold"]), 
  color: PropTypes.string,   
  align: PropTypes.string,    
  style: PropTypes.object,    
  children: PropTypes.node.isRequired, 
};
