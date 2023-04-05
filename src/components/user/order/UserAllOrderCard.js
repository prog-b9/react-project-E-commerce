import React from "react";

export const UserAllOrderCard = () => {
  return (
    <div className=" px-3 py-2  border-bottom " >
      <div className="row">
        <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
          <img
            src="../../images/labtop.png"
            style={{ maxWidth: "100%", height: "150px" }}
            alt=""
            className=""
          />
        </div>
        <div className="col-12 col-md-9">
          {/* row one */}

          {/* row two */}
          <div className="my-2">
            <span
              className="lh-lg"
              style={{ color: "#4F4C13", fontWeight: "500" }}
            >
              ايفون XS بذاكرة سعة 128 جيجا بايت يدعم تقنية ايفون XS بذاكرة سعة
              128 جيجا بايت يدعم تقنية{" "}
            </span>
          </div>
          {/* row three */}
          <div className="my-2">
            <span className="fw-bold mx-2" style={{ color: "#FFC107" }}>
              4.5
            </span>
            <span className="mx-2">
              ( <span>160</span> التقييم)
            </span>
          </div>
          {/* row four */}

          {/* row fifth */}
          <div className="d-flex justify-content-between align-items-center my-2">
            <div className="  my-4 ">
              <span className="fw-bold  my-2" style={{ color: "#B5AD95" }}>
                الكمية :
              </span>
              <input
                type="number"
                className="mx-2"
                readOnly
                style={{ width: "60px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
