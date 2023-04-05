import React from "react";
import { Link } from "react-router-dom";

const UserProfileInfoCard = () => {
  return (
    <div className="col-">
      <div className="bg-white p-3 rounded-3 " id="style-shadow-dark">
        {/* name */}
        <div className=" d-flex justify-content-between align-items-center">
          <div className="">
            <span className="fw-bold" style={{ color: "#B5AD95" }}>
              الأسم :
            </span>
            <span className="mx-2 text-muted">احمد عبدالله</span>
          </div>

          {/* Edit and Delete */}
          <div className="d-flex justify-content-between">
            <div className="d-flex mx-1 align-items-center bg-warning rounded-circle p-2">
              <Link
                to={"/user/editProfile"}
                className="btn border-0 text-dark p-0 m-0 d-flex align-items-center"
              >
                <ion-icon name="create" id="icon-trash-can"></ion-icon>
              </Link>
            </div>
            <div className="d-flex mx-1 align-items-center bg-danger rounded-circle p-2">
              <button className="btn border-0 text-white p-0 m-0 d-flex align-items-center">
                <ion-icon name="trash" id="icon-trash-can"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        {/* phone numeber */}
        <div className="my-3">
          <span className="fw-bold" style={{ color: "#B5AD95" }}>
            رقم الهاتف :{" "}
          </span>
          <span className="mx-2 text-muted">0530435697</span>
        </div>
        {/* Email */}
        <div className="my-3">
          <span className="fw-bold" style={{ color: "#B5AD95" }}>
            الأيميل :{" "}
          </span>
          <span className="mx-2 text-muted">prog.b9@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfoCard;
