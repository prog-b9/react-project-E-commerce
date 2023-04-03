import React from "react";

export const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item bg-info d-flex justify-content-around align-items-center ">
            <div>
              <img
                src="../../images/slider-01.png"
                className="d-block"
                style={{ maxWidth: "100%", height: "300px" }}
                alt="img-silder"
              />
            </div>
            <div className="text-center text-danger text-opacity-75 p-3">
              <h5>هناك خصم كبير</h5>
              <h2 className="fw-bold mt-4">خصم يصل الى 50% عند شرائك</h2>
            </div>
          </div>
          <div className="carousel-item bg-info d-flex justify-content-around align-items-center  active">
            <div>
              <img
                src="../../images/slider-02.png"
                className="d-block"
                style={{ maxWidth: "100%", height: "300px" }}
                alt="img-silder"
              />
            </div>
            <div className="text-center text-danger text-opacity-75 p-3">
              <h5>هناك خصم مناسب لكم</h5>
              <h2 className="fw-bold mt-4">خصم يصل الى 10% عند شرائك</h2>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
