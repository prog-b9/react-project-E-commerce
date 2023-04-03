import React from "react";
import { Link } from "react-router-dom";

export const SubTitle = ({ title, btnTitle, pathUrl }) => {
  return (
    <div>
      <div className="container my-4">
        <div className="d-flex justify-content-between">
          <h3 className="fw-bold">{title}</h3>
          {btnTitle ? (
            <Link
              to={`/${pathUrl}`}
              className="btn btn-outline-dark rounded-4"
              style={{ borderWidth: "2px" }}
            >
              المزيد
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};
