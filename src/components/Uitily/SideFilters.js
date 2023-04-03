import React from "react";

export const SideFilters = ({ forAndId, label }) => {
  return (
    <div>
      <div className="d-flex p-1 bg-light m-1 rounded">
        <input
          className="form-check-input mx-2"
          type="checkbox"
          style={{ borderWidth: "2px" }}
          value=""
          id={forAndId}
        />
        <label
          className="form-check-label text-center"
          style={{ fontSize: "14px" }}
          htmlFor={forAndId}
        >
          {label}
        </label>
      </div>
    </div>
  );
};
