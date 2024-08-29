import React from "react";

export default function Colors({ children, bg , color }) {
  return (
    <>
      <div>
        <h1
          className="fs-2 text-light p-3 rounded mb-3"
          style={{ backgroundColor: bg }}
        >
          {children}
        </h1>
      </div>
    </>
  );
}
