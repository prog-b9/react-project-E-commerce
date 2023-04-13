import React from "react";

export const BrandCard = ({ BrandImg }) => {
  return (
    <div className=" my-2">
      <div
        className="card  rounded-3 btn border-0 p-0 d-flex justify-content-center align-items-center bg-white"
        id="style-shadow"
      >
        <img
          src={BrandImg}
          className="card-img-top p-2 "
          alt="brand"
          style={{ width: "130px", height: "130px" }}
        />
      </div>
    </div>
  );
};
