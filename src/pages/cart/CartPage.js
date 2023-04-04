import React from "react";
import { CartProductsContainer } from "../../components/cart/CartProductsContainer";
import { CartPay } from "../../components/cart/CartPay";

export const CartPage = () => {
  return (
    <div className="bg-light pb-5">
      <div className="container">
        {/* <div className="py-3"> */}
        <h3 className="fw-bold py-4">عربة التسوق</h3>
        {/* </div> */}
        <div className="row">
          <div className="col-12  col-md-7 col-lg-8 col-xl-9">
            <CartProductsContainer />
          </div>
          <div className="col-12  col-md-5 col-lg-4 col-xl-3">
            <CartPay />
          </div>
        </div>
      </div>
    </div>
  );
};
