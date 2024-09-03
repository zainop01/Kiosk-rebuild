import React from "react";
import PropTypes from "prop-types";

export default function Typography({
  variant = "h1",
  fw = "normal",
  color = "",
  align = "",
  style = {},
  children,
}) {
  const Tag = variant; 

  return (
    <Tag
      className={`fw-${fw} ${color} ${align}`}
      style={style}
    >
      {children}
    </Tag>
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
