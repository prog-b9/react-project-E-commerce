import React from "react";
import { AdminOrderDetailsCard } from "./AdminOrderDetailsCard";

export const AdminOrderDetails = () => {
  return (
    <div className="row">
      <AdminOrderDetailsCard />
      <AdminOrderDetailsCard />
      <AdminOrderDetailsCard />
      {/* User person Details */}
      <div className="container my-5">
        <div
          className="col-12 col-md-12 col-lg-10 col-xl-8 m-auto bg-white p-3 rounded-3"
          id="style-shadow-dark"
        >
          <h3 className="fw-bold">تفاصيل العميل</h3>
          {/* name */}
          <div className="my-3">
            <span className="fw-bold" style={{ color: "#B5AD95" }}>
              الأسم :{" "}
            </span>
            <span className="mx-2 text-muted">احمد عبدالله</span>
          </div>
          {/* phone numeber */}
          <div className="my-3">
            <span className="fw-bold" style={{ color: "#B5AD95" }}>
              رقم الهاتف :{" "}
            </span>
            <span className="mx-2 text-muted">0530435697</span>
          </div>
          {/* Email */}
          <div className="my-3">
            <span className="fw-bold" style={{ color: "#B5AD95" }}>
              الأيميل :{" "}
            </span>
            <span className="mx-2 text-muted">prog.b9@gmail.com</span>
          </div>
          {/* Price Total */}
          <div className="my-3">
            <span className="fw-bold" style={{ color: "#B5AD95" }}>
              المجموع :{" "}
            </span>
            <span className="mx-2 text-muted fw-bold fs-5">12040 جنية</span>
          </div>
          {/* Order Status */}
          <div className="col-12 col-sm-8 col-md-10 col-lg-6 m-auto my-4">
            <div className="input-group mb-3" id="style-shadow">
              <select
                className="form-select rounded-0 rounded-end text-center shadow-none border-0"
                id="inputGroupSelect03"
                style={{ outline: "none", backgroundColor: "#ececec" }}
                aria-label="Example select with button addon"
              >
                <option>حالة الطلب ...</option>
                <option value="1">قيد التنفيذ</option>
                <option value="2">تم الانتهاء</option>
                <option value="3">الغاء</option>
              </select>
              <button
                className="btn btn-dark rounded-0 rounded-start"
                type="button"
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
