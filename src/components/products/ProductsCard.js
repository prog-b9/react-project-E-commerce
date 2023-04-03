import React from "react";
import { Link } from "react-router-dom";

export const ProductsCard = () => {
  return (
    <div className="my-2">
      <Link to={"/productsDetails/:id"} className="card btn border-0" id="style-shadow">
        <img
          src={"../../images/item.png"}
          id="img-products-card"
          className="card-img-top m-auto"
          alt="products"
        />
        <div className="card-body p-0">
          <div className="d-flex justify-content-between">
            <div></div>
            <div className="card-title">
              <img
                src="../../images/fav-off.png"
                style={{ maxWidth: "30px", height: "30px" }}
                alt="fav-off"
              />
            </div>
          </div>
          <p className="" id="title-product-card">اسود كربون ساعة يد ذكية بيب اس اسود كبرون</p>
          <div className=" d-flex justify-content-between" id="price-with-star-product-card">


            <div className="d-flex align-items-center justify-content-center">
              <div className="mx-2">4.5</div>
              <img
                src="../../images/rate.png"
                style={{ maxWidth: "17px", height: "17px" }}
                alt="star"
              />
            </div>
            <div className="d-flex align-items-center  rounded p-2 justify-content-center">
              <span className="mx-2 fw-bold">800</span>
              <span>جنية</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
