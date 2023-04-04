import React from "react";
import { AdminSideBar } from "../../components/admin/AdminSideBar";
import { AdminAddSubCategory } from "../../components/admin/adminContent/category/AdminAddSubCategory";

export const AdminAddSubCategoryPage = () => {
  return (
    <div className="" style={{ minHeight: "90vh" }}>
      <div className="row m-0">
        {/* Side bar */}
        <div className="col-12 col-md-4 col-lg-3 col-xl-2">
          <AdminSideBar />
        </div>
        <div className="col-12 col-md-8 col-lg-9 col-xl-10">
          <h3 className="fw-bold py-4"> إضافة تصنيف فرعي جديد</h3>
          <AdminAddSubCategory />
        </div>
      </div>
    </div>
  );
};
