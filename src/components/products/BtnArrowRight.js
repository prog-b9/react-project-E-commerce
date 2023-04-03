import React from "react";

export const BtnArrowRight = (propsOnClick, propsOnDisable) => {
  return (
    <div className="d-flex h-100 position-absolute align-items-center">
      <img
        src="../../images/prev.png"
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
