import React from 'react';

const RowsPerPage = ({ rowsPerPage, options, onRowsPerPageChange }) => {
  return (
    <div className="rows-per-page-container">
      <label className="rows-per-page-label">Show rows per page</label>
      <select
        className="rows-per-page-select"
        value={rowsPerPage}
        onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RowsPerPage;
