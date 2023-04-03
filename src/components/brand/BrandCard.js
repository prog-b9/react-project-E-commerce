import React from "react";

export const BrandCard = ({ BrandImg }) => {
  return (
    <div className="my-2">
      <div className="card rounded-3 btn border-0 p-0" id="style-shadow">
        <img
          src={BrandImg}
          className="card-img-top"
          alt="brand"
        />
      </div>
    </div>
  );
};
