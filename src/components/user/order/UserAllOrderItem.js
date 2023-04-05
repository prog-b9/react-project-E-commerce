import React from "react";
import { UserAllOrderCard } from "./UserAllOrderCard";

export const UserAllOrderItem = () => {
  return (
    <div className="container bg-white rounded-3 my-5 p-3" id="style-shadow-dark">
      {/* Order Number  */}
      <div className="fw-bold  my-2" style={{ color: "#B5AD95" }}>
        رقم الطلب{" "}
        <span className="mx-2 text-dark fs-5 text-decoration-underline">
          #41241521
        </span>
      </div>
      {/* Start order card */}
      <UserAllOrderCard />
      <UserAllOrderCard />
      <UserAllOrderCard />
      {/* End order card */}

      {/* Start Price and Order status */}
      <div className=" mt-3 d-flex justify-content-between ">
        {/* one */}
        <div className="fw-bold " style={{ color: "#B5AD95" }}>
          <span> الحالة</span>
          <span className="mx-2 text-dark fs-5 text-decoration-underline">
            قيد التنفيذ
          </span>
        </div>
        {/* two */}
        <div className="fs-5 p-1 px-2 rounded-2 text-dark text-center bg-light rounded-3">
          <span className="fw-bold mx-2">4600</span> جنية
        </div>
      </div>
    </div>
  );
};
