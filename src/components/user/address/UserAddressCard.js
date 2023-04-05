import React from "react";
import { Link } from "react-router-dom";

const UserAddressCard = () => {
  return (
    <div className="col-12 col-sm-4">
      <div className="bg-white p-3 rounded-3 my-3" id="style-shadow-dark">
        {/* header */}
        <div className="d-flex justify-content-between">
          {/* home */}
          <div className="fw-bold">المنزل</div>
          <div className="d-flex justify-content-between">
            {/* Edit and Delete */}
            <div className="d-flex mx-1 align-items-center bg-warning rounded-circle p-2">
              <Link
                to={"/user/editAddress"}
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
        {/* center */}
        <div className="my-3 fw-bold text-center text-sm-end">
          القاهرة مديتة نصر شارع التسعين عماره 14
        </div>
        {/* phone numeber */}
        <div className="my-3">
          <span className="fw-bold" style={{ color: "#B5AD95" }}>
            رقم الهاتف :{" "}
          </span>
          <span className="mx-2 text-muted fw-bold">0530435697</span>
        </div>
      </div>
    </div>
  );
};

export default UserAddressCard;
