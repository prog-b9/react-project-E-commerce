/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-body-tertiary bg-dark">
        <div className="container  ">
          <Link to={""} className="navbar-brand text-white" href="#">
            <img src="../../images/logo.png" alt="logo" style={{ width: "80px", height: "50px" }}/>
          </Link>
          <button
            className="navbar-toggler bg-white text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse  p-3"
            id="navbarSupportedContent"
          >
            <form className="d-flex w-100" role="search">
              <input
                className="form-control w-100 ms-2"
                type="search"
                placeholder="البحث....."
                aria-label="Search"
              />
            </form>
            <div className="navbar-nav me-auto mb-2 d-flex align-items-start  mb-md-0">
              <li className="nav-item d-flex align-items-center">
                <img
                  src="../../images/login.png"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />
                <Link to={"/login"} className="nav-link active text-white me-2" href="#">
                  دخول
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <img
                  src="../../images/cart.png"
                  alt=""
                  style={{ width: "25px", height: "25px" }}
                />
                <Link to={"/cart"} className="nav-link active text-white me-2" href="#">
                  العربة
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
