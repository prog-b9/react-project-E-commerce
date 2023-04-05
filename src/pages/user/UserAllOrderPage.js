import React from "react";
import { UserSideBar } from "../../components/user/UserSideBar";
import { UserAllOrderContainer } from "../../components/user/order/UserAllOrderContainer";

export const UserAllOrderPage = () => {
  return (
    <div className="bg-light" style={{ minHeight: "90vh" }}>
      <div className="row m-0 ">
        {/* Side bar */}
        <div className="col-12 col-md-4 col-lg-3 col-xl-2 ">
          <UserSideBar />
        </div>
        <div className="col-12 col-md-8 col-lg-9 col-xl-10 ">
          <h3 className="fw-bold py-4"> أهلا <span>محمد علي</span></h3>
          <UserAllOrderContainer/>
        </div>
      </div>
    </div>
  );
};
