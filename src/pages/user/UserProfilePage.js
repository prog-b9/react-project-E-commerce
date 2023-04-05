import React from "react";
import { UserSideBar } from "../../components/user/UserSideBar";
import UserProfileContainer from "../../components/user/profile/UserProfileContainer";

export const UserProfilePage = () => {
  return (
    <div className="" style={{ minHeight: "90vh" }}>
      <div className="row m-0 ">
        {/* Side bar */}
        <div className="col-12 col-md-4 col-lg-3 col-xl-2 ">
          <UserSideBar />
        </div>
        <div className="col-12 col-md-8 col-lg-9 col-xl-10">
          <h3 className="fw-bold py-4"> معلوماتك الشخصية</h3>
          <UserProfileContainer />
        </div>
      </div>
    </div>
  );
};
