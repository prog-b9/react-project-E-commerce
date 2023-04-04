import React from "react";
import { AdminSideBar } from "../../components/admin/AdminSideBar";
import { AdminOrderDetails } from "../../components/admin/adminContent/order/AdminOrderDetails";

export const AdminOrderDetailsPage = () => {
  return (
    <div className="" style={{ minHeight: "90vh" }}>
      <div className="row m-0">
        {/* Side bar */}
        <div className="col-12 col-md-4 col-lg-3 col-xl-2">
          <AdminSideBar />
        </div>
        <div className="col-12 col-md-8 col-lg-9 col-xl-10">
          <div className="fw-bold  my-2" style={{ color: "#B5AD95" }}>
            رقم الطلب{" "}
            <span className="mx-2 text-dark fs-4 text-decoration-underline">
              #41241521
            </span>
          </div>
          <AdminOrderDetails />
        </div>
      </div>
    </div>
  );
};
