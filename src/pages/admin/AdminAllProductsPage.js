import React from "react";
import { AdminSideBar } from "../../components/admin/AdminSideBar";
import { AdminAllProducts } from "../../components/admin/adminContent/products/AdminAllProducts";

export const AdminAllProductsPage = () => {
  return (
    <div className="" style={{ minHeight: "90vh" }}>
      <div className="row m-0 ">
        {/* Side bar */}
        <div className="col-12 col-md-4 col-lg-3 col-xl-2 ">
          <AdminSideBar />
        </div>
        <div className="col-12 col-md-8 col-lg-9 col-xl-10">
          <h3 className="fw-bold py-4"> جميع المنتجات</h3>

          <AdminAllProducts />
        </div>
      </div>
    </div>
  );
};
