import React from "react";
import UserProfileEditPassword from "./UserProfileEditPassword";
import UserProfileInfoCard from "./UserProfileInfoCard";

const UserProfileContainer = () => {
  return (
    <div>
      <UserProfileInfoCard />
      {/*  */}
      <h3 className="fw-bold mt-4"> تغيير كلمة المرور</h3>
      <UserProfileEditPassword />
    </div>
  );
};

export default UserProfileContainer;
