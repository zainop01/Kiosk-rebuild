import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ToggleSwitch({ checked = false, onChange, label }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <div className="toggle-switch">
      {/* {label && <span className="toggle-label">{label}</span>} */}
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

ToggleSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
