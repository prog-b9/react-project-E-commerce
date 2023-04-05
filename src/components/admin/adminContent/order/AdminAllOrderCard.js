import React from "react";
import { Link } from "react-router-dom";

export const AdminAllOrderCard = () => {
  return (
    <div className="col-12 col-lg-6">
      {" "}
      <Link style={{ textDecoration: "none" }} to={"/admin/orderDetails/:id"}>
        <div
          className="bg-white px-3 py-2 my-2 rounded-3"
          id="style-shadow-dark"
        >
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
              <div className="d-flex align-items-center justify-content-between">
                <div className="fw-bold  my-2" style={{ color: "#B5AD95" }}>
                  رقم الطلب{" "}
                  <span className="mx-2 text-dark fs-5 text-decoration-underline">
                    #41241521
                  </span>
                </div>
                <div className="d-flex align-items-center bg-danger rounded-circle p-2">
                  <button className="btn border-0 text-white p-0 m-0 d-flex align-items-center">
                    <ion-icon name="trash" id="icon-trash-can"></ion-icon>
                  </button>
                </div>
              </div>
              {/* row two */}
              <div className="my-2">
                <span
                  className="lh-lg"
                  style={{ color: "#4F4C13", fontWeight: "500" }}
                >
                  ايفون XS بذاكرة سعة 128 جيجا بايت يدعم تقنية ايفون XS بذاكرة
                  سعة 128 جيجا بايت يدعم تقنية{" "}
                </span>
                <span className="fw-bold mx-2" style={{ color: "#FFC107" }}>
                  4.5
                </span>
              </div>
              {/* row three */}
              <div>
                <span className="fw-bold  my-2" style={{ color: "#B5AD95" }}>
                  الماركة :{" "}
                </span>
                <span className="mx-2 fw-bold text-dark">آبل</span>
              </div>
              {/* row four */}

              <div className="nav">
                <li
                  onClick={() => console.log("danger")}
                  className={`ms-2 mt-2 btn bg-${"danger"} rounded-circle`}
                  style={{ width: "40px", height: "40px" }}
                  id="style-shadow"
                ></li>
              </div>
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

                <div className="fs-5 p-1 rounded-2 text-dark bg-light">
                  <span className="fw-bold mx-2">4600</span> جنية
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
