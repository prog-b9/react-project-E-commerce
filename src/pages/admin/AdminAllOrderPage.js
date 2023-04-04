import React from "react";
import { AdminSideBar } from "../../components/admin/AdminSideBar";
import { AdminAllOrder } from "../../components/admin/adminContent/order/AdminAllOrder";
import { Pagination } from "../../components/Uitily/Pagination";

export const AdminAllOrderPage = () => {
  return (
    <div className="" style={{ minHeight: "90vh" }}>
      <div className="row m-0">
        {/* Side bar */}
        <div className="col-12 col-md-4 col-lg-3 col-xl-2">
          <AdminSideBar />
        </div>
        <div className="col-12 col-md-8 col-lg-9 col-xl-10">
          <h3 className="fw-bold py-4">إدارة جميع الطلبات</h3>
          <AdminAllOrder />
          <div className="my-5">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};
