import React from 'react';
import PropTypes from 'prop-types';

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

RowsPerPage.propTypes = {
  rowsPerPage: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  onRowsPerPageChange: PropTypes.func.isRequired,
};

export default RowsPerPage;
