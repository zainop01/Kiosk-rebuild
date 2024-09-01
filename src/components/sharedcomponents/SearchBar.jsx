import React from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar({
  placeholder = "Search",
  onChange,
  value,
  borderRadius = "30px",
  styles,
}) {
  return (
    <div className="search-bar-wrapper">
      <div className="input-wrapper">
        <i className="search-icon">
          <BsSearch />
        </i>
        <input
          type="search"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className="input"
          style={{ ...styles, borderRadius }}
        />
      </div>
    </div>
  );
}
