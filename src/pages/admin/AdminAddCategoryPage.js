import React from "react";
import { AdminSideBar } from "../../components/admin/AdminSideBar";
import { AdminAddCategory } from "../../components/admin/adminContent/category/AdminAddCategory";

export const AdminAddCategoryPage = () => {
  return (
    <div className="" style={{ minHeight: "90vh" }}>
      <div className="row m-0">
        {/* Side bar */}
        <div className="col-12 col-md-4 col-lg-3 col-xl-2">
          <AdminSideBar />
        </div>
        <div className="col-12 col-md-8 col-lg-9 col-xl-10">
          <h3 className="fw-bold py-4"> إضافة تصنيف جديدة</h3>
          <AdminAddCategory />
        </div>
      </div>
    </div>
  );
};
