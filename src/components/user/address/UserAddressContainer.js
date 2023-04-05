import React from "react";
import UserAddressCard from "./UserAddressCard";
import { Link } from "react-router-dom";

const UserAddressContainer = () => {
  return (
    <div className="row">
      <UserAddressCard />
      <UserAddressCard />
      <UserAddressCard />
      {/* btn Add Address */}
      <div className="d-flex justify-content-center my-4">
        <Link to={"/user/addAddress"} className="btn btn-dark p-2 px-5">إضافة عنوان</Link>
      </div>
    </div>
  );
};

export default UserAddressContainer;
