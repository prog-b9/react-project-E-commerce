import React from "react";
import Zoom from "react-reveal/Zoom";

export const DsicountSection = () => {
  return (
    <div className="container my-5">
      <Zoom>
        <div
          className=" rounded-4 text-white text-center p-3 position-relative"
          id="discount-section-container"
        >
          <h4 className="">خصم يصل ختى 30% على اجهزة اللاب توب</h4>
          <img
            src="../../images/labtop.png"
            style={{ width: "200px", height: "150px" }}
            alt="img-laptop"
          />
          <div
            className="position-absolute px-3 py-1  rounded-5"
            id="discount-section-container-dis"
            style={{ top: "-10px", right: "30px" }}
          >
            خصم 30%{" "}
          </div>
        </div>
      </Zoom>
    </div>
  );
};
