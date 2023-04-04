import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="container" id="space-footer">
      <form
        className=" col-12 col-sm-10 col-md-8 col-lg-5 m-auto mt-5 p-3 p-sm-5 rounded-3"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <div className="mb-3 fs-3 fw-bold text-center">تسجيل الدخول</div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="الايميل ...."
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="كلمة المرور ...."
            autoComplete="off"
          />
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <button type="submit" className="btn btn-dark  col-12 col-sm-8">
            تسجيل
          </button>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <span>ليس لديك حساب ؟</span>
          <Link
            className="fw-bold text-danger mx-1"
            to={"/register"}
            style={{ textDecoration: "none" }}
          >
            اضغط هنا
          </Link>
        </div>
      </form>

      <Link to={"/admin/allProducts"}>
        <h1>Admin Auth</h1>
      </Link>
    </div>
  );
};
