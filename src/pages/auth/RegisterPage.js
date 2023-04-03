import React from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div className="container" style={{ minHeight: "77vh" }}>
      <form
        className=" col-12 col-sm-10 col-md-8 col-lg-5 m-auto mt-5 p-3 p-sm-5 rounded-3"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <div className="mb-3 fs-3 fw-bold text-center">تسجيل حساب جديد</div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="اسم المستخدم ...."
          />
        </div>
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
            إنشاء الحساب
          </button>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <span> لديك حساب ؟</span>
          <Link
            className="fw-bold text-danger mx-1"
            to={"/login"}
            style={{ textDecoration: "none" }}
          >
            اضغط هنا
          </Link>
        </div>
      </form>
    </div>
  );
};
