import React from "react";
import { RateItem } from "./RateItem";
import { RatePost } from "./RatePost";

export const RateContainer = () => {
  return (
    <div >
      <div id="rate-container-flex">
        <div className="fs-4 fw-bold ms-2">التقيمات</div>
        <div className="d-flex align-items-center">
          <img
            src="../../images/rate.png"
            style={{ width: "20px", height: "20px" }}
            alt=""
          />
          <div className="fw-bold mx-2" style={{ color: "#FFC107" }}>
            4.5
          </div>
        </div>
        <div className="mx-2">
          ( <span>160</span> التقييم)
        </div>
      </div>
      {/* Rate Add Comments textarea Section */}
      <RatePost/>
      {/* Rate Items Section */}
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
    </div>
  );
};
