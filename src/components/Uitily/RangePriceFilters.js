import React from "react";

export const RangePriceFilters = ({ title, id }) => {
  return (
    <div>
      <div className=" d-flex p-1 bg-light m-1 rounded">
        <label
          className="mx-1"
          style={{ fontSize: "14px" }}
          htmlFor={id}
        >
          {title}
        </label>
        <input
          type="number"
          className=" mx-1  rounded"
          id={id}
          style={{
            width: "60px",
          }}
        />
      </div>
    </div>
  );
};
