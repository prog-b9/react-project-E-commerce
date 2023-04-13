import React from "react";
import { Link } from "react-router-dom";

export const CartPay = () => {
  return (
    <div>
      <div className="bg-white p-2 pt-5 my-2 rounded-4 position-relative">

        {/* absolute discount */}
        <div
          className="position-absolute px-3 py-1 text-white text-center rounded-5"
          id="discount-section-container-dis"
          style={{ top: "-10px", right: "10px" }}
        >
          كوبون خصم
        </div>

        <div className=" row justify-content-center m-auto" id="width-cart-pay">
          <input
            type="text"
            className="col-8 col-sm-4 col-md-8 border-0 rounded-0 rounded-end p-2 text-center"
            autoComplete="off"
            style={{ outline: "none", backgroundColor: "#ececec" }}
            placeholder="كود الخصم"
            id="style-shadow"
          />
          <button
            className="col-3 col-sm-2 col-md-3 border-0 rounded-0 rounded-start btn btn-dark p-2"
            type="button"
          >
            تطبيق
          </button>
        </div>
        <div className="col-11 col-sm-6 col-md-11 m-auto fs-5 p-1 bg-light  text-center rounded-2 my-3" id="width-cart-pay">
          <span className="fw-bold mx-2">4600</span> جنية
        </div>
        <div className="col-11  col-sm-6 col-md-11 m-auto text-center my-3" id="width-cart-pay">
          <Link to={"/pay"} className=" w-100 border-0 p-2 btn btn-dark text-white">
            اتمام الشراء
          </Link>
        </div>
      </div>
    </div>
  );
};
