import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="" style={{ backgroundColor: "#fff" }} >
      <div className="container">
        <div className=" footer-container py-3" style={{ color: "#565656" }}>
          <div>
            <span className="ms-2">الشروط والاحكام </span>
            <span className="ms-2">سياسة الخصوصية </span>
            <span className="ms-2">اتصل بنا </span>
          </div>
          <div>
            <div className="nav navbar">
              <li>
                <Link
                  className="d-flex align-items-center"
                  style={{ textDecoration: "none", color: "#565656" }}
                >
                  <div>0530435697</div>
                  <img
                    src="../../images/phone.png"
                    style={{ width: "30px", height: "30px" }}
                    alt="facebook-icon"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <img
                    src="../../images/facebook.png"
                    style={{ width: "30px", height: "30px" }}
                    alt="facebook-icon"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <img
                    src="../../images/instagram.png"
                    style={{ width: "30px", height: "30px" }}
                    alt="facebook-icon"
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <img
                    src="../../images/twitter.png"
                    style={{ width: "30px", height: "30px" }}
                    alt="facebook-icon"
                  />
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
