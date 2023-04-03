import React from "react";
import ReactStars from "react-rating-stars-component";

export const RatePost = () => {
  const rateSettings = {
    size: 25,
    count: 5,
    color: "#666",
    activeColor: "#FFC107",
    value: 2.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };
  return (
    <div>
      <div className="d-flex align-items-center my-3">
        <div className="fw-bold ms-2">اسم المستخدم</div>
        <div className="d-flex align-items-center">
          <ReactStars {...rateSettings} />
        </div>
      </div>
      <div className="form-floating">
        <textarea
          className="bg-body-tertiary p-3 pb-4 rounded-3 border-0 w-100 rate-post-textarea"
          placeholder="أكتب تعليقك ...."
          rows={3}
        ></textarea>
        <div className="d-flex justify-content-end">
          <button className="btn btn-dark my-2 px-3 py-2">إضافة التعليق</button>
        </div>
      </div>
    </div>
  );
};
