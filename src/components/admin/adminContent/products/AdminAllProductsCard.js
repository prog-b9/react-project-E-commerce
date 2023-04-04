import React from "react";
// import { Link } from "react-router-dom";

export const AdminAllProductsCard = () => {
  return (
    <div className="col-6 col-lg-4 col-xl-4 col-xxl-3 my-2">
      <div className="card bg-light p-2 border-0" id="style-shadow-dark">
        <div className="d-flex justify-content-between">
          {/* <div>
            <ion-icon name="create"></ion-icon>
            </div> */}
          <div className="d-flex align-items-center bg-warning rounded-circle p-2">
            <button className="btn border-0 text-dark p-0 m-0 d-flex align-items-center">
              <ion-icon name="create" id="icon-trash-can"></ion-icon>
            </button>
          </div>
          <div className="d-flex align-items-center bg-danger rounded-circle p-2">
            <button className="btn border-0 text-white p-0 m-0 d-flex align-items-center">
              <ion-icon name="trash" id="icon-trash-can"></ion-icon>
            </button>
          </div>
        </div>
        <img
          src={"../../images/item.png"}
          id="img-products-card"
          className="card-img-top m-auto"
          alt="products"
        />
        <div className="card-body p-0">
          <p className="" id="title-product-card">
            اسود كربون ساعة يد ذكية بيب اس اسود كبرون
          </p>
          <div
            className=" d-flex justify-content-between"
            id="price-with-star-product-card"
          >
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
      </div>
    </div>
  );
};
