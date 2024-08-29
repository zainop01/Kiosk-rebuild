import React from "react";

export default function Table({ theading, children }) {
  return (
    <>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {theading?.map((val, index) => (
              <th key={index}>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      </div>
    </>
  );
}
