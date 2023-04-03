import React from "react";

export const BtnArrowLeft = (propsOnClick, propsOnDisable) => {
  return (
    <div
      className=" d-flex h-100 position-absolute align-items-center"
      style={{ left: "0" }}
    >
      <img
        src="../../images/next.png"
        className="mx-2"
        onClick={propsOnClick}
        // onDisable={propsOnDisable}
        style={{
          width: "35px",
          height: "35px",
          cursor: "pointer",
          zIndex: "1",
        }}
        alt="next"
      />
    </div>
  );
};
