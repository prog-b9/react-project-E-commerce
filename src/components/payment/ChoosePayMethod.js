import React from "react";

export const ChoosePayMethod = () => {
  return (
    <div>
      <h3 className="fw-bold py-4">اختر طريقة الدفع</h3>
      <div className="form-floating">
        <div className="bg-white p-3 rounded-3 my-2">
          <div className="my-3">
            <input
              className="form-check-input  mx-3 style-shadow"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              الدفع عن طريقة البطاقة الائتمانية
            </label>
          </div>
          <div className="my-3">
            <input
              className="form-check-input  mx-3 style-shadow"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              الدفع عند الاستلام
            </label>
          </div>
        </div>
        <div
          className="d-flex justify-content-between text-center"
          id="rate-container-flex"
        >
          <div
            className=" my-2 ms-2 px-3 py-2 rounded-2 text-white "
            id="discount-section-container-dis"
          >
            <span>السعر النهائي : </span>
            <span className="mx-2 fw-bold">3000 </span>
          </div>
          <button className="btn btn-dark my-2 px-3 py-2">إتمام الشراء</button>
        </div>
      </div>
    </div>
  );
};
