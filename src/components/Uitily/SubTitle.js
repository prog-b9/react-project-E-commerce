import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

export const SubTitle = ({ title, btnTitle, pathUrl }) => {
  return (
    <div>
      <div className="container my-4">
        <div className="d-flex justify-content-between overflow-hidden">
          <Fade right>
            <LightSpeed>
            <h3 className="fw-bold">{title}</h3>
            </LightSpeed>
          </Fade>
          {btnTitle ? (
            <Fade left>
              <Link
                to={`/${pathUrl}`}
                className="btn btn-outline-dark rounded-4"
                style={{ borderWidth: "2px" }}
              >
                المزيد
              </Link>
            </Fade>
          ) : null}
        </div>
      </div>
    </div>
  );
};
